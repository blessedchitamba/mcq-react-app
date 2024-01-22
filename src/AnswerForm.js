import AnswerOption from "./AnswerOption";
import { useState } from "react";
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarController,
    BarElement,
    Title,
    Tooltip,
    Legend
  } from 'chart.js';
  
  ChartJS.register(
    Title,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    BarElement,
    BarController
  );

export default function AnswerForm({question_options, question_number}){
    const[options, setOptions] = useState(question_options); 
    const[checked, setChecked] = useState(false);

    const poll_results = options.map(o => {return o.voter_count;});
    const data = {
        labels: options.map(o => {return o.answer_option;}),
        datasets: [
          {
            label: 'Results',
            axis: 'y',
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            data: poll_results,
          },
        ],
      };

      const chart_options = {
        indexAxis: 'y',
        scales: {
            x: {
              grid: {
                display: false      
              },
              border: {
                display: false
              },
            //   ticks: {
            //     display: false
            //   }
            },
            y: {
              grid: {
                display: false      
              },
              border: {
                display: false
              }
            }
          },
        plugins: {
            title: {
                display: false
            }
        }
      }

    function onChecked(i){
        let selected = options.filter(o => o.answer_option===i);
        console.log("the answer you chose is ",selected.pop());
        //update poll results
        const next_options = options.map(o=>{
                            if(o.answer_option != i){
                                return o;
                            } else {
                                return {
                                    ...o,
                                    voter_count: o.voter_count + 1
                                }
                            }
                        })
        setOptions(next_options);
        setChecked(true);
    }

    const elements = options.map(option =>{
        return <AnswerOption 
                id={option.answer_option}
                name={question_number}
                value={option.answer_option}
                text={option.text} 
                onClick={()=>onChecked(option.answer_option)}
                />
    });

    let toRender;
    if(checked){
        toRender = <Bar data={data} options={chart_options} />;
    } else {
        toRender =<>
                    <legend>Select the correct answer</legend>
                    {elements}
                </> 
    }
    
    return (
        <>
            <fieldset>
                {toRender}
            </fieldset>
        </>
    );
}
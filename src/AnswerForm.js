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

export default function AnswerForm(){
    const[options, setOptions] = useState([
        {id: 0, answer_option: "A", question: "question_1", text: "Inheritance", voter_count: 2},
        {id: 1, answer_option: "B", question: "question_1", text: "Polymorphism", voter_count: 4},
        {id: 2, answer_option: "C", question: "question_1", text: "Data Structures", voter_count: 3},
        {id: 3, answer_option: "D", question: "question_1", text: "I have no idea", voter_count: 1}
    ]);
    
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
                name={option.question}
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
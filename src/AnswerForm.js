import AnswerOption from "./AnswerOption";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
//import { Axios } from "axios";
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

/*
This class represents a single answer form corresponding to a single exam question i.e. a set of options A,B,C etc. and the question number
*/
export default function AnswerForm({question_options, question_number}){
    const[counts, setCounts] = useState(new Array(4).fill(0)); 
    const[checked, setChecked] = useState(false);

    async function fetchVoterCounts(question_number) {
      try {
          const response = await axios.get("http://localhost:8080/api/v1/votercount/CS2002S Exam 2021/"+question_number)
          setCounts(response.data.voterCounts)
      } catch (error) {
          console.error(error);
      }
    }
    
    useEffect(() => {
      fetchVoterCounts(question_number);
    },[])

    //const poll_results = counts.map(o => {return o.voter_count;});
    const letter_map = ['A','B','C','D','E'];
    const data = {
        //labels: question_options.map(o => {return o.answer_option;}),
        labels: letter_map,
        datasets: [
          {
            label: 'Results',
            axis: 'y',
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            data: counts,
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


    //receive the letter of the checked option i.e (i), map it to an index in letter_map, update the count at the corresponding int index in counts
    function onChecked(i){
        let selected = question_options.filter((o, index) => index===letter_map.indexOf(i)); //selected is an object
        console.log("selected.answeroption is ",selected);
        const nextCounts = counts.map((c, count_index)=>{
                            if(count_index != letter_map.indexOf(i)){
                                return c;
                            } else {
                                return c+1;
                            }
                        })
        console.log("nextCOunts is ",nextCounts);
        setCounts(nextCounts);
        setChecked(true);
    }

    const elements = question_options.map((option,index) =>{
        return <AnswerOption 
                  id={letter_map[index]}
                  name={question_number}
                  value={letter_map[index]}
                  text={option} 
                  onClick={()=>onChecked(letter_map[index])}
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
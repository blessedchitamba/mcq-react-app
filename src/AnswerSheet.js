import AnswerForm from "./AnswerForm";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

/*
This class represents an entire answer sheet corresponding to an exam paper and consists of a bunch of answer forms for each question
*/
export default function AnswerSheet({title}){
    //This component gets json data of multiple MCQ questions and renders AnswerForm components and passes data
    //State of each question is kept and updated in the answer form 
    // const questions = [
    //     {
    //         "question": "question_1",
    //         "answers": [
    //             {"id": 0, "answer_option": "A", "text": "Inheritance", "voter_count": 2},
    //             {"id": 1, "answer_option": "B", "text": "Polymorphism", "voter_count": 4},
    //             {"id": 2, "answer_option": "C", "text": "Data Structures", "voter_count": 3},
    //             {"id": 3, "answer_option": "D", "text": "I have no idea", "voter_count": 1}
    //         ]
    //     },
    //     {
    //         "question": "question_2",
    //         "answers": [
    //             {"id": 4, "answer_option": "A", "text": "Sorting Algorithms", "voter_count": 2},
    //             {"id": 5, "answer_option": "B", "text": "Searching Algorithms", "voter_count": 4},
    //             {"id": 6, "answer_option": "C", "text": "Graph Algorithms", "voter_count": 3},
    //             {"id": 7, "answer_option": "D", "text": "I have no idea", "voter_count": 1}
    //         ]
    //     },
    //     {
    //         "question": "question_3",
    //         "answers": [
    //             {"id": 8, "answer_option": "A", "text": "Object Oriented Programming", "voter_count": 2},
    //             {"id": 9, "answer_option": "B", "text": "Functional Programming", "voter_count": 4},
    //             {"id": 10, "answer_option": "C", "text": "Procedural Programming", "voter_count": 3},
    //             {"id": 11, "answer_option": "D", "text": "I have no idea", "voter_count": 1}
    //         ]
    //     },
    //     {
    //         "question": "question_4",
    //         "answers": [
    //             {"id": 12, "answer_option": "A", "text": "Java", "voter_count": 2},
    //             {"id": 13, "answer_option": "B", "text": "Python", "voter_count": 4},
    //             {"id": 14, "answer_option": "C", "text": "JavaScript", "voter_count": 3},
    //             {"id": 15, "answer_option": "D", "text": "I have no idea", "voter_count": 1}
    //         ]
    //     },
    //     {
    //         "question": "question_5",
    //         "answers": [
    //             {"id": 16, "answer_option": "A", "text": "HTML", "voter_count": 2},
    //             {"id": 17, "answer_option": "B", "text": "CSS", "voter_count": 4},
    //             {"id": 18, "answer_option": "C", "text": "XML", "voter_count": 3},
    //             {"id": 19, "answer_option": "D", "text": "I have no idea", "voter_count": 1}
    //         ]
    //     }
    // ]
    const[questions, setQuestions] = useState([]);
        
    async function fetchData() {
        try {
            const response = await axios.get("http://localhost:8080/api/v1/answersheet")
            setQuestions(response.data)
        } catch (error) {
            console.error(error);
        }
    }
    
    useEffect(() => {
      fetchData();
    },[])

    const forms = questions.map(q => {
        return <AnswerForm question_options={q.answers} question_number={q.question} />
    });
    
    return (
        <>
            <div>
                <h1 id="title">{title}</h1>
            </div>
            <div>
                {forms}
            </div>
            <div id="buttonDiv">
                <button id="submit">Submit All</button>
            </div>
        </>
    );
}
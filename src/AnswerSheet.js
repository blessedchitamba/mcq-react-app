import AnswerForm from "./AnswerForm";

export default function AnswerSheet(){
    //This component gets json data of multiple MCQ questions and renders AnswerForm components and passes data
    //State of each question 
    const questions = [
        {
            "question": "question_1",
            "answers": [
                {"id": 0, "answer_option": "A", "text": "Inheritance", "voter_count": 2},
                {"id": 1, "answer_option": "B", "text": "Polymorphism", "voter_count": 4},
                {"id": 2, "answer_option": "C", "text": "Data Structures", "voter_count": 3},
                {"id": 3, "answer_option": "D", "text": "I have no idea", "voter_count": 1}
            ]
        },
        {
            "question": "question_2",
            "answers": [
                {"id": 4, "answer_option": "A", "text": "Sorting Algorithms", "voter_count": 2},
                {"id": 5, "answer_option": "B", "text": "Searching Algorithms", "voter_count": 4},
                {"id": 6, "answer_option": "C", "text": "Graph Algorithms", "voter_count": 3},
                {"id": 7, "answer_option": "D", "text": "I have no idea", "voter_count": 1}
            ]
        },
        {
            "question": "question_3",
            "answers": [
                {"id": 8, "answer_option": "A", "text": "Object Oriented Programming", "voter_count": 2},
                {"id": 9, "answer_option": "B", "text": "Functional Programming", "voter_count": 4},
                {"id": 10, "answer_option": "C", "text": "Procedural Programming", "voter_count": 3},
                {"id": 11, "answer_option": "D", "text": "I have no idea", "voter_count": 1}
            ]
        },
        {
            "question": "question_4",
            "answers": [
                {"id": 12, "answer_option": "A", "text": "Java", "voter_count": 2},
                {"id": 13, "answer_option": "B", "text": "Python", "voter_count": 4},
                {"id": 14, "answer_option": "C", "text": "JavaScript", "voter_count": 3},
                {"id": 15, "answer_option": "D", "text": "I have no idea", "voter_count": 1}
            ]
        },
        {
            "question": "question_5",
            "answers": [
                {"id": 16, "answer_option": "A", "text": "HTML", "voter_count": 2},
                {"id": 17, "answer_option": "B", "text": "CSS", "voter_count": 4},
                {"id": 18, "answer_option": "C", "text": "XML", "voter_count": 3},
                {"id": 19, "answer_option": "D", "text": "I have no idea", "voter_count": 1}
            ]
        }
    ]

    const forms = questions.map(q => {
        return <AnswerForm question_options={q.answers} question_number={q.question} />
    });
    console.log("forms is ",forms);
    return (
        <>
            {forms}
        </>
    );
}
import AnswerOption from "./AnswerOption";

export default function AnswerForm(){
    const options = [
        {id: 0, answer_option: "A", question: "question_1", text: "Inheritance", voter_count: 0},
        {id: 1, answer_option: "B", question: "question_1", text: "Polymorphism", voter_count: 0},
        {id: 2, answer_option: "C", question: "question_1", text: "Data Structures", voter_count: 0},
        {id: 3, answer_option: "D", question: "question_1", text: "I have no idea", voter_count: 0}
    ];

    const elements = options.map(option =>{
        return <AnswerOption 
                id={option.answer_option}
                name={option.question}
                value={option.answer_option}
                text={option.text} />
    });
    
    return (
        <fieldset>
            <legend>Select the correct answer</legend>
                {elements}
        </fieldset>
    );
}
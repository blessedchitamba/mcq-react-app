export default function AnswerOption({id,name,value,text,onClick}){

    return(
        <div>
            <input type="radio" id={id} name={name} value={value} onChange={onClick} />
            <label for={value}>{text}</label>
        </div>
    );
}
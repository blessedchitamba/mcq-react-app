export default function AnswerOption({id,name,value,text}){

    return(
        <div>
            <input type="radio" id={id} name={name} value={value}  />
            <label for={value}>{text}</label>
        </div>
    );
}
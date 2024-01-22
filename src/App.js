import logo from './logo.svg';
import './App.css';
import AnswerForm from './AnswerForm.js';
import AnswerSheet from './AnswerSheet';

function App() {
  return (
    <div className="App">
      <AnswerSheet />
    </div>
  );
}

export default App;

{/*
TODO: 
1) get answer form component to work when an answer is clicked on:
    - answer form has an array of objects, each object representing an answer option: {id: db_id, answer_option: "A", question: "question_1", text: "An answer", voter_count: 27}
    - answer form uses this array to render answer options
    - when user clicks to vote, answer form updates count and displays horizontal bar graphs of each answer with the percentage stats
        1. register an on click listener on the answer form div
        2. user clicks, and we use info from the event object to update the appropriate count
        3. answer form then re-renders the answer options. Maybe have a separate component class for answer result
        4. find out how best to render this bar graph notation.
2) after that create an answer sheet component that renders answer forms
*/}
import {data} from './data.js';
import { Question } from './questions.js';




data.map((question)=>{
new Question(question.text, question.choices, question.answer)
})
import React from 'react';
import {Link} from "@reach/router";
//import Question from './Question';
import AskQuestion from "./AskQuestion";

function Questions (props){


        //Map the questions to the question component by using props
            //Pass the question id to the link path
            
            const contentQuestions = props.questions.map((question) =>
            <div key={question.id}>
                <h3><Link to={`/question/${question.id}`}>{question.text}</Link></h3>
            </div>
        );
        
        
 /*Add an empty list of questions that will store the new questions
        let newQuestions = []; // Empty items array

        // For each item in this.props.questions, use "value" (a task object) and "index" (position in the list)
        this.props.questions.forEach((value, id) => {
            newQuestions.push(
                // and put those two values into a question component and push it to the items array
            
                <Question key={id} question={value} id={id}/>
            )
        });
*/
        


    return(
        <div>
        
            <div>
            {contentQuestions}
            </div>

            <AskQuestion />

        </div>

 

    );

}

export default Questions;
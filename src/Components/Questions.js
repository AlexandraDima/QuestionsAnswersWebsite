import React, {Component} from 'react';
import {Link} from "@reach/router";
import AskQuestion from "./AskQuestion";

class Questions extends Component{
 
    constructor(props) {
        super(props);
    }
   

    render() {
       //Map the questions to the question component by using props
            //Pass the question id to the link path
            
            const contentQuestions = this.props.questions.map((question) =>
            <div key={question.id}>
                <h3><Link to={`/question/${question.id}`}>{question.text}</Link></h3>
          
            </div>
            
        );
        
    return(
        <div>
        
            <div>
            {contentQuestions}
            <AskQuestion askQuestion={(text) => this.props.askQuestion(text)}/>

            </div>

        </div>

 

    );

}
}

export default Questions;
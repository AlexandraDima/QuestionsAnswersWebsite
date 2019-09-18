import React, {Component} from 'react';
import {Link} from "@reach/router";

class Question extends Component{
    constructor(props){
        super(props);
        this.state = {
            // See App.js for more details. loadRecipe is defined there.
            question: this.props.getQuestion(this.props.id)
        }
    }
    render(){
        let title =" ";
        let listAnswers=" ";


        if (this.state.question) {
            title = this.state.question.title
            listAnswers = this.state.question.answers.map((answer, id) =>
              <li key={id}>{answer}</li>
            );
        }
        return(
            <React.Fragment>
                <h1>Question is:</h1>
                <h2>{title}</h2>

                <div>
                    <h3>Answers</h3>
                    <ol>{listAnswers}</ol>
                </div>

                <Link to="/">Go back</Link>

            </React.Fragment>
        );
    }
}

export default Question;
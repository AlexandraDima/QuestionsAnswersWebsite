import React, {Component} from 'react';
import {Link} from "@reach/router";

class Question extends Component{
    constructor(props){
        super(props);
        this.state = {
            // See App.js for more details. loadRecipe is defined there.
            question: this.props.getQuestion(this.props.id)
        }
        this.handleVote = this.handleVote.bind(this);
    }

    handleVote(event) {
        let answerId = event.currentTarget.dataset.id;
        console.log(answerId);
        this.props.handleVote(this.props.id, answerId);
    }

    render(){
        let title =" ";
        let listAnswers=" ";

        if (this.state.question) {
            title = this.state.question.text
            listAnswers = this.state.question.answers.map((answer,id) =>
                <div key={answer.id} id={answer.id}>
                   <div>Votes: {answer.votes}</div>
                  <div>{answer.text}</div>
                  <button onClick={() => this.props.handleVote(this.props.id, answer.id)}>Vote up</button>
                  <button data-id={answer.id} onClick={this.handleVote}>Vote up</button>
                </div>
            );
        }
        return(
            <React.Fragment>
                <h1>Question is:</h1>
                <h2>{title}</h2>

                <div>
                    <h3>Answers</h3>
                    <div>{listAnswers}</div>
                </div>

                <Link to="/">Go back</Link>

            </React.Fragment>
        );
    }
}

export default Question;
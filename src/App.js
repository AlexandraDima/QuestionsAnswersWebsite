import React, {Component} from 'react';
import { Router } from "@reach/router";
import Question from "./Components/Question";
import Questions from "./Components/Questions";
//import PostQuestion from "./Components/PostQuestion";
import Nav from "./Components/Nav";
//import Home from "./Components/Home";
import AskQuestion from './Components/AskQuestion';


class App extends Component {
  //Initialize the state data of the recipes
  constructor(props){
    //This helps building the state
    super(props);

    //Actual data
    this.state = {
      questions: [
        {
          id: 1,
          text: "How do I return the response from an Observable in Angular 2?",
          answers: [
            {id: 0,text: "Answer 1", votes: 2},
            {id: 1,text: "Answer 2", votes: 3},
            {id: 2,text: "Answer 3", votes: 0}
          ]
        },

        {
          id: 2,
          text: "How do I return the response from an Observable in Angular 2?",
          answers: [
            {id: 0,text: "Answer 1", votes: 2},
            {id: 1,text: "Answer 2", votes: 3},
            {id: 2, text: "Answer 3", votes: 0}
          ]
        }

      ]
    };

  }

  //Function to get the question ID
  getQuestion(id) {
    //  go over all elements in 'this.state.question' and find the element
    // that matches 'e.id === Number(id)' where 'e' is one of the objects in 'this.state.questions'

    return this.state.questions.find(e => e.id === Number(id)); // And then return it
  }

  //Function to vote the answers
  handleVote(questionId, answerId) {
    this.setState(prevState => ({
      questions: prevState.questions.map(question => 
        question.id === Number(questionId) ? this.findAnswer(question, answerId) : question)
    }), () => {
     console.log(this.state);
    });
    console.log('The link was clicked.');
  };

  findAnswer = (question, answerId) => {
      question.answers = question.answers.map(answer => answer.id === Number(answerId) ? this.updateVote(answer) : answer);
      return question;
  }

  updateVote = (answer) => {
    answer.votes = answer.votes + 1;
    return answer;
  }

    
    //Function to ask new question
  askQuestion(question) {
    // This is the question object that will be saved to the list of questions
    const questionObject = {
        text: question
    };

    // A new state object with a new question is set
    this.setState({
        // The new todoList contains all the old items + the new taskObject (...spread syntax)
        questions: [...this.state.questions, questionObject]
    });
}

/* I can't save it
  handleVote = (event) => {
    console.log('The link was clicked.');
    
    this.setState(state => {
      const votes= this.state.questions.map(votes => votes + 1);
      return {
        votes,
      };
    }); 
 
    /*
    this.setState({
      votes: this.state.votes + 1,
   
    }); 
  }*/

  render(){
    return (
        <React.Fragment>
          <h1>QA website</h1>
          {/*  <Nav> is not a target for routing, so we put it outside of <Router>
                         *  It will appear as a header on each page.
                         */}
          <Nav />

          <Router>

            
            {/*

            Find the question id and return the path
            GetQuestion() function has to be called from inside the Question state component
             */}
            <Question path="/question/:id" getQuestion={(id) => this.getQuestion(id)} handleVote={(event)=> this.handleVote(event)}/>

            <Questions path="/" questions={this.state.questions}></Questions>

            <AskQuestion  path="/askquestions" askQuestion={(question) => this.askQuestion(question)}/>
          </Router>
        </React.Fragment>
    );
  }

}

export default App;


import React, {Component} from 'react';
import { Router } from "@reach/router";
import Question from "./Components/Question";
import Questions from "./Components/Questions";
//import AskQuestion from "./Components/AskQuestion";
//import PostQuestion from "./Components/PostQuestion";
import Nav from "./Components/Nav";
import Home from "./Components/Home";


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
          title: "How do I return the response from an Observable in Angular 2?",
          answers: [
            "Observables are lazy so you have to subscribe to get the value.",
            "You can use asyncPipe",
            "The reason that it's undefined is that you are making an asynchronous operation"
          ]
        },
        {/*
         {
          id: 2,
          title: "I have another question. What is..?",
          answers: [
            {a: "Answer 1", votes: 2},
            {a: "Answer 2", votes: 3},
            {a: "Answer 3", votes: 0}
          ]
        },
        {
          id: 3,
          title: "What IS this??",
          answers: [
            {a: "Answer 1", votes: 0},
            {a: "Answer 2", votes: 1}
          ]
        }



         */},
        {
          id: 2,
          title: "How do I return the response from an Observable in Angular 2?",
          answers: [
            "Observables are lazy so you have to subscribe to get the value.",
            "You can use asyncPipe",
            "The reason that it's undefined is that you are making an asynchronous operation"
          ]
        }
      ]
    }
  }

  //Function to get the question ID
  getQuestion(id) {
    //  go over all elements in 'this.state.question' and find the element
    // that matches 'e.id === Number(id)' where 'e' is one of the objects in 'this.state.questions'

    return this.state.questions.find(e => e.id === Number(id)); // And then return it
  }

  render(){
    return (
        <React.Fragment>
          <h1>QA website</h1>
          {/*  <Nav> is not a target for routing, so we put it outside of <Router>
                         *  It will appear as a header on each page.
                         */}
          <Nav />

          <Router>

            <Home path="/"></Home>
            {/*

            Find the question id and return the path
            GetQuestion() function has to be called from inside the Question state component
             */}
            <Question path="/question/:id" getQuestion={(id) => this.getQuestion(id)} />
            <Questions path="/questions" questions={this.state.questions}></Questions>

            {/*Add AskQuestion link and PostQuestion*/}
          </Router>
        </React.Fragment>
    );
  }

}

export default App;


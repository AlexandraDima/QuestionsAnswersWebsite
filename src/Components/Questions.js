import React, {Component} from 'react';
import {Link} from "@reach/router";

function Questions (props){

  //Map the questions to the question component by using props
    //Pass the question id to the link path
    const contentQuestions = props.questions.map((question) =>
        <div key={question.id}>
            <h3><Link to={`/question/${question.id}`}>{question.title}</Link></h3>
        </div>
    );



    return(
        <div>
            {contentQuestions}
        </div>


    );

}

export default Questions;
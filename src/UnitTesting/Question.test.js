import React from 'react';
import {render, fireEvent} from 'react-testing-library';
import Question from './Question';

// Some test data for the tests.
const question = {
    id: 1,
    text: "How do I return the response from an Observable in Angular 2?",
    answers: [
        {text: "Observables are lazy so you have to subscribe to get the value.", votes: 5},
        {text: "You can use asyncPipe", votes: -2},
        {text: "The reason that it's undefined is that you are making an asynchronous operation", votes: 3},
    ]
};

it('renders Question data, including all answers', () => {
    const comp = <Question getQuestion={id => question}/>
    const {getByText, getByLabelText} = render(comp);
    expect(getByText(question.text)).toBeInTheDocument();
    expect(getByText(question.answers[0].text)).toBeInTheDocument();
    expect(getByText(question.answers[1].text)).toBeInTheDocument();
    expect(getByText(question.answers[2].text)).toBeInTheDocument();
});

it('calls "handleVote" when the voting button is clicked', () => {
    // This mock function doesn't really do anything other that
    // keeping track of when it is called.
    const handleVote = jest.fn();
    const comp =
        <Question
            getQuestion={id => question}
            handleVote={handleVote}
        />

    const {getAllByText} = render(comp);
    // This simulates a mouse click on the page. Neat!
    // You might need to adjust the code in case you button has a different text
    fireEvent.click(getAllByText(/vote up/i)[0]);
    // We expect the mock function to have been called (by the click above)!
    expect(handleVote).toHaveBeenCalled();
});

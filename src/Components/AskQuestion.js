import React, {Component} from 'react';

export class AskQuestion extends Component {

    constructor(props) {
        super(props); // This line is calling the constructor in the super class.

        this.state = { // When initializing the state in the constructor, we just create it as an object.
            input: "" // input is initialized to the empty string.
        };
    }
    handleChange(event) {
        this.setState({
            input: event.target.value // Set the value in this.state to the current value of the input DOM element
            // The above event.target.value is vanilla JavaScript to get value from event DOM target
        });
       
    }

    handleButtonClick(event) {
        event.preventDefault(); // Prevents the form button reloading the whole page. We don't do reloads in a SPA.
        this.props.askQuestion(this.state.input); // Add the question to the state of questions in App.js
        // this.props.askQuestion is actually the arrow function in App.js (from the render method)
        console.log("New question");
    }

    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <form>
                        <div className="form-group">
                            <label htmlFor="questionObject">New question</label>
                            <input type="text" className="form-control" id="itemQuestion"
                                   placeholder="Ask a new question"
                                   onChange={(event) => this.handleChange(event)}
                            />
                            <small className="form-text text-muted">Ask a question
                            </small>
                        </div>
                        <button onClick={(event) => this.handleButtonClick(event)}
                            type="submit" id="submitItemBtn" className="btn btn-primary">Ask question
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default AskQuestion;


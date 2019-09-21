import React, {Component} from 'react';
import {Link} from "@reach/router";

class Nav extends Component {
    render(){
        return(
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/questions">Questions</Link></li>
                <li><Link to="/askquestions">Ask Question</Link></li>
            </ul>
        );
    }
}

export default Nav;
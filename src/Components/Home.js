import React, {Component} from 'react';
import {Link} from "@reach/router";



class Home extends Component {
    render() {
        return(
            <React.Fragment>
                <h1>Home</h1>

                <ul>
                    <li><Link to="/question/:id"></Link></li>

                </ul>
            
            </React.Fragment>
        );
    }
}

export default Home;
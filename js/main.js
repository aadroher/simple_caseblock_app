import React from "react";
import ReactDOM from "react-dom";
import 'whatwg-fetch';

import DefaultLayout from "./layouts/DefaultLayout";

const api_url = "https://test3.caseblocks.com/case_blocks/search?query=customer_reference:2&auth_token=xFMvzLxiMsy8XdgDqT7r"

class Page extends React.Component {

    constructor(){
        super();
        this.state = {contents: ""}
    }

    makeRequest(){
        fetch(api_url).then((response) => {
            const responseText = JSON.stringify(response)
            this.setState({response: responseText});
        });
    }


    render() {
        return(
            <div>
                <h1>Simple CaseBlocks App</h1>
                <button onClick={this.makeRequest.bind(this)}>Make request</button>
                <p>
                    GET request result:
                </p>
                <pre>{this.state.response}</pre>
            </div>
        );
    }
}

const app = document.getElementById('app');
ReactDOM.render(<DefaultLayout/>, app);
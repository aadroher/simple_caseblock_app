import React from "react";
import ReactDOM from "react-dom";

import DefaultLayout from "./layouts/DefaultLayout";

const api_url = "https://test3.caseblocks.com/case_blocks/search?query=customer_reference:2&auth_token=xFMvzLxiMsy8XdgDqT7r"


class Application extends React.Component {

    render() {
        return (
            <DefaultLayout/>
        );
    }
}

const app = document.getElementById('app');
ReactDOM.render(<Application/>, app);
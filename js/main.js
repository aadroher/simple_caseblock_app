import React from "react";
import ReactDOM from "react-dom";

class Layout extends React.Component {
    render() {
        return(
            <div>
                <h1>It works!</h1>
                <p>Olerei!</p>
            </div>
        );
    }
}

const app = document.getElementById('app');
ReactDOM.render(<Layout/>, app);
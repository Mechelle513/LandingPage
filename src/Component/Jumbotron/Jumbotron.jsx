import React from "react";
import Button from "react-bootstrap/Button"


function Jumbotron() {
    return (
        <div className="container jumbotron jumbotron-fluid p-5 border bg-light">
            <h1>A Warm Welcomee!</h1>
            <p>
                This is a simple hero unit, a simple jumbotron-style component for calling
                extra attention to featured content or information.
            </p>
            <p>
                <Button bsStyle="primary">Call to action!</Button>
            </p>
        </div>
    );

}

export default Jumbotron;



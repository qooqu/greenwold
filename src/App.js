import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import data from "./data";
import Card from "./Card";

const App = () => {
    const [projects, setProjects] = useState(data);

    return (
        <div className="container">
            <div className="header card-panel">
                <h1 className="center hide-on-small-only">
                    green<b>www</b>old
                </h1>
                <h2 className="center hide-on-med-and-up">
                    green
                    <br />
                    <b>www</b>
                    <br />
                    old
                </h2>
            </div>
            <div id="cards">
                {projects.map((project) => (
                    <Card project={project} />
                ))}
            </div>
        </div>
    );
};

export default App;

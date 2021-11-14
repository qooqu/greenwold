import React from "react";
import ReactHtmlParser from "react-html-parser";

const Card = (props) => {
    let project = props.project;

    return (
        <>
            <div className="card-panel">
                <div className="project row">
                    <div className="project-text col s12 m6">
                        <div className="project-title card-panel">
                            <a href={project.linkLive}>
                                <h4>{project.title}</h4>
                            </a>
                            <p>{project.description}</p>
                            {project.linkCode ? (
                                <a href={project.linkCode}>code</a>
                            ) : null}
                        </div>
                        <div className="divider"></div>
                        <ul>
                            {project.bullets.map((bullet) => (
                                <li>{ReactHtmlParser(bullet)}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="project-img col s12 m6">
                        <a href={project.linkLive}>
                            <img
                                className="responsive-img z-depth-2 z-depth-2"
                                src={project.image}
                                alt={`screenshot of ${project.title}`}
                            ></img>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;

import React from "react";
import { Link } from "react-router-dom";
export default function AllProject(props) {
    return (
        <div className="col-lg-12 designer profession-item">
            <div className="profession-effect">
                <a href="#"><img src={props.image} width="100%" alt="app-design" /></a>
                <div className="profession-page">
                    <h2 className="profession-title">{props.title}</h2>
                    <a href='' className="profession-text" >{props.text} <i class="fas fa-angle-right"></i></a>
                </div>
            </div>
        </div>
    )
}
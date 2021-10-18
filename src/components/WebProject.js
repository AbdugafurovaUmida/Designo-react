import React from "react";
import { Link } from "react-router-dom";
export default function WebProject(props){
    return(
        <div className="col-lg-6 col-md-12 col-sm-12 profession-item">
        <div className="profession-effect">
            <a href="#"><img src={props.image} width="100%" alt="web-design" /></a>
            <div className="profession-page">
                <h2 className="profession-title">{props.title}</h2>
                <Link to="/webdesign" className='profession-text' >{props.text} <i className="fas fa-angle-right"></i></Link>
            </div>
        </div>
    </div>
    )
}
export default function SmallIntro(props){
    return(
        <div className="page-title page-title_web" style={{backgroundImage:"url(img/web-bg.svg)"}}>
        <h1 className="page-title__heading">{props.heading}</h1>
        <p className="page-title__text">{props.text}</p>
    </div>
    )
}
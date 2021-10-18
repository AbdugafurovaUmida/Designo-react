export default function WebCards(props) {
    return (
        <div className="cards">
            <img src={props.img} alt="shipping" class="cards__image" />
            <div className="cards__content">
                <h3 className="cards__title">{props.title}</h3>
                <p className="cards__text">{props.text}</p>
            </div>
        </div>
    )
}
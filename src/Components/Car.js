import "./styles/car-styles.css"
const Car = (props) => {
    return (
    <div className="body">
        <div className="left-info">
            <h3>{props.color}</h3>
        </div>
        <div className="middle-info">
            <div className="make-model">
                <h2>{props.make}</h2>
                <h4>{props.model}</h4>
            </div>
        </div>
        <div className="right-info">
            <div className="price">
                ${props.price}
            </div>
        </div>
    </div>)
}

export default Car
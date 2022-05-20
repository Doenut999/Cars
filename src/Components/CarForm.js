import "./styles/car-form-style.css"
import {useState} from "react";
const CarForm = (props) => {

    const nameChangeHandler = (event) => {
        setMake(event.target.value)
    }

    const modelChangeHandler = (event) => {
        setModel(event.target.value)
    }

    const colorChangeHandler = (event) => {
        setColor(event.target.value)

    }

    const priceChangeHandler = (event) => {
        setPrice(event.target.value)
    }

    const [makeInput, setMake] = useState("")
    const [modelInput, setModel] = useState("")
    const [colorInput, setColor] = useState("")
    const [priceInput, setPrice] = useState(3000)
    const [mode, setMode] = useState(false)

    const submitHandler = (event) => {
        event.preventDefault()
        const carData = {
            color: colorInput,
            make: makeInput,
            model: modelInput,
            price: priceInput
        }
        props.onAddCar(carData)
        setMake("")
        setPrice(3000)
        setColor("")
        setModel("")

    }
    const toggle = ()=> {
        setMode(true)
    }

    const toggle2 = () => {
        setMode(false)
    }

    const realForm = <div className="home">
        <form onSubmit={submitHandler}>
            <label htmlFor="name">Make</label>
            <input type="text" name="car-name" id="name" className="make-box text-box" value={makeInput} onChange={nameChangeHandler}/>

            <label htmlFor="type">Model</label>
            <input type="text" name="make" id="type" className="model-box text-box" value={modelInput} onChange={modelChangeHandler}/>

            <label htmlFor="hue">Color</label>
            <select name="" id="" value={colorInput} onChange={colorChangeHandler}>
                <option value="">None</option>
                <option value="red">Red</option>
                <option value="yellow">Yellow</option>
                <option value="white">White</option>
                <option value="black">Black</option>
                <option value="blue">Blue</option>
            </select>
            <label htmlFor="cost">Price</label>
            <input type="number" name="price" id="cost" min={3000} step={100} value={priceInput} onChange={priceChangeHandler}/>
            <button id="left" type="submit">Submit New Car</button>

        </form>
        <button className="right" onClick={toggle2}>Hide</button>
    </div>


    const cancelButton = <div className="begin">
        <button className="right" onClick={toggle}>Add New Car</button>
    </div>


    const active = mode === true ? realForm : cancelButton

    return (
       <div>
           {active}
       </div>
    )
}

export default CarForm



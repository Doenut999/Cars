import CarForm from "./Components/CarForm";
import CarList from "./Components/CarList";
import {useState} from "react";

const App = () => {
    const inventory = [
        {
            color: "red",
            make: "TATA",
            model: "Jaguar",
            price: 90_000
        },
        {
            color: "blue",
            make: "Mitsubishi",
            model: "Lancer",
            price: 77_000
        },        {
            color: "yellow",
            make: "FORD",
            model: "Explorer",
            price: 89_000
        },        {
            color: "green",
            make: "TOYOTA",
            model: "Camry",
            price: 69_000
        },        {
            color: "red",
            make: "Nissan",
            model: "Navara",
            price: 110_000
        },        {
            color: "white",
            make: "Tesla",
            model: "Model X",
            price: 190_000
        },        {
            color: "black",
            make: "Land Rover",
            model: "Range Rover",
            price: 130_000
        },        {
            color: "gold",
            make: "BMW",
            model: "X&6",
            price: 160_000
        }
    ]

    const [cars, setCars] = useState(inventory)

    const addCarHandler = (car) => {
        setCars(prevState =>  [car, ...prevState])
    }


  return (
    <div className="App">
        <CarForm onAddCar={addCarHandler}/>
        <CarList cars={cars} />
    </div>
  );
}

export default App;

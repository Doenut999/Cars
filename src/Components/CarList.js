import Car from "./Car";

const CarList = (props) => {

    return (
    <div>
        {props.cars.map ( (car) => <Car color={car.color} make={car.make} model={car.model} price={car.price} />)}
    </div>)
}

export default CarList
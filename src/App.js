import Car from "./Components/Car";

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


  return (
    <div className="App">
        <Car color={inventory[0].color} make={inventory[0].make} model={inventory[0].model} price={inventory[0].price} />
        <Car color={inventory[1].color} make={inventory[1].make} model={inventory[1].model} price={inventory[1].price} />
        <Car color={inventory[2].color} make={inventory[2].make} model={inventory[2].model} price={inventory[2].price} />
        <Car color={inventory[3].color} make={inventory[3].make} model={inventory[3].model} price={inventory[3].price} />
        <Car color={inventory[4].color} make={inventory[0].make} model={inventory[0].model} price={inventory[0].price} />
        <Car color={inventory[5].color} make={inventory[5].make} model={inventory[5].model} price={inventory[5].price} />
        <Car color={inventory[6].color} make={inventory[6].make} model={inventory[6].model} price={inventory[6].price} />
        <Car color={inventory[7].color} make={inventory[7].make} model={inventory[7].model} price={inventory[7].price} />
    </div>
  );
}

export default App;

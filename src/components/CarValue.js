import { useSelector } from "react-redux";

function CarValue() {
    const totalCost = useSelector(({car: {data, searchTerm}}) => 
        data.filter((car) =>car.name.toLowerCase().includes(searchTerm.toLowerCase())
        ).reduce((acc, car) => acc + car.cost, 0));
    return <div className="car-value">total cost: ${totalCost}</div>;
}

export default CarValue;
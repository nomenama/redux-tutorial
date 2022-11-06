import {useState} from "react";

export const Counter = () => {
    const [count, setCount] = useState<number>(0);

    const handleAddition = () => setCount((prevState) => prevState + 1);
    const handleMinus = () => setCount((prevState) => Math.max(prevState - 1, 0));

    return (
        <div>
            <h3>Count: {count}</h3>
            <div className="buttonGroup">
                <button className="button" onClick={handleMinus}>-</button>
                <button className="button" onClick={handleAddition}>+</button>
            </div>
        </div>
    );
};

export default Counter;
import {useDispatch, useSelector} from "react-redux";
import {increment, decrement} from "../redux/ducks/counter";

export const Counter = () => {
    const dispatch = useDispatch();
    // @ts-ignore
    const count = useSelector((state) => state.counter.count);

    const handleIncrement = () => {
        dispatch(increment());
    };
    const handleDecrement = () => {
        dispatch(decrement());
    };

    return (
        <div>
            <h3>Count: {count}</h3>
            <div className="buttonGroup">
                <button className="button" onClick={handleDecrement}>-
                </button>
                <button className="button" onClick={handleIncrement}>+
                </button>
            </div>
        </div>
    );
};

export default Counter;
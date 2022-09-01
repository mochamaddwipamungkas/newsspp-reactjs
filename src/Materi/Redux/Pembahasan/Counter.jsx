import { useSelector, useDispatch } from "react-redux";
import { decrementWithCheckingAction, increment } from "../../../app/features/Counter/actions";

const Counter = () => {
    let count = useSelector(state => state.counter)
    const dispatch = useDispatch();
    return (
        <div>
            {/* <button onClick={() => dispatch({ type: 'DEC', value: 1 })}>-</button>
            {' '} <span>{count.count}</span> {' '}
            <button>+</button> */}
            {/* <button onClick={() => dispatch(decrement(1))}>-</button>
            {' '} <span>{count.count}</span> {' '}
            <button onClick={() => dispatch(increment(1))}>+</button> */}
            <button onClick={() => dispatch(decrementWithCheckingAction(1))}>-</button>
            {' '} <span>{count.count}</span> {' '}
            <button onClick={() => dispatch(increment(1))}>+</button>
        </div >
    )
}

export default Counter;
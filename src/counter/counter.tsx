import counterStore from "../store/counter-store";
import {observer} from "mobx-react";

interface CounterProps {
    increment: (value: number) => void;
    decrement: (value: number) => void;
    count: number;
    total: number;
}

export const Counter = ({count, total, increment, decrement} : CounterProps) => {
    return (
        <>
            <button onClick={() => increment(1)}>+</button>
            <span>{count}</span>
            <button onClick={() => decrement(1)}>-</button>
            <span>{total}</span>
        </>
    )
}
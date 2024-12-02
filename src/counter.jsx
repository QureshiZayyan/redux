import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './slices/counterSlice'
import { convert } from './slices/counterSlice'

export function Counter() {
    const count = useSelector((state) => state.counter.value);
    const name = useSelector((state) => state.changename.tname);
    const dispatch = useDispatch()

    return (
        <div>
            <div>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>
                <span>{count}</span>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>
            </div>
            <button onClick={() => dispatch(convert())}>click for reveal name</button>
            <p>{name}</p>
        </div>
    )
}
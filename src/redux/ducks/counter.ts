export interface CounterState {
    count: number,
}

const INCREMENT = "increment";
const DECREMENT = "decrement";

export const increment = () => ({
    type: INCREMENT
});

export const decrement = () => ({
    type: DECREMENT
});

const initialState: CounterState = {
    count: 0,
};

const InitialCounterState = (state = initialState, action: any) => {
    switch (action.type) {
        case INCREMENT:
            return {...state, count: state.count + 1};
        case DECREMENT:
            return {...state, count: Math.max(state.count - 1, 0)};
        default:
            return state;
    }
};

export default InitialCounterState;
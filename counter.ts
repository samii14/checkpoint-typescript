import React, { Component } from 'react';

// Defining the type for the component state
interface CounterState {
    count: number; // type of count is number
}

// Converting the class component to TypeScript
class Counter extends Component<{}, CounterState> {
    state: CounterState = {
        count: 0
    };

    increment = () => {
        this.setState({ count: this.state.count + 1 });
    };

    render() {
        return (
            <div>
                <p>Count: {this.state.count}</p>
                <button onClick={this.increment}>Increment</button>
            </div>
        );
    }
}

export default Counter;
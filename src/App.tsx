import React from 'react'
import './App.css'

interface SpinnerState {
    pointerIndex: number
}

const choices = [
    "send someone back one!",
    "forward one or move wooden plank",
    "forward one or move rope bridge",
    "forward two",
    "forward three!"
]

class App extends React.Component<{}, SpinnerState> {
    readonly state = {pointerIndex: -1}

    spinSpinner(event: React.MouseEvent) {
        event.preventDefault();
        const newPointerIndex = Math.trunc(Math.random() * choices.length);

        this.setState(() => {
            return {pointerIndex: newPointerIndex}
        });
    }

    pointerString() {
        if (this.state.pointerIndex < 0) {
            return "press spin to start"
        } else {
            return choices[this.state.pointerIndex]
        }
    }

    render() {
        return <div className="App">
            <header className="App-header">
                <p>{this.pointerString()}</p>
                <button onClick={e => this.spinSpinner(e)}>Spin</button>
            </header>
        </div>;
    }
}

export default App;
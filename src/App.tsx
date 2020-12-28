import React from 'react'
import './App.css'

interface SpinnerState {
    pointerIndex: number
}

interface SpinnerResult {
    description: string
    imageUrl: string
}

const results: Array<SpinnerResult> = [
    {
        description: "send someone back one!",
        imageUrl: "results/move-back.svg"
    },
    {
        description: "forward one or move wooden plank",
        imageUrl: "results/move-one-or-plank-bridge.svg"
    },
    {
        description: "forward one or move rope bridge",
        imageUrl: "results/move-one-or-rope-bridge.svg"
    },
    {
        description: "forward two",
        imageUrl: "results/move-two.svg"
    },
    {
        description: "forward three!",
        imageUrl: "results/move-three.svg"
    }
]

class App extends React.Component<{}, SpinnerState> {
    readonly state = {pointerIndex: -1}

    spinSpinner(event: React.MouseEvent) {
        event.preventDefault();
        const newPointerIndex = Math.trunc(Math.random() * results.length);

        this.setState(() => {
            return {pointerIndex: newPointerIndex}
        });
    }

    pointerString() {
        if (this.state.pointerIndex < 0) {
            return <p>click to spin</p>
        } else {
            const result = results[this.state.pointerIndex]

            return <div><img src={result.imageUrl} alt={result.description}/>
                <p>{result.description}</p></div>
        }
    }

    render() {
        return <div className="App" onClick={e => this.spinSpinner(e)}>
            <header className="App-header">
                {this.pointerString()}
            </header>
        </div>;
    }
}

export default App;
import React from 'react'
import './App.css'

interface SpinnerState {
    imageUrl: string
    message: string
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
    readonly state = {
        imageUrl: "",
        message: "click to spin"
    }

    spinSpinner(event: React.MouseEvent) {
        event.preventDefault();
        const newResultIndex = Math.trunc(Math.random() * results.length);
        const result = results[newResultIndex]

        this.setState(() => {
            return {
                imageUrl: result.imageUrl,
                message: result.description
            }
        });
    }

    resultImage() {
        if (this.state.imageUrl.length > 0) {
            return <img src={this.state.imageUrl} alt={this.state.message}/>
        }
    }

    render() {
        return <div className="App" onClick={e => this.spinSpinner(e)}>
            <header className="App-header">
                {this.resultImage()}
                <p>{this.state.message}</p>
            </header>
        </div>;
    }
}

export default App;
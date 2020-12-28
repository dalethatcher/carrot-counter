import React from 'react'
import './App.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import Loader from 'react-loader-spinner'

interface SpinnerState {
    imageUrl: string
    message: string
    spinning: boolean
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
        message: "click to spin",
        spinning: false
    }

    startSpinner(event: React.MouseEvent) {
        event.preventDefault()

        if (!this.state.spinning) {
            this.setState(() => {
                return {
                    imageUrl: "",
                    message: "spinning...",
                    spinning: true
                }
            })
            setTimeout(() => {
                const newResultIndex = Math.trunc(Math.random() * results.length);
                const result = results[newResultIndex]

                this.setState(() => {
                    return {
                        imageUrl: result.imageUrl,
                        message: result.description,
                        spinning: false
                    }
                });
            }, 1000)
        }
    }

    spinSpinner(event: React.MouseEvent) {
        event.preventDefault();

        if (!this.state.spinning) {
            const newResultIndex = Math.trunc(Math.random() * results.length);
            const result = results[newResultIndex]

            this.setState(() => {
                return {
                    imageUrl: result.imageUrl,
                    message: result.description
                }
            });
        }
    }

    resultImage() {
        if (this.state.spinning) {
            return <Loader
                type="TailSpin"
                color="#d93084"
                height={100}
                width={100}
            />
        }
        if (this.state.imageUrl.length > 0) {
            return <img src={this.state.imageUrl} alt={this.state.message}/>
        }
    }

    render() {
        return <div className="App" onClick={e => this.startSpinner(e)}>
            <header className="App-header">
                {this.resultImage()}
                <p>{this.state.message}</p>
            </header>
        </div>;
    }
}

export default App;
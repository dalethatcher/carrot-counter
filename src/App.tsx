import React from 'react'
import './App.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import Loader from 'react-loader-spinner'

interface SpinnerState {
    imageUrl: string
    description: string
    spinning: boolean
    audioRef: React.Ref<HTMLAudioElement>
}

interface SpinnerResult {
    description: string
    imageUrl: string
}

const results: Array<SpinnerResult> = [
    {
        description: "send someone back one!",
        imageUrl: "move-back.svg"
    },
    {
        description: "forward one or move wooden plank",
        imageUrl: "move-one-or-plank-bridge.svg"
    },
    {
        description: "forward one or move rope bridge",
        imageUrl: "move-one-or-rope-bridge.svg"
    },
    {
        description: "forward two",
        imageUrl: "move-two.svg"
    },
    {
        description: "forward three!",
        imageUrl: "move-three.svg"
    }
]

const hiddenStyle = {display: "none"}

class App extends React.Component<{}, SpinnerState> {
    readonly state = {
        imageUrl: "",
        description: "click to spin",
        spinning: false,
        audioRef: React.createRef<HTMLAudioElement>()
    }

    spinSpinner(event: React.MouseEvent) {
        event.preventDefault()

        if (!this.state.spinning) {
            const newResultIndex = Math.trunc(Math.random() * results.length);
            const result = results[newResultIndex]

            this.state.audioRef.current?.play()
            this.setState(() => {
                return {
                    imageUrl: process.env.PUBLIC_URL + "/results/" + result.imageUrl,
                    description: result.description,
                    spinning: true
                }
            })
            setTimeout(() => {
                this.setState(() => {
                    return {
                        spinning: false
                    }
                });
            }, 1000)
        }
    }

    resultImage() {
        if (this.state.spinning) {
            return <div>
                <Loader
                    type="TailSpin"
                    color="#d93084"
                    height={100}
                    width={100}
                />
                <img src={this.state.imageUrl} alt={this.state.description} style={hiddenStyle}/>
                <p>spinning...</p>
            </div>
        }
        if (this.state.imageUrl.length > 0) {
            return <div>
                <img src={this.state.imageUrl} alt={this.state.description}/>
                <p>{this.state.description}</p>
            </div>
        }

        return <p>{this.state.description}</p>
    }

    render() {
        return <div className="App" onClick={e => this.spinSpinner(e)}>
            <header className="App-header">
                <audio ref={this.state.audioRef} src={process.env.PUBLIC_URL + "/sounds/spin.mp3"}/>
                {this.resultImage()}
            </header>
        </div>;
    }
}

export default App;
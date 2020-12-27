import React from 'react';
import './App.css';

class App extends React.Component<{}, { coin: String }> {
    readonly state = {coin: "Press flip to start"};

    flipCoin(event: React.MouseEvent) {
        event.preventDefault();
        const heads = Math.trunc(Math.random() * 2.0) < 1;

        this.setState((state, props) => {
            return {coin: heads ? "heads" : "tails"}
        }, () => {

        });
    }

    render() {
        return <div className="App">
            <header className="App-header">
                <p>{this.state.coin}</p>
                <button onClick={e => this.flipCoin(e)}>Flip</button>
            </header>
        </div>;
    }
}

export default App;
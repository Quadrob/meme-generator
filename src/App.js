import React from 'react'
import './App.css';
import MemeGenerator from './MemeGenerator'


class App extends React.Component {

    constructor() {
        super()
        this.state={}
    }

    render() {
        return (
            <div className="App">

                <header className="App-header">
                    <img className="logo1" src="./fav.jpg" alt="Meme Generator Logo"></img>
                    <h1>Meme Generator</h1>
                    <img className="logo2" src="./fav.jpg" alt="Meme Generator Logo"></img>
                </header>
                <body className="App-body">
                    <MemeGenerator />
                </body>
                <footer className="App-footer">
                    <h5>Created by Robert Zeelie</h5>
                </footer>

            </div>
        );
    }
}

export default App;

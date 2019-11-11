import React from 'react'

class MemeGenerator extends React.Component {//create a class to perform everything
    
    constructor() {//constructor to init state and bind methods
        super()
        this.state={
            topText:"",
            bottomText:"",
            randomImg:"http://i.imgflip.com/1bij.jpg",
            allMemes:[]
        }
        this.handleChange=this.handleChange.bind(this)//old way of using methods
    }

    componentDidMount() {//method to recive and save all the meme images
        fetch("https://api.imgflip.com/get_memes")
        .then((response) => response.json())
        .then((response) => {
            const {memes} = response.data
            this.setState({allMemes:memes})
        })
    }

    handleChange(event) {//method to receive text input and update state each keystroke
        const {className, value}= event.target
        this.setState({[className] : value})
    }

    //new way of creating methods without having to use a .bind(this)
    handleSubmit = (event) => {//methond used to change meme img when generate button is clicked
        event.preventDefault()//stops the whole page from rerendering but just the image rerenders
        const randomNum = Math.floor(Math.random() * this.state.allMemes.length)//get random num
        const randomMeme = this.state.allMemes[randomNum].url//use random num as index to get new img
        this.setState({randomImg: randomMeme});//update state
    }

    render() {//creat a for to get input and the inner div to displat meme with input text
        return(
            <div>
                <form className="form" onSubmit={this.handleSubmit}>
                    <input className="topText" type="text" placeholder="Text above the meme" value={this.state.topText} onChange={this.handleChange}></input>
                    <input className="bottomText" type="text" placeholder="Text below the meme" value={this.state.bottomText} onChange={this.handleChange}></input>
                    <button className="submit">Generate</button>
                </form>

                <div className="displayMeme">
                    <p className="top">{this.state.topText}</p>
                    <img className="meme" src={this.state.randomImg} alt="The Meme is displayed here"></img>
                    <p className="bottom">{this.state.bottomText}</p>
                </div>
            </div>
        )
    }
}

export default MemeGenerator;

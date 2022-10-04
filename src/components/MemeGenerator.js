import React, {Component} from 'react'

class MemeGenerator extends Component{
    constructor(){
        super();
        this.state = {
            topText: '',
            bottomText: '',
            randomImg: 'http://i.imgflip.com/1bij.jpg',
            allMemeImgs: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount(){
        fetch('https://api.imgflip.com/get_memes')
        .then(res => res.json())
        .then(res => {

            const {memes} = res.data
            // console.log(memes[0])

            this.setState({allMemeImgs: memes})
        })        
    }
    handleChange(e){
        const {name, value} = e.target

        this.setState({[name]: value})
    }

    handleSubmit(e){
        e.preventDefault()

        const randomNumber = Math.floor(Math.random() * this.state.allMemeImgs.length)
        const randomMemeImg = this.state.allMemeImgs[randomNumber].url

        this.setState({randomImg: randomMemeImg})
    }
    
    render(){
        return (
            <div>
                <form className='meme-form' onSubmit={this.handleSubmit}>
                    <label>Top Text: </label>
                    <input
                        type='text'
                        name='topText'
                        value={this.state.topText}
                        onChange={this.handleChange}
                    />
                    <label>Bottom Text: </label>
                    <input
                        type='text'
                        name='bottomText'
                        value={this.state.bottomText}
                        onChange={this.handleChange}
                    />
                    <button>select</button>
                </form>
                <div className='meme'>
                    <img src={this.state.randomImg} alt='' />
                    <h2 className='top'>{this.state.topText}</h2>
                    <h2 className='bottom'>{this.state.bottomText}</h2>
                </div>
            </div>            
        )
    }
}
export default MemeGenerator
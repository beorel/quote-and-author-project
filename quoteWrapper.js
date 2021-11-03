import React from 'react';
import Quotes from './quote';
//import Button from '@mui/material/Button';

class QuoteWrapper extends React.Component {
    constructor(props) {
        super(props);
        let quote1 = "It is better to remain silent at the risk of being thought a fool, than to talk and remove all doubt of it. - By: Maurice Switzer, Mrs. Goose, Her Book";
        let quote2 = "The fool doth think he is wise, but the wise man knows himself to be a fool. - By: William Shakespeare, As You Like It";
        let quote3 = "Whenever you find yourself on the side of the majority, it is time to reform (or pause and reflect). - By: Mark Twain";
        let quote4 = "When someone loves you, the way they talk about you is different. You feel safe and comfortable.- By: Jess C. Scott, The Intern";
        let quote5 = "Knowing yourself is the beginning of all wisdom. - By: Aristotle";
        this.quoteArray = [];
        this.quoteArray.push(quote1, quote2, quote3, quote4, quote5)

        this.state = {
            quote: "",
            author: ""
        }
    }

    randomIndex = () => {
        let randomDec1 = Math.random() * this.quoteArray.length;
        let randomInt1 = Math.floor(randomDec1);
        console.log(randomInt1)
        return (randomInt1)
    }
    
    updateQuotes = () => {
        const quoteWithAuthor = this.quoteArray[this.randomIndex()]
        const splitedRandomQuotes = quoteWithAuthor.split("-")
        const splitedQuote = splitedRandomQuotes[0];
        const splitedAuthor = splitedRandomQuotes[1]
        this.setState({
            quote: splitedQuote,
            author: splitedAuthor
        })
        console.log("quote ="+ splitedQuote)
        console.log("author="+ splitedAuthor)
    }

    componentDidMount = () => {
        this.updateQuotes();
    }

    render() {
        return (
            <div>
                <Quotes author={this.state.author}
                    quote={this.state.quote} />
                <button variant="contained" id="new-quote" onClick={this.updateQuotes}>New Quote</button>
                </div>
        )
    }
}

export default QuoteWrapper
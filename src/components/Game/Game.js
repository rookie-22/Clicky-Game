import React, { Component } from "react";
import Container from "../Container";
import GameCard from "../GameCard";
import Instructions from "../Instructions";
import Header from "../Header";
import Footer from "../Footer";
import data from "../../data";


class Game extends Component {

    state = {
        data,
        score: 0,
        topScore: 0,   
        message: "Ok Foo Fighters fans... concentrate and click an image without repeating!"
    };

    
    componentDidMount() {
       
        this.setState({ data: this.shuffleDeck(this.state.data) });
    }

    
    shuffleDeck = data => {
        let newData = data.sort(function(a, b){return 0.5 - Math.random()});
        return newData;
    };

    
    resetDeck = data => {
        const resetData = data.map(item => ({ ...item, clicked: false }));
        
        return this.shuffleDeck(resetData);
      };

   
    correctGuess = newData => {
        let newScore = this.state.score;
        newScore++
        let newTopScore = Math.max(newScore, this.state.topScore);

        this.setState({
            data: this.shuffleDeck(newData),
            score: newScore,
            topScore: newTopScore,
            animation: "animated swing"
        })
    }

   
    wrongGuess = newData => {
        this.setState({
            data: this.resetDeck(newData),
            score: 0
        })
    }

   
    gameCardClick = id => {
        let guessedCorrectly = false;
       
        const newData = this.state.data.map(item => {
          if (item.id === id) {
            if (!item.clicked) {
              item.clicked = true;
              guessedCorrectly = true;
            }
          }
          return item;     
        });
       
        guessedCorrectly ? this.correctGuess(newData) : this.wrongGuess(newData);
      };

    render() {
        return (
            <div className="animated fadeIn">
                <Header score={this.state.score} topScore = {this.state.topScore} />
                <Instructions message={this.state.message} />
                <Container>
                    {
                        this.state.data.map(item => (
                            <div className="animated rollIn">
                                <GameCard
                                    key={item.id}
                                    id={item.id} 
                                    image={item.image}
                                    animate={!this.state.score && this.state.topScore}
                                    clicked={item.clicked}
                                    handleClick={this.gameCardClick}
                                />      
                            </div>  
                        ))
                    }
                </Container>
                <Footer />
            </div>
        );
    }
}

export default Game;

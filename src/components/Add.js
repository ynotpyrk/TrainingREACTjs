import React from 'react';

class Add extends React.Component {
    state = {
        score: 1
    }
    addScore = () =>{
        this.setScore({
            score: this.state.score + 1
        });
    }
    minusScore = () =>{
        this.setScore({
            score: this.state.score - 1
        });
    }
    render() {
        
        return(
        <div>
            {this.state.score}
            <button onClick={this.addScore}>Add</button>
            <button onClick={this.minusScore}>Minus</button>
        </div>
            
        );
    }
}

export default Add;
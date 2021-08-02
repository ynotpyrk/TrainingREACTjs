import React from 'react';

class Player extends React.Component {
    render() {
        return(
            <div>
            <h1>{this.props.playername}</h1>
            <h2>{this.props.jersey}</h2>
            </div>
        );
    }
}

export default Player;
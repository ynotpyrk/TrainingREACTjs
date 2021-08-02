import React from 'react';

class Pokemon extends React.Component {
    render() {
        return(
            
                <tr>
                {/* <td>{this.props.id}</td> */}
                <td>{this.props.name}</td>
                <td><a href={this.props.image}><img src={this.props.image}></img></a></td>
                <td>{this.props.type}</td>
                </tr>
            
        );
    }
}

export default Pokemon;
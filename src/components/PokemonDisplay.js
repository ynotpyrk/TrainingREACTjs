import React from 'react';
import Pokemon from './components/Pokemon';

class PokemonDisplay extends React.Component {
    render() {
        let pokemonsDisplay = this.props.pokemons.map(pokemons =>
            <Pokemon 
            id = {pokemons.id} 
            name= {pokemons.name} 
            type = {pokemons.type} 
            image = {pokemons.image}
            />
        )
            
        return(
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Type</th>
                        
                    </tr>
                </thead>
            </table>
                // <tr>
                // {/* <td>{this.props.id}</td> */}
                // <td>{this.props.name}</td>
                // <td><a href={this.props.image}><img src={this.props.image}></img></a></td>
                // <td>{this.props.type}</td>
                // </tr>
            
        );
    }
}

export default PokemonDisplay;
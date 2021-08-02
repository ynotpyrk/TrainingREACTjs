import React from 'react';
import './ItemBox.css'

class ItemBox extends React.Component{
    orderClickHandler = () =>{
        // alert(this.props.item.name);
        let newCart = {
            name: this.state.name,
            price: this.state.price,
            category: this.state.category,
            image: this.state.image
        }
        this.props.addItem(newCart);

    }

    render(){
        
        let {name, category, price, image} = this.props.item;
        return(
            <div className="ItemBox">
                <img src={image} alt={this.props.item.image} />
                <div>
                    <strong>{name}</strong><br />
                    <small>{category}</small><br />
                    <p>Php {price}</p>
                    <button onClick={this.orderClickHandler}>Order</button>
                </div>
            </div>
        )
    }
}

export default ItemBox;
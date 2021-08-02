import React from 'react';

class AddtoCart extends React.Component{
    state = {
        name: 'burger',
        price: '',
        category: '',
        image: ''
    }

    nameChangeHandler = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    addtocart = () =>{
        let newCart = {
            name: this.state.name,
            price: this.state.price,
            category: this.state.category,
            image: this.state.image
        }
        this.props.addtocart(newCart);
    }

    render(){
        return(
            <div>
                Item Name: <input
                    type="text"
                    name = "name"
                    value={this.state.name}
                    onChange={this.nameChangeHandler}
                /> <br />
                Item Category: <input
                    type="text"
                    name="category"
                    value={this.state.category}
                    onChange={this.nameChangeHandler}
                /> <br />
                Item Price: <input
                    type="number"
                    name="price"
                    value={this.state.price}
                    onChange={this.nameChangeHandler}
                /> <br />
                Item Image: <input
                    type="text"
                    name="image"
                    value={this.state.image}
                    onChange={this.nameChangeHandler}
                /> <br />
                <button onClick={this.addNewItem}>Add Item</button>
                <div><small>
                    {this.state.name}<br />
                    {this.state.category}<br />
                    {this.state.price}<br />
                    {this.state.image}<br /></small>
                </div>
            </div>
        )
    }
}

export default AddtoCart;
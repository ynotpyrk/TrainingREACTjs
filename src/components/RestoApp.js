import React from 'react';
import AddItemForm from './AddItemForm';
import ItemBox from './ItemBox';
import './RestoApp.css';
import AddtoCart from './AddtoCart';

class RestoApp extends React.Component {
    state = {
        items: [
            {
                id: 1,
                name: "Burger",
                price: 50,
                category: "Food",
                status: 'active',
                image: "https://image.flaticon.com/icons/svg/1046/1046784.svg"
            },
            {
                id: 2,
                name: "Pizza",
                price: 100,
                category: "Food",
                status: 'active',
                image: "https://image.flaticon.com/icons/svg/1046/1046771.svg"
            },
            {
                id: 3,
                name: "Fries",
                price: 25,
                category: "Food",
                status: 'active',
                image: "https://image.flaticon.com/icons/svg/1046/1046786.svg"
            },
            {
                id: 4,
                name: "Coffee",
                price: 35,
                category: "Drink",
                status: 'active',
                image: "https://image.flaticon.com/icons/svg/1046/1046785.svg"
            },
            {
                id: 5,
                name: "Iced Tea",
                price: 45,
                category: "Drink",
                status: 'active',
                image: "https://image.flaticon.com/icons/svg/1046/1046782.svg"
            },
            {
                id: 6,
                name: "Hot Tea",
                price: 45,
                category: "Drink",
                status: 'active',
                image: "https://image.flaticon.com/icons/svg/1046/1046792.svg"
            },
            // {
            //     name: "New Item",
            //     price: 23,
            //     category: "Dessert",
            //     image: "http://"
            // }
        ],
        filter: 'All'

    }

    changeDisplay = (category) => {
        this.setState({
            filter: category
        })
    }
    
    addItem = (newItem) =>{
        newItem.id = this.state.items.length + 1;
        console.log(newItem);
        let itemCopy = [...this.state.items];
        itemCopy.push(newItem);

        this.setState({
            items: itemCopy
        })
    }

    addCart = (newCart) =>{
        newCart.id = this.state.items.length + 1;
        console.log(newCart);
        let itemCart = [...this.state.items];
        itemCart.push(newCart);

        this.setState({
            items: itemCart
        })
    }

    render() {
        let items = this.state.filter === 'All'?
            this.state.items:
            this.state.items.filter(item => item.category == this.state.filter)

        let itemsDisplay = items
            .map(item =>
                <ItemBox key = {item.id} item = {item}/>
        )
        return(
        <div>
            <AddItemForm addItem={this.addItem} />
            <div><center>
                <button onClick={() => this.changeDisplay('All')}>All</button>
                <button onClick={() => this.changeDisplay('Food')}>Food</button>
                <button onClick={() => this.changeDisplay('Drink')}>Drink</button></center>
            </div>
            <div className="RestoApp">
                {itemsDisplay}
            </div>
            {/* <AddItemForm addCart={this.addCart} /> */}
        </div>
            
        );
    }
}

export default RestoApp;
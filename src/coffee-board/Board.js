import React from "react"
import Item from "./item/Item.js";
import AddItem from "./item/AddItem.js";
import coffeeData from "../data/CoffeeData.js";

class Board extends React.Component {
    constructor() {
        super();
        this.state = {
            items: JSON.parse(window.localStorage.getItem('board')) || coffeeData,
        }

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    addItem(item) {
        this.setState(prevState => {
            item.id = Math.max(...prevState.items.map(item => item.id)) + 1;
            let items = [...prevState.items, item];
            this.saveLocalStorage(items)
            return {
                items: items,
            }
        })
    }

    deleteItem(id) {
        this.setState(prevState => {
            let items = prevState.items.filter(item => item.id !== id)
            this.saveLocalStorage(items)
            return {
                items: items,
            }
        })
    }

    saveLocalStorage(items) {
        window.localStorage.setItem("board", JSON.stringify(items));
    }

    render() {
        const coffeeItems = this.state.items.map(coffee => <Item key = {coffee.id} props = {coffee} deleteItemClicked = {this.deleteItem}/>);
        coffeeItems.push(<AddItem key = {-1} addItemClicked = {this.addItem}/>);

        return (
            <div className="row container-fluid coffee">
                {coffeeItems}
            </div>
        )
    }
}

export default Board
import React from "react"
import Item from "./item/Item.js";
import AddItem from "./item/AddItem.js";
import coffeData from "./CoffeData.js";

class Board extends React.Component {
    constructor() {
        super();
        this.state = {
            items: JSON.parse(window.localStorage.getItem('board')) || coffeData,
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
        const coffeItems = this.state.items.map(coffe => <Item key = {coffe.id} props = {coffe} deleteItemClicked = {this.deleteItem}/>);
        coffeItems.push(<AddItem key = {-1} addItemClicked = {this.addItem}/>);

        return (
            <div className="row coffe">
                {coffeItems}
            </div>
        )
    }
}

export default Board
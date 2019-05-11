import React from "react"
import Item from "./item/Item";
import AddItem from "./item/AddItem";

function Board(props) {
    const addItem = (item) => {
        item.id = Math.max(...props.data.map(item => item.id)) + 1;
        props.storeData([...props.data, item]);
    }

    const deleteItem = (id) => {
        props.storeData(props.data.filter(item => item.id !== id));
    }

    const coffeeItems = props.data.map(coffee => <Item key = {coffee.id} data = {coffee} deleteItemClicked = {deleteItem}/>);
    coffeeItems.push(<AddItem key = {-1} addItemClicked = {addItem}/>);

    return (
        <div className="row container-fluid coffee">
            {coffeeItems}
        </div>
    )
}

// Class based implementation
// class Board extends React.Component {
//     constructor() {
//         super();
//         console.log(this)
//         this.state = {
//             // items: JSON.parse(window.localStorage.getItem('board')) || coffeeData,
//             items: this.props.data,
//         }

//         this.addItem = this.addItem.bind(this);
//         this.deleteItem = this.deleteItem.bind(this);
//     }

//     addItem(item) {
//         this.setState(prevState => {
//             item.id = Math.max(...prevState.items.map(item => item.id)) + 1;
//             let items = [...prevState.items, item];
//             this.saveLocalStorage(items)
//             return {
//                 items: items,
//             }
//         })
//     }

//     deleteItem(id) {
//         this.setState(prevState => {
//             let items = prevState.items.filter(item => item.id !== id)
//             this.saveLocalStorage(items)
//             return {
//                 items: items,
//             }
//         })
//     }

//     saveLocalStorage(items) {
//         window.localStorage.setItem("board", JSON.stringify(items));
//     }

//     render() {
//         const coffeeItems = this.state.items.map(coffee => <Item key = {coffee.id} data = {coffee} deleteItemClicked = {this.deleteItem}/>);
//         coffeeItems.push(<AddItem key = {-1} addItemClicked = {this.addItem}/>);

//         return (
//             <div className="row container-fluid coffee">
//                 {coffeeItems}
//             </div>
//         )
//     }
// }

export default Board
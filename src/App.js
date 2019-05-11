import React, {useState, useEffect} from 'react';
import './App.scss';
import Board from './components/coffee-board/Board';

function App() {
    const [coffe_board_data, setData] = useState(JSON.parse(window.localStorage.getItem('board')) || coffeeData)
    const storeData = (new_data) => setData(new_data)
    useEffect(() => {
        window.localStorage.setItem("board", JSON.stringify(coffe_board_data)), [storeData]
    })

    return (
        <div className="App">
            <Board data = {coffe_board_data} storeData = {storeData} />
        </div>
    );
}

export default App;

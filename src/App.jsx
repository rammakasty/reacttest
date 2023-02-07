import React, { useState } from 'reacttest';
import './App.css';
import TodoBoard from './components/todeBoard';

function App() {
    const [inputValue, setInputValue] = useState('');
    const [todoList, setTodoList] = useState([]);
    const addItem = () => {
        console.log('im hererere!', inputValue);
        setTodoList([...todoList, inputValue]);
    };
    return (
        <main>
            <input type="text" onChange={(e) => setInputText(e.target.value)} />
            <button onClick={addItem}>추가</button>

            <TodoBoard />
        </main>
    );
}

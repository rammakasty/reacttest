import React, { useState } from 'react';
import './App.css';

function App() {
    return (
        <main>
            <input type="text" onChange={(e) => setInputText(e.target.value)} />
            <button>추가</button>
        </main>
    );
}

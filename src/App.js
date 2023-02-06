import React from 'react';

const App = () => {
    const style = {
        padding: '100px',
        display: 'flex',
        gap: '12px',
    };

    const squareStyle = {
        width: '100px',
        height: '100px',
        border: '1px solid green',
        borderRadius: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };

    return (
        <div style={style}>
            <div style={squareStyle}>감자</div>
            <div style={squareStyle}>고구마</div>
            <div style={squareStyle}>오이</div>
            <div style={squareStyle}>가지</div>
            <div style={squareStyle}>옥수수</div>
        </div>
    );
};

export default App;

import React from 'react'
import ReactDOM from 'react-dom'
import  './index.css'

function App() {
    return (
        <div className="container">
            {Array(5).fill(0).map((_, idx) => {
                return (
                    <div>{idx}</div>
                )
            })}
        </div>
    )
}
ReactDOM.render(<App />, document.body);
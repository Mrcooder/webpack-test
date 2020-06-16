import React from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from "recoil";
import { TodoList } from './TodoList.jsx'

window.React2 = require('react');
function App() {
    return (
        <RecoilRoot>
            <TodoList />
        </RecoilRoot>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'));
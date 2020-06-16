import React, { Component } from 'react';
import ReactDOM from 'react-dom';

let count = 100;
setInterval(function() {
    ReactDOM.render(<div>{count++}</div>, document.body);
}, 1000);

if (module.hot) {
    module.hot.accept();
}
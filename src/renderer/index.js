import React from 'react';

//this is the most important thing to make React work with its full features
window.React = React;

import ReactDOM from 'react-dom';
// import entry component
import Entry from './entry';

// render `Entry` component
ReactDOM.render(
    <Entry name='React'/>,
    document.getElementById( 'app' ),
);
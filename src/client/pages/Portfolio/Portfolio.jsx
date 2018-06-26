import React from 'react';
import template      from './template.html.js';
import Header from './Header/Header.jsx';

class Portfolio extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return template.apply(this);
    }
}

export default Portfolio;
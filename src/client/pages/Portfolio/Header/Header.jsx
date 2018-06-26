import React from 'react';
import template      from './template.html.js';

class Header extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
        window.addEventListener('load', this.fadeText);
     }

    fadeText() {
        let title       = document.querySelector('#titleHeader');
        let subtitle    = document.querySelector('#subtitleHeader');
        setTimeout(()=>{
            title.className = "";
            subtitle.className = "";
        },1000)
    }

    render() {
        return template.apply(this);
    }
}

export default Header;
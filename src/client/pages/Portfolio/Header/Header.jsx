import React from 'react';
import template      from './template.html.js';

class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isLoad: false,
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({isLoad: true})
        }, 300);
     }

    render() {
        return template.apply(this);
    }
}

export default Header;
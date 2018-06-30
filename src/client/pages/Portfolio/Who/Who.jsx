import React from 'react';
import template      from './template.html.js';
import CardMe from '../../../components/CardMe/Card.jsx';
import ItemAbout from '../../../components/ItemAbout/ItemAbout.jsx';


class Who extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isLoad: false,
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({isLoad: true})
        }, 1000);
     }

    render() {
        return template.apply(this);
    }
}

export default Who;
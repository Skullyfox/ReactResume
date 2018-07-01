import React from 'react';
import template      from './template.html.js';
import Tinder      from '../../../components/svg/Tinder';
class Competences extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return template.apply(this);
    }
}

export default Competences;
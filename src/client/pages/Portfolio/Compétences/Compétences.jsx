import React from 'react';
import template      from './template.html.js';
import Icon from 'semantic-ui-react';


class Competences extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return template.apply(this);
    }
}

export default Competences;
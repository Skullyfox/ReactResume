import React from 'react';
import template      from './template.html.js';
import Articles from './Articles/Articles.jsx';

class ArticlesContainer extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return template.apply(this);
    }
}

export default ArticlesContainer;
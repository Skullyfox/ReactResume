import React from 'react';
import template      from './template.html.js';
import ArticlesItem from './ArticlesItem/ArticleItem';

class Articles extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            Articles: {
                "One":{
                    "title" : "one"
                },
                "Two":{
                    "title" : "one"
                },
                "Three":{
                    "title" : "one"
                },
                "Four":{
                    "title" : "one"
                },
                "Five":{
                    "title" : "one"
                },
                "six":{
                    "title" : "one"
                },
                "Seven":{
                    "title" : "one"
                }
            }
        }
    }

    render() {
        return template.apply(this);
    }
}

export default Articles;
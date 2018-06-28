import * as React from 'react';
import * as _ from 'lodash';
import ArticlesItems from './ArticlesItems/ArticleItems';
export default function () {
    function repeatArticle1(Article, ArticleIndex) {
        return [React.createElement(ArticlesItems, { 'key': '1171' })];
    }
    return React.createElement.apply(this, [
        'div',
        { 'className': 'Articles' },
        _.map(this.state.Articles, repeatArticle1.bind(this))
    ]);
}
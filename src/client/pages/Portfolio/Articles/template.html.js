import * as React from 'react';
import * as _ from 'lodash';
import Articles from './Articles/Articles.jsx';
export default function () {
    return React.createElement('div', { 'className': 'ArticlesContainer' }, React.createElement(Articles, {}));
}
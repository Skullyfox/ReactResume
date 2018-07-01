import * as React from 'react';
import * as _ from 'lodash';
import Header from './Header/Header.jsx';
import Who from './Who/Who.jsx';
import Competences from './Compétences/Compétences.jsx';
export default function () {
    return React.createElement('div', { 'className': 'Portfolio' }, React.createElement(Header, {}), React.createElement(Who, {}), React.createElement(Competences, {}));
}
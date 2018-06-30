import * as React from 'react';
import * as _ from 'lodash';
export default function () {
    return React.createElement('header', { 'className': 'Header ' + (this.state.isLoad ? null : 'hidden') }, React.createElement('div', { 'className': 'content' }, React.createElement('div', {
        'id': 'roundedPicContent',
        'className': this.state.isLoad ? null : 'hidden'
    }, React.createElement('img', {
        'src': 'https://i.pinimg.com/originals/b2/d1/11/b2d111a4a3a907d3506a7676687bf9cd.jpg',
        'alt': true
    })), React.createElement('p', {
        'id': 'titleHeader',
        'className': this.state.isLoad ? null : 'hidden'
    }, 'Resume Template'), React.createElement('p', {
        'id': 'subtitleHeader',
        'className': this.state.isLoad ? null : 'hidden'
    }, 'Build with React & Semantic Ui')));
}
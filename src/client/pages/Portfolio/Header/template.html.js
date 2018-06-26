import * as React from 'react';
import * as _ from 'lodash';
export default function () {
    return React.createElement('div', { 'className': 'Header' }, React.createElement('div', { 'className': 'content' }, React.createElement('p', {
        'id': 'titleHeader',
        'className': 'hidden'
    }, 'Portfolio Template'), React.createElement('p', {
        'id': 'subtitleHeader',
        'className': 'hidden'
    }, 'Build with react')));
}
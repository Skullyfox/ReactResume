import * as React from 'react';
import * as _ from 'lodash';
import CardMe from '../../../components/CardMe/Card.jsx';
import ItemAbout from '../../../components/ItemAbout/ItemAbout.jsx';
export default function () {
    return React.createElement('section', { 'className': this.state.isLoad ? null : 'hidden' }, React.createElement(CardMe, {}), React.createElement(ItemAbout, {}));
}
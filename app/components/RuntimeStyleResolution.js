/**
 * @file Demonstrates runtime "styleName" resolution.
 * @see https://github.com/gajus/babel-plugin-react-css-modules#runtime-stylename-resolution
 */

import React from 'react';
import table from './table.css';

export default () => {
  return <div className={table.table}>
    <div className={table.row}>
      <div className={'table.cell' + (Math.random() > 0.5 ? ' yellow' : '')}>A2</div>
      <div className={'table.cell' + (Math.random() > 0.5 ? ' yellow' : '')}>B2</div>
      <div className={'table.cell' + (Math.random() > 0.5 ? ' yellow' : '')}>C2</div>
    </div>
  </div>;
};

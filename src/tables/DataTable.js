import './DataTable.scss';

import React, { PropTypes } from 'react';
import classNames from 'classnames';

import * as DataTableCssClasses from './constants/DataTableCssClasses';

import Checkbox from '../toggles/Checkbox';

/**
 * @exampleFile ./__examples__/DataTable.js
 */
class DataTable extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    columns: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string,
        name: PropTypes.string,
        numeric: PropTypes.bool
      })
    ).isRequired,
    data: PropTypes.arrayOf(
      PropTypes.object
    ).isRequired,
    selectable: PropTypes.bool
  };

  _getCellClass(column) {
    return !column.numeric ? DataTableCssClasses.CELL__NON_NUMERIC : '';
  }

  render() {
    const { className, columns, data, selectable, ...otherProps } = this.props;

    const classes = classNames(className, DataTableCssClasses.ROOT);

    return (
      <table className={classes} {...otherProps}>
        <thead>
        <tr>
          {selectable ? (<th><Checkbox /></th>) : null}
          {columns.map((column) => (
            <th
              key={column.name}
              className={this._getCellClass(column)}
            >
              {column.label}
            </th>
          ))}
        </tr>
        </thead>
        <tbody>
        {data.map((elt, idx) => (
          <tr key={elt.key ? elt.key : idx}>
            {selectable ? (<td><Checkbox /></td>) : null}
            {columns.map((column) => (
              <td
                key={column.name}
                className={this._getCellClass(column)}
              >
                {elt[column.name]}
              </td>
            ))}
          </tr>
        ))}
        </tbody>
      </table>
    );
  }
}

export default DataTable;

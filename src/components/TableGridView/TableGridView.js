import React from "react";
import ReactDataGrid from "react-data-grid";
import "./TableGridView.css"
import months from '../../defaults/Months';

const TableGridView = ({ products }) => {

  let columns = [{ key: "product", name: "Produto" }].concat(
    Object.keys(months).map(monthKey =>
      ({ key: monthKey, name: `2018-${months[monthKey].substring(0,3)}` })
    )
  );

  let rows = [], row;
  products.forEach(product => {
    row = { product: product.name };

    product.months.forEach(month => {
      row[month.month] = month.qty;
    });

    rows.push(row);
  });

  let using, uselessColumns = [];
  for(let i = 1; i < columns.length; i++) {
    using = false;
    rows.forEach(row => {
      if(row[i]) {
        using = true;
        return false;
      }
    });

    if(!using) {
      uselessColumns.push(i.toString());
    }
  }

  columns = columns.filter(column => {
    return !uselessColumns.includes(column.key)
  });

  const rowGetter = rowNumber => rows[rowNumber];

  return (
    <div className="divTable">
      <ReactDataGrid
        columns={columns}
        rowGetter={rowGetter}
        rowsCount={rows.length}
        isExpanded={true}
        minColumnWidth={170}
      />
    </div>
  );
}

export default TableGridView;

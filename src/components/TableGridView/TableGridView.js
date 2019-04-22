import React , {Component} from "react";
import ReactDataGrid from "react-data-grid";
import "./TableGridView.css"

// const columns = [
//   { key: "id", name: "ID", editable: true },
//   { key: "title", name: "Title", editable: true },
//   { key: "complete", name: "Complete", editable: true }
// ];

// const rows = [
//   { id: 0, title: "Task 1", complete: 20 },
//   { id: 1, title: "Task 2", complete: 40 },
//   { id: 2, title: "Task 3", complete: 60 }
// ];
  
const columns = [];
const rows = [];
const rowGetter = rowNumber => rows[rowNumber];

class TableGridView extends Component {

  MountColumns = (products) => {
    if(columns.length == 0){
      columns.push({key:"product", name: "Produto"})
      for(var j =0; j < products[0].months.length; j++){
        columns.push({ key: products[0].months[j].id, name: products[0].months[j].month, editable: false })
      }
    } 
    
    return columns;
  }

  MountRows = (products) => {
    if(rows.length == 0){

      for(var i = 0; i < products.length; i++){
        var row= '({ ';
        row += 'product:"' + products[i].name + '",'; 
        for(var j =0; j < products[i].months.length; j++){
          if(j !== products[i].months.length-1)
            row += products[i].months[j].id + ':"' + products[i].months[j].qtd + '",';
          else
          row += products[i].months[j].id + ':"' + products[i].months[j].qtd +'"';
        }
        row +=' })';
        rows.push(eval(row));
      }  
    }
    return rows;
  }
  
  render() {

    const products = this.props.company.products;
        
    this.MountColumns(products)
    this.MountRows(products)

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
}

export default TableGridView;

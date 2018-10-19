import React, {Component} from 'react';
import Row from './Row';
import './Dictionary/products.css';


class Table extends Component {
  render() {
    const onProductTableUpdate = this.props.onProductTableUpdate;
    const rowDel = this.props.onRowDel;
    const product = this.props.products.map(function(product) {
      if (product.range === ''){
        return (<Row onProductTableUpdate={onProductTableUpdate} 
          product={product} 
          onDelEvent={rowDel.bind(this)} 
          key={product.id}/>)
      }
      return null; 
    });
    return (
      <div className="createtable">
        <h3 className="searchText">Add a new dictionary: </h3>
      <div className="dictionary">
        <button type="button" onClick={this.props.onRowAdd} className="btn add">
              <i className="fa fa-plus" aria-hidden="true"></i>
        </button>
        <table className="table">
          <thead id="theadText">
            <tr>
              <th>Dictionary Name</th>
              <th>Domain</th>
              <th>   </th>
              <th>Range</th>
            </tr>
          </thead>

          <tbody>
            {product}
          </tbody>
        </table>
      </div>
      </div>
    );
  }
  
}
export default Table ;
import React, { Component } from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import './AddProduct.css';


class AddProduct extends Component {
  state = {
    name: '',
    manufacturer: '',
    category: '',
    re_order_qty: ''
  }
  handleSubmit = async (event) => {
    event.preventDefault()
    const { name, manufacturer, category, re_order_qty } = this.state
    //Async
    const create_product_res = await axios({
      method: 'POST',
      url: 'http://localhost:1337/products',
      data: {
        name,
        manufacturer,
        category,
        re_order_qty
      }
    })
    if (create_product_res.status === 200) {
      alert("Successfully created product")
      window.location = window.location
    }
  }
  render() {
    const { name, manufacturer, category, re_order_qty } = this.state
    return (
      <div className="AddProduct">
        <h1>Add Your Product Here</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="AddProduct__textfield">
            <div style={{ marginBottom: '40px', marginTop: '10px' }}>
              <TextField style={{ width: 475, marginRight: '40px' }} id="outlined-basic" label="Product Name" onChange={(event) => this.setState({ name: event.target.value })} value={name} variant="outlined" />
              <TextField style={{ width: 475 }} id="outlined-basic" label="Manufacturer" onChange={(event) => this.setState({ manufacturer: event.target.value })} type="text" name="manufacturer" value={manufacturer} variant="outlined" />
            </div>
            <div style={{ marginBottom: '40px' }}>
              <TextField style={{ width: 475, marginRight: '40px' }} id="outlined-basic" label="Category" onChange={(event) => this.setState({ category: event.target.value })} type="text" name="category" value={category} variant="outlined" />
              <TextField style={{ width: 475 }} id="outlined-basic" label="Re-Order Quantity" onChange={(event) => this.setState({ re_order_qty: event.target.value })} type="number" name="re_order_qty" value={re_order_qty} variant="outlined" />
            </div>
            <button className="AddProduct__Button" type="submit">Create new product</button>
          </div>
        </form>
      </div>
    )
  }
}
export default AddProduct

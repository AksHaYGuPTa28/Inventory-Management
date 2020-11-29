import React, {Component} from 'react';
import './AddStockEvent.css';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';

class AddStockEvent extends Component{
  state = {
    qty:'',
    type:'add',
    product:'no',
    supplier_name:'',
    moq:10,
    lead_time:2,
    show:false

  }
  handleChange = (event) => {
    console.log("AddStockEvent.handleChange event.target.name",event.target.name)
    console.log("AddStockEvent.handleChange event.target.value",event.target.value)

    this.setState({[event.target.name]: event.target.value})
  }
  handleSubmit = async (event) => {
    event.preventDefault()
    const {qty,type,product,supplier_name,moq,lead_time} = this.state

    console.log("AddStockEvent.handleSubmit qty",qty)
    console.log("AddStockEvent.handleSubmit type",type)

    if(product != 'no'){
      const data = {
        qty,
        type,
        product: parseInt(product),
        supplier_name,
        moq,
        lead_time
      }
      const add_stock_res= await axios({
        method: 'POST',
        url: 'http://localhost:1337/stockevents',
        data
      })
      console.log("AddStockEvent.handleSubmit add_stock_res",add_stock_res)
      if(add_stock_res.status === 200){
        alert("Success")
        window.location = window.location
      }
    }else{
      alert("No product chosen")
      return
    }
  }

  render(){
    //select the product
    //add a Quantity
    //select a type
    //submit to strapi
    const {qty,type,product,supplier_name,moq,lead_time,show} = this.state

    const {products} =this.props
    return(
    <div className="AddStockEvent">
 <button className="AddStockEvent__button" onClick={() => this.setState({show: true})}>Quick Sell</button>
    {show &&
      <form onSubmit={this.handleSubmit}>
      <select style={{ width: 990, marginTop: '20px' }} onChange={this.handleChange} name="product" value={product}>
        <option value='no'>Please Select A Product</option>
        {products.map((product, i) => (
          <option key={i} value={product.id}>
            {"Product : " + product.name + "  Manufacturer : " + product.manufacturer}
          </option>
        ))}
      </select>
      <div style={{ marginBottom: '40px', marginTop: '30px' }}>
        <TextField style={{ width: 475, marginRight: '40px' }} onChange={this.handleChange} type="text" name="qty" value={qty} id="outlined-basic" label="Quantity" variant="outlined" />

        <select style={{ width: 475 }} onChange={this.handleChange} name="type" value={type}>
          <option value='add'>Add</option>
          <option value='remove'>Remove</option>
        </select>
      </div>
      <TextField style={{ width: 300, marginRight: '40px' }} onChange={this.handleChange} type="text" name="supplier_name" value={supplier_name} id="outlined-basic" label="Supplier Name" variant="outlined" />
      <TextField style={{ width: 300, marginRight: '40px' }} onChange={this.handleChange} type="number" name="moq" value={moq} id="outlined-basic" label="MOQ" variant="outlined" />
      <TextField style={{ width: 300 }} onChange={this.handleChange} type="number" name="lead_time" value={lead_time} id="outlined-basic" label="Lead Time" variant="outlined" />
      <br />
      <button className="AddStockEvent__button">Submit</button>
    </form>
    }

    </div>
  )
  }
}
export default AddStockEvent

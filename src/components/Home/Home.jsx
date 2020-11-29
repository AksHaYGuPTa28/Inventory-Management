import React from 'react';
import './Home.css';
import StockEventsTable from '../StockEventsTable/StockEventsTable';
import StockDetail from '../StockDetail/StockDetail';
import axios from 'axios'
import AddStockEvent from '../AddStockEvent/AddStockEvent';
import AddProduct from '../AddProduct/AddProduct';
import Sidebar from '../Sidebar/Sidebar';




class Home extends React.Component {
  state = {
    fetchedProducts: [],
    fetchedStockEvents: [],
  }
  async componentDidMount() {
    const productsRes = await axios({
      method: 'GET',
      url: 'http://localhost:1337/products'
    })
    const stockEventRes = await axios({
      method: 'GET',
      url: 'http://localhost:1337/stockevents'
    })
    const fetchedProducts = productsRes.data
    console.log(fetchedProducts);
    const fetchedStockEvents = stockEventRes.data
    this.setState({ fetchedProducts, fetchedStockEvents })
  }

  render() {
    console.log("App.render")
    const { fetchedProducts, fetchedStockEvents } = this.state
    return (

      <div className="Inventory__main">
        <div className="Inventory__sidebar">
          <Sidebar />
        </div>
        <div className="Inventory__tables">
          <AddProduct />

          <AddStockEvent products={fetchedProducts} />
          <h1>Inventory</h1>
          <StockEventsTable
            products={fetchedProducts}
            stockEvents={fetchedStockEvents}
          />    </div>
      </div>
    );
  }
}

export default Home;

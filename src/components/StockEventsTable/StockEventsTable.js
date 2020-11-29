import React from 'react'
import StockDetail from '../StockDetail/StockDetail';

function StockEventsTable(props){
  const {products, stockEvents} = props
  return (
    <div className="StockEventTable">
    {products.map(product => {
      const {id} = products

const relevantStockEvents = stockEvents.filter(se => se.product.id === product.id)
const stockTotal = relevantStockEvents.reduce((accumulator, currentElement)=>{
  return accumulator + currentElement.qty
}, 0)
/*Another way to do above thing is
let accumulator = 0
for(events in relevantStockEvents){
  accumulator += event.qty
}*/
      return(
        <div>
        <div className="StockEventTable__ProductsContainer">
        <StockDetail name={product.name}
        total={stockTotal}
        stockEvents={relevantStockEvents}
        manufacturer={product.manufacturer}
        re_order_qty={product.re_order_qty}
        />
</div>
        </div>
      )
    })}
    </div>
  )
}


export default StockEventsTable;

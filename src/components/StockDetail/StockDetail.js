import React from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

class StockDetail extends React.Component{
  state ={
    show: false
  }
  render(){
    const {name, total, stockEvents, manufacturer,re_order_qty} = this.props
    const {show} = this.state
    return(
      <div className="StockDetail" onClick={() => this.setState({show: !show})}>

      {(() => {
                  if (total<re_order_qty) {
                    return (
                      <h2 className="StockDetailsHeadingLow">Product: {name} | Manufacturer:{manufacturer} | Quantity-In-Stock: {total} </h2>
                    )
                  }else {
                    return (
                      <h2 className="StockDetailsHeading">Product: {name} | Manufacturer:{manufacturer} | Quantity-In-Stock: {total} </h2>
                    )
                  }
                 
              })()}



{show &&
<div>
{stockEvents.map((event,i) => (
  <div key={i} className="StockEventTable__Card">
  <TableContainer >
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Transaction ID</TableCell>
            <TableCell align="right">Type</TableCell>
            <TableCell align="right">Product Name</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Supplier</TableCell>
            <TableCell align="right">MOQ</TableCell>
            <TableCell align="right">Lead Time</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow key={i}>
              <TableCell align="center">{event.id}</TableCell>
              <TableCell align="right">{event.type}</TableCell>
              <TableCell align="right">{event.product.name}</TableCell>
              <TableCell align="right">{event.qty}</TableCell>
              <TableCell align="right">{event.supplier_name}</TableCell>
              <TableCell align="right">{event.moq}</TableCell>
              <TableCell align="right">{event.lead_time}</TableCell>


            </TableRow>
          
        </TableBody>
      </Table>
    </TableContainer>
  </div>
))}
</div>
}
  </div>
  )

}
}

export default StockDetail;

import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import PropTypes from 'prop-types';


const OrderForm = props => (
  <Row>
    <Col xs={12}>
      <OrderSummary options={props.options} cost={props.tripCost}/>
    </Col>
  </Row>
);

OrderForm.propTypes = {
  options: PropTypes.any,
  tripCost: PropTypes.string,
};

export default OrderForm;
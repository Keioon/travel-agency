import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import PropTypes from 'prop-types';
import pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption';

const OrderForm = ({options, setOrderOption, tripCost}) => (
  <Row>
    {pricing.map(option =>
      <Col md={4} key={option.id}>
        <OrderOption {...option} currentValue = {options[option.id]} setOrderOption = {setOrderOption}/>
      </Col>
    )}
    <Col xs={12}>
      <OrderSummary cost={tripCost} options={options}/>
    </Col>
  </Row>
);

OrderForm.propTypes = {
  options: PropTypes.object,
  tripCost: PropTypes.string,
  setOrderOption: PropTypes.func,
  name: PropTypes.string,
};

export default OrderForm;
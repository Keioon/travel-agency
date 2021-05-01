import OrderForm from './OrderForm';
import {connect} from 'react-redux';
import {getOrderOptions} from '../../../redux/orderRedux';

//mapowanie selektora getOrderOptions do propsa options
const mapStateToProps = (state) => {
  const options = getOrderOptions(state);
  return {
    options,
  };
};

export default connect(mapStateToProps)(OrderForm);
import OrderForm from './OrderForm';
import {connect} from 'react-redux';
import {getOrderOptions, setOrderOption} from '../../../redux/orderRedux';

//mapowanie selektora getOrderOptions do propsa options
const mapStateToProps = (state) => ({
  options: getOrderOptions(state),
  setOrderOption: setOrderOption(state),
});

const mapDispatchToProps = dispatch => ({
  setOrderOption: option => dispatch(setOrderOption(option)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm);
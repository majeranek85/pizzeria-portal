import { connect } from 'react-redux';
import NewOrder from './NewOrder';
import { updateStatus, getTableId } from '../../../redux/tablesRedux';

const mapStateToProps = (state) => ({
  tableNumber: getTableId(state),
});

const mapDispatchToProps = (dispatch) => ({
  updateTableStatus: object => dispatch(updateStatus(object)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewOrder);

import { connect } from 'react-redux';
import Waiter from './Waiter';
import { getAll, fetchFromAPI, getLoadingState, updateStatus, setTableId } from '../../../redux/tablesRedux';

const mapStateToProps = (state) => ({
  tables: getAll(state),
  loading: getLoadingState(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchTables: () => dispatch(fetchFromAPI()),
  updateTableStatus: object => dispatch(updateStatus(object)),
  getTableId: item => dispatch(setTableId(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Waiter);

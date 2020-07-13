import Axios from 'axios';
import { api } from '../settings';

/* selectors */
export const getAll = ({tables}) => tables.data;
export const getLoadingState = ({tables}) => tables.loading;
export const getTableId = ({tables}) => tables.tableNumber;

/* action name creator */
const reducerName = 'tables';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');
const CHANGE_STATUS = createActionName('CHANGE_STATUS');
const SET_TABLE_ID = createActionName('SET_TABLE_ID');

/* action creators */
export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });
export const changeStatus = payload => ({ payload, type: CHANGE_STATUS});
export const setTableId = payload => ({ payload, type: SET_TABLE_ID});

/* thunk creators */
export const fetchFromAPI = () => {
  return (dispatch, getState) => {
    dispatch(fetchStarted());

    Axios
      .get(`${api.url}/${api.tables}`)
      .then(res => {
        //console.log(res.data);
        dispatch(fetchSuccess(res.data));
      })
      .catch(err => {
        dispatch(fetchError(err.message || true));
      });
  };
};

export const updateStatus = object => {
  return (dispatch, getState) => {
    const state = getState();
    const table = state.tables.data.find(table => table.id === object.id);
    const newTableData = {...table, id: object.id, status: object.status, order: object.order};
    console.log(object);

    Axios
      .put(`${api.url}/${api.tables}/${object.id}`,
        newTableData
      )
      .then(res => {
        dispatch(changeStatus(res.data));
        //console.log(res.data);
      })
      .catch(err => {
        dispatch(fetchError(err.message || true));
      });
  };
};


/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case FETCH_START: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
        },
      };
    }
    case FETCH_SUCCESS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        data: action.payload,
      };
    }
    case FETCH_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
        },
      };
    }
    case CHANGE_STATUS: {
      return {
        ...statePart,
        data: statePart.data.map(table => ((table.id !== action.payload.id) ?
          table :
          {...table, status: action.payload.status}
        )),
      };
    }
    case SET_TABLE_ID: {
      return {
        ...statePart,
        tableNumber: action.payload,
      };
    }
    default:
      return statePart;
  }
}

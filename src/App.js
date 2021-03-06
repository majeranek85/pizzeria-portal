import React from 'react';
import MainLayout from './components/layout/MainLayout/MainLayout';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
// imported views
import Dashboard from './components/views/Dashboard/Dashboard';
import Login from './components/views/Login/Login';
import Tables from './components/views/Tables/Tables';
import BookedTable from './components/views/BookedTable/BookedTable';
import NewBookedTable from './components/views/NewBookedTable/NewBookedTable';
import EventTable from './components/views/EventTable/EventTable';
import NewEventTable from './components/views/NewEventTable/NewEventTable';
import Waiter from './components/views/Waiter/WaiterContainer';
import Order from './components/views/Order/Order';
import NewOrder from './components/views/NewOrder/NewOrderContainer';
import Kitchen from './components/views/Kitchen/Kitchen';

import { StylesProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#2b4c6f' },
    secondary: { main: '#4caa86' },
  },
});

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <StylesProvider injectFirst>
          <ThemeProvider theme={theme}>
            <MainLayout>
              <Switch>
                <Route exact path={`${process.env.PUBLIC_URL}/`} component={Dashboard} />
                <Route exact path={`${process.env.PUBLIC_URL}/login`} component={Login} />
                <Route exact path={`${process.env.PUBLIC_URL}/tables`} component={Tables} />
                <Route exact path={`${process.env.PUBLIC_URL}/tables/booking/new`} component={NewBookedTable} />
                <Route exact path={`${process.env.PUBLIC_URL}/tables/booking/:id`} component={BookedTable} />
                <Route exact path={`${process.env.PUBLIC_URL}/tables/events/new`} component={NewEventTable} />
                <Route exact path={`${process.env.PUBLIC_URL}/tables/events/:id`} component={EventTable} />
                <Route exact path={`${process.env.PUBLIC_URL}/waiter`} component={Waiter} />
                <Route exact path={`${process.env.PUBLIC_URL}/waiter/order/new`} component={NewOrder} />
                <Route exact path={`${process.env.PUBLIC_URL}/waiter/order/:id`} component={Order} />
                <Route exact path={`${process.env.PUBLIC_URL}/kitchen`} component={Kitchen} />
              </Switch>
            </MainLayout>
          </ThemeProvider>
        </StylesProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

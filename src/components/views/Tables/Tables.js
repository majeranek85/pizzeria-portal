import React from 'react';
import styles from './Tables.module.scss';
import {Link} from 'react-router-dom';

import Paper from '@material-ui/core/Paper';
import { ViewState, GroupingState, IntegratedGrouping }  from '@devexpress/dx-react-scheduler';
import { Scheduler, Resources, GroupingPanel, DayView, Appointments, AppointmentTooltip, DateNavigator, TodayButton, Toolbar } from '@devexpress/dx-react-scheduler-material-ui';

const appointments = [
  { startDate: '2020-07-09 15:00', endDate: '2020-07-09 16:00', title: 'Era S.A.', location: 'Table no.1' },
  { startDate: '2020-07-09 18:00', endDate: '2020-07-09 19:30', title: 'Zebranie seniorów', location: 'Table no.2' },
  { startDate: '2020-07-09 14:00', endDate: '2020-07-09 16:00', title: 'Hanna Gronkiewicz', location: 'Table no.3' },
  { startDate: '2020-07-09 15:00', endDate: '2020-07-09 17:30', title: 'Miriam Makeba', location: 'Table no.2' },
  { startDate: '2020-07-09 19:00', endDate: '2020-07-09 20:30', title: 'Formacja Niezywych Schabów', location: 'Table no.1' },
];

const isWeekOrMonthView = viewName => viewName === 'Day';

class Tables extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: appointments,
      resources: [
        {
          fieldName: 'location',
          title: 'Location',
          instances: [
            {id: 'Table no.1', text: 'Table no.1'},
            {id: 'Table no.2', text: 'Table no.2'},
            {id: 'Table no.3', text: 'Table no.3'},
            {id: 'Table no.4', text: 'Table no.4'},
            {id: 'Table no.5', text: 'Table no.5'},
            {id: 'Table no.6', text: 'Table no.6'},
          ],
        },
      ],
      grouping: [{
        resourceName: 'location',
      }],
      groupByDate: isWeekOrMonthView,
    };
  }

  render() {
    const {data, resources, grouping, groupByDate} = this.state;

    return (

      <Paper className={styles.component}>
        {/*<h2>Tables view</h2>
        <Link to={`${process.env.PUBLIC_URL}/tables/booking/123xyz`}>Booking details</Link>
        <Link to={`${process.env.PUBLIC_URL}/tables/booking/new`}>New booking</Link>
        <Link to={`${process.env.PUBLIC_URL}/tables/events/123abc`}>Event details</Link>
        <Link to={`${process.env.PUBLIC_URL}/tables/events/new`}>New event</Link>*/}
        <Scheduler
          data={data}
        >
          <ViewState
            defaultCurrentDate={'2020-07-09'}/>
          <GroupingState
            grouping={grouping}
            groupByDate={groupByDate}
          />
          <DayView
            startDayHour={12}
            endDayHour={24}
          />
          <Toolbar />
          <DateNavigator />
          <TodayButton />
          <Appointments />
          <AppointmentTooltip />
          <Resources
            data={resources}
          />
          <IntegratedGrouping />
          <GroupingPanel />
        </Scheduler>
      </Paper>

    );
  }
}

export default Tables;

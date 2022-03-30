import moment from 'moment';

type State = {
  home: any;
  analytics: any;
  valSwitch: boolean;
  showDatePicker: boolean;
  displayDate: string;
  selectedMonth: string;
  analyticsDetail: any;
  category: any;
};

export const state: State = {
  home: {},
  analytics: {},
  valSwitch: true,
  showDatePicker: false,
  displayDate: moment(new Date()).locale('en').format('MMM YYYY'),
  selectedMonth: moment().format('YYYY/MM'),
  analyticsDetail: [],
  category: [],
};

import moment from 'moment';

export const datePickerShow = (context: any, val: boolean) => {
  context.state.showDatePicker = val;
};

export const confirmDate = (context: any, date: string) => {
  const DateString2Date = new Date(date.replace(' ', '-') + '-01');
  const displayDateFormat = moment(DateString2Date)
    .locale('en')
    .format('MMM YYYY');

  context.state.selectedMonth = date.replace(' ', '/');
  context.state.displayDate = displayDateFormat;
  context.state.showDatePicker = false;
};

export const toggleSwitch = (context: any, val: boolean) => {
  context.state.valSwitch = val;
};

export const getHome = async (context: any) => {
  let res = await context.effects.api.getHome();

  if (res?.Success) {
    context.state.home = {...res?.Data};
  }
};

export const getAnalytics = async (context: any) => {
  let res = await context.effects.api.getAnalytics();

  if (res?.Success) {
    context.state.analytics = {...res?.Data};
  }
};

export const getAnalyticsDetail = async (context: any) => {
  let res = await context.effects.api.getAnalyticsDetail();

  if (res?.Success) {
    context.state.analyticsDetail = [...res?.Data];
  }
};

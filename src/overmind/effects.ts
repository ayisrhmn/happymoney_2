import moment from 'moment';

export const api = {
  getHome() {
    // let payload = {};
    // return http.post('/path/to/api', payload);
    return new Promise(function (resolve) {
      resolve({
        Success: true,
        Data: {
          user: {
            fullName: 'Muhammad Fariz Rahman',
          },
          overview: {
            exPercentage: 25,
            inPercentage: 75,
            exValue: 1200000,
            inValue: 5760000,
            balance: 4560000,
          },
          recentTransactions: [
            {
              title: 'Have a lunch',
              category: 'Food',
              type: 'expense',
              value: 200000,
              inputDate: moment().format('DD-MMM-YYYY'),
            },
            {
              title: 'Data plan Indosat',
              category: 'Data plan',
              type: 'expense',
              value: 300000,
              inputDate: moment().format('DD-MMM-YYYY'),
            },
            {
              title: 'Buy T-Shirt',
              category: 'Shopping',
              type: 'expense',
              value: 200000,
              inputDate: moment().format('DD-MMM-YYYY'),
            },
            {
              title: 'Buy PS4 Games',
              category: 'Gaming',
              type: 'expense',
              value: 300000,
              inputDate: moment().format('DD-MMM-YYYY'),
            },
            {
              title: 'Monthly salary',
              category: 'Salary',
              type: 'income',
              value: 5760000,
              inputDate: moment().format('DD-MMM-YYYY'),
            },
          ],
        },
      });
    });
  },
  getAnalytics() {
    // let payload = {};
    // return http.post('/path/to/api', payload);
    return new Promise(function (resolve) {
      resolve({
        Success: true,
        Data: {
          income: [
            {
              category: 'Salary',
              value: 5760000,
            },
          ],
          expense: [
            {
              category: 'Data plan',
              value: 300000,
            },
            {
              category: 'Gaming',
              value: 300000,
            },
            {
              category: 'Food',
              value: 200000,
            },
            {
              category: 'Shopping',
              value: 200000,
            },
          ],
        },
      });
    });
  },
};

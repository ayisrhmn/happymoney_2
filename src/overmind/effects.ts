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
            },
            {
              title: 'Data plan',
              category: 'Data plan',
              type: 'expense',
              value: 300000,
            },
            {
              title: 'Buy T-Shirt',
              category: 'Shopping',
              type: 'expense',
              value: 200000,
            },
            {
              title: 'Buy PS4 Games',
              category: 'Gaming',
              type: 'expense',
              value: 300000,
            },
            {
              title: 'Monthly salary',
              category: 'Salary',
              type: 'income',
              value: 5760000,
            },
          ],
        },
      });
    });
  },
};

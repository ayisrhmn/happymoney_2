export const api = {
  getUserInfo() {
    // let payload = {};
    // return http.post('/path/to/api', payload);
    return new Promise(function (resolve) {
      resolve({
        Success: true,
        Data: {
          fullName: 'Muhammad Fariz Rahman',
        },
      });
    });
  },
};

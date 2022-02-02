export const api = {
  getWelcome() {
    // let payload = {};
    // return http.post('/path/to/api', payload);
    return new Promise(function (resolve) {
      resolve({
        Success: true,
        Data: 'Hello World!',
      });
    });
  },
};

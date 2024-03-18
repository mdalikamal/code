/* whey did we create the helper/airquality.js because we need to understand both thing promises and callback */
const { default: axios } = require(`axios`);
//

//call back is another way to write a  writing asynchronous
function airqualityCallback(url, callback) {
  /*axios always return us a promises(then how we will test the code if its returning promises ) we will testing its by creating wrapper that will simmulate  the callback(means once the promises are being full-filled or not if promises is it will have data if not its will have error  )    
     * this is returning a callback */
  axios
    .get(url)
    .then((resp) => {
      callback(null, resp.data);
    })
    .catch((err) => {
      callback(err, null);
    });
}
//promises are one more ways of writing asynchronous code
function airqualitypromise(url) {
  return new Promise((resolve, reject) => {
    /* this is also returning from axios how itb will return it it will return it we need to promisify it return its because here we are making it direct call   */
    axios
      .get(url)
      .then((resp) => {
        return resolve(resp.data);

      })
      .catch((err) => {
        return reject(err);
      });
  });
}
module.exports = { airqualitypromise, airqualityCallback }
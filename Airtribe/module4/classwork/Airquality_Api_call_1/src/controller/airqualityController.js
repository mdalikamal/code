const airQuality = require('express').Router();
const url = `https://api.openaq.org/v2/latest`;
const { airqualityCallback, airqualitypromise } = require(`../helpers/airQuality_helper`)



airQuality.get(`/callback`, (req, res) => {
          airqualityCallback(url, (err, resp) => {
                    if (err) {
                              return res.send(`some things are wrong`);
                    }
                    else {
                              return res.send(resp);
                    }
          });
})

/*here in the above code we are writing code based on callback-inside-callback this turn out to be really messy code which we are writing the code become real threat for maintainability or we can say debugging them  */
airQuality.get(`/callbackHell`, (req, res) => {
          let totalResult = [];
          airqualityCallback(`https://api.openaq.org/v2/latest?page=1`,
                    (err1, data1) => {
                              if (err1) {

                                        return res.status(500).send(`incorrrect page `);

                              }
                              else {
                                        airqualityCallback(`https://api.openaq.org/v2/latest?page=2`, (err2, data2) => {
                                                  if (err2) {
                                                            return res.send(`incorrrect page`).status(500);
                                                  }
                                                  else {
                                                            airqualityCallback(`https://api.openaq.org/v2/latest?page=3`, (err3, data3) => {
                                                                      if (err3) {
                                                                                return res.send(`incorrrect page`).status(500);
                                                                      }
                                                                      else {
                                                                                totalResult.push(data1);
                                                                                totalResult.push(data2);
                                                                                totalResult.push(data3);
                                                                                return res.send(totalResult).status(200);
                                                                      }
                                                            });
                                                  }
                                        });
                              }
                    });



});
airQuality.get(`/promise`, (req, res) => {
          airqualitypromise(url).then(resp => {
                    res.send(resp).statusCode(200);
          }).catch(err => {
                    return res.send("some things are wrong").status(500);

          });
});




airQuality.get(`/promiseHaven`, (req, res) => {
          airqualitypromise('https://api.openaq.org/v2/latest?page=1').then(data => {
                    let totalResults = [];
                    airqualitypromise('https://api.openaq.org/v2/latest?page=2').then(data2 =>
                              airqualitypromise('https://api.openaq.org/v2/latest?page=3').then(data3 => {
                                        totalResults.push(data);
                                        totalResults.push(data2);
                                        totalResults.push(data3);
                                        return res.status(200).send(totalResults);
                              }).catch(err3 => {
                                        return res.status(500).send(`something went wrong`);
                              })
                    ).catch(err2 => {
                              return res.status(500).send(`something went wrong`);
                    });
          }).catch(err1 => {
                    return res.status(500).send(`something went wrong`);
          });
});
airQuality.get('/airQualityAsyncwait', async (req, res) => {
          try {
                    let totalResult = [];
                    let data = await airqualitypromise('https://api.openaq.org/v2/latest?page=1');
                    let data1 = await airqualitypromise('https://api.openaq.org/v2/latest?page=2');
                    let data2 = await airqualitypromise('https://api.openaq.org/v2/latest?page=3');
                    totalResult.push(data1);
                    totalResult.push(data2);
                    totalResult.push(data);
                    return res.send(totalResult).status(200);
          }
          catch (err) {
                    return res.status(500).send(`something went wrong`);
          }
});
airQuality.get('/AirQualitypromiseAll', (req, res) => {
          let data = airqualitypromise('https://api.openaq.org/v2/latest?page=1');
          let data1 = airqualitypromise('https://api.openaq.org/v2/latest?page=2');
          let data2 = airqualitypromise('https://api.openaq.org/v2/latest?page=3');
          Promise.all([data1, data2, data]).then(r => {
                    return res.send(r).status(200);
          }).catch(err => {
                    return res.status(500).send(`something went wrong`);
          });
});
airQuality.get('/AirQualitypromiserace', (req, res) => {
          let data = airqualitypromise('https://api.openaq.org/v2/latest?page=1');
          let data1 = airqualitypromise('https://api.openaq.org/v2/latest?page=2');
          let data2 = airqualitypromise('https://api.openaq.org/v2/latest?page=3');
          Promise.race([data1, data2, data]).then(r => {
                    return res.send(r).status(200);
          }).catch(err => {
                    return res.status(500).send(`something went wrong`);
          });
});
module.exports = airQuality;

const mongoose = require('mongoose');
before((done) => {
          try {          //     "typeofDb  url      nameofcollection"
                    mongoose.connect("mongodb://localhost:27017/unittest_course_rateing_user", {
                              useUnifiedTopology: true,
                              useNewUrlParser: true

                    });
                    console.log(`name of db connected by the`);
          } catch (error) {
                    console.log("connection failed")
          }






          done()
})
beforeEach((done) => {
          // mongoose.connection.collections.users.drop(() => {
          //           done();
          // })
          done();

})
afterEach((done) => {
          // mongoose.connection.collections.users.drop(() => {
          //           done();
          // })
          done();
})
after((done) => {
          mongoose.disconnect();
          done();
})
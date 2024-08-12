let chai = null;
let request = null;
let { it } = require("mocha");

import("chai")
  .then((chaiModule) => {
    chai = chaiModule;
    import("request")
      .then((requestModule) => {
        request = requestModule.default;

        const { expect } = chai;

        // Define the test inside the dynamic imports
        it("Main page content", function (done) {
          request(
            "http://localhost:3000/home",
            function (error, response, body) {
              expect(body).to.equal("Welcome to your Todo App!");
              done();
            }
          );
        });

        // Now that the test is defined, you can run it here if needed
        // runTests();
      })
      .catch((error) => {
        console.error("Error loading Request:", error);
      });
  })
  .catch((error) => {
    console.error("Error loading Chai:", error);
  });

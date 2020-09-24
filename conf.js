exports.config = {
  seleniumAddress: "http://0.0.0.0:4444/wd/hub",
  specs: ["test.js"],
  framework: "jasmine",
  capabilities: {
    browserName: "chrome",
  },
};

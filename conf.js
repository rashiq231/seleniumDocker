exports.config = {
  seleniumAddress: "http://172.24.0.3:4444/wd/hub",
  specs: ["test.js"],
  framework: "jasmine",
  capabilities: {
    browserName: "chrome",
  },
};

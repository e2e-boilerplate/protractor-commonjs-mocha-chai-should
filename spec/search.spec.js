// eslint-disable-next-line no-unused-vars
const should = require("chai").should();

describe("Sandbox", () => {
  before(function fn() {
    this.timeout(20000);
    browser.get("https://e2e-boilerplate.github.io/sandbox/");
  });

  it("should be on Sandbox", async () => {
    const pageTitle = await browser.getTitle();
    const header = element(by.css("h1"));

    pageTitle.should.eql("Sandbox");
    header.getText().then((title) => {
      title.should.eql("Sandbox");
    });
  });
});

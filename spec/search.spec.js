// eslint-disable-next-line no-unused-vars
const should = require("chai").should();

describe("Sandbox", () => {
  before(function fn() {
    this.timeout(20000);
    browser.get("https://e2e-boilerplate.github.io/sandbox/");
  });

  it("should be on Sandbox", async () => {
    const pageTitle = await browser.getTitle();
    pageTitle.should.eql("Sandbox");

    const header = await element(by.css("h1")).getText();
    header.should.eql("Sandbox");
  });
});

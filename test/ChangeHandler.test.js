const ChangeHandler = require("../src/js/ChangeHandler");

describe("ChangeHandler", function() {
  test("class is defined", function() {
    // Remember, you can arrange, act, and assert...start small
    expect(ChangeHandler).toBeDefined();
  });
  test("amountDue is set based on argument", function() {
    const change = new ChangeHandler();
    expect(change.amountDue).toBeDefined();
  });
  test("cashTendered is set to zero", function() { 
    const change = new ChangeHandler();
    expect(change.cashTendered).toBe(0);
  });
  test("insert quarter", function() { 
    const change = new ChangeHandler();
    change.insertCoin('quarter');
    expect(change.cashTendered).toEqual(25);
  });
  test("insert dime", function() { 
    const change = new ChangeHandler();
    change.insertCoin('dime');
    expect(change.cashTendered).toEqual(10);
  });
  test("insert nickle", function() { 
    const change = new ChangeHandler();
    change.insertCoin('nickle');
    expect(change.cashTendered).toEqual(5);
  });
  test("insert penny", function() { 
    const change = new ChangeHandler();
    change.insertCoin('penny');
    expect(change.cashTendered).toEqual(1);
  });
  test("insert multiple coins", function() { 
    const change = new ChangeHandler();
    change.insertCoin('penny');
    change.insertCoin('quarter');
    change.insertCoin('nickle');
    expect(change.cashTendered).toEqual(31);
  });
});
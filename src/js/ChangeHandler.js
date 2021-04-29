/**
 * This class handles change for a vending machine.
 *
 * IMPORTANT: All amounts are in cents. E.g. $1.35 = 135. This will help with rounding errors.
 */
class ChangeHandler {
  constructor(amountDue = 0) {
    this.amountDue = amountDue;
    this.cashTendered = 0;
  }

  /**
   * The customer inserts a coin, increasing the cashTendered.
   * @param {string} type either quarter, dime, nickel, or penny
   */
  insertCoin(type) {
    if (type === "quarter") {
      this.cashTendered += 25;
    }
    if (type === "dime") {
      this.cashTendered += 10;
    }
    if (type === "nickle") {
      this.cashTendered += 5;
    }
    if (type === "penny") {
      this.cashTendered += 1;
    }
  }

  /**
   * Returns true if enough coins have been inserted to at least meet the amountDue
   */
  isPaymentSufficient() {
    return (this.cashTendered >= this.amountDue);
  }

  giveChange() {
    // TODO return the correct change in the following format...
    return {
      quarters: 0,
      dimes: 0,
      nickels: 0,
      pennies: 0,
    };
  }
}

module.exports = ChangeHandler;

class Equb {
    constructor(id, type, startDate, endDate, depositAmount , commission, noOfCustomers, payoutInterval, noOfPayouts, createdAt, updatedAt) {
        this.id = id;
        this.type = type;
        this.startDate = startDate;
        this.endDate = endDate;
        this.depositAmount = depositAmount;
        this.commission = commission;
        this.noOfCustomers = noOfCustomers;
        this.payoutInterval = payoutInterval;
        this.noOfPayouts = noOfPayouts;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}

module.exports = Equb;
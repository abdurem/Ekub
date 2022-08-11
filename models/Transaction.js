class Transaction{
    constructor(id, date, amount, remark, equbId, customerId, employeeId, createdAt, updatedAt){
        this.id = id;
        this.date = date;
        this.amount = amount;
        this.remark = remark;
        this.equbId = equbId;
        this.customerId = customerId;
        this.employeeId = employeeId;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}

module.exports = Transaction;
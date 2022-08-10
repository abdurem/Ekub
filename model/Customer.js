class Customer{
    constructor(id, userId, fullName, houseNo, woreda, subCity, city, status, createdAt, updatedAt){
        this.id = id;
        this.userId = userId;
        this.fullName = fullName;
        this.houseNo = houseNo;
        this.woreda = woreda;
        this.subCity = subCity;
        this.city = city;
        this.status = status;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}

module.exports = Customer;
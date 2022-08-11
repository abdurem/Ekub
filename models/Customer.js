class Customer{
    createCustomer(fullName, userId, houseNo, woreda, subCity, city, status){
        this.fullName = fullName;
        this.userId = userId;
        this.houseNo = houseNo;
        this.woreda = woreda;
        this.subCity = subCity;
        this.city = city;
        this.status = status;
    }
    searchId(id){
        this.id = id;
    }
    updateCustomer(fullName, userId, houseNo, woreda, subCity, city, status){
        this.fullName = fullName;
        this.userId = userId;
        this.houseNo = houseNo;
        this.woreda = woreda;
        this.subCity = subCity;
        this.city = city;
        this.status = status;
    }
}

module.exports = Customer;
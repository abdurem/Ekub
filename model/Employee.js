class Employee{
    constructor(id, fullName, phone, type, createdAt, updatedAt){
        this.id = id;
        this.fullName = fullName;
        this.phone = phone;
        this.type = type;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}

module.exports = Employee;
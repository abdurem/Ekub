class Employee{
    createEmployee(fullName,userId){
        this.fullName = fullName;
        this.userId = userId;
    }
    searchId(id){
        this.id = id;
    }
    updateEmployee(fullName,userId){
        this.fullName = fullName;
        this.userId = userId;
    }
}

module.exports = Employee;
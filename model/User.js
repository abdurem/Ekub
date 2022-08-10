class User {
  constructor(id, password, phone, type, createdAt, updatedAt) {
    this.id = id;
    this.password = password;
    this.phone = phone;
    this.type = type;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  auth(id, phone, password) {
    if(this.phone == phone && this.password == password){
      return id;
    }
    return false;
  }
}

module.exports = User;
class User {
  createUser(phone, type, password) {
    this.phone = phone;
    this.type = type;
    this.password = password; 
  }
  searchUser(phone) {
    this.phone = phone;
  }
  searchId(id) {
    this.id = id;
  }
  updateUser(phone, type, password) {
    this.phone = phone;
    this.type = type;
    this.password = password;
  }
  authUser(phone, password) {
    this.phone = phone;
    this.password = password;
  }
}

module.exports = User;
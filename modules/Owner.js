const sql = require('./sql')

const Owner = function(owner){
    this.ID = owner.OwnerID;
    this.firstName = owner.FirstName;
    this.lastName = owner.LastName;
    this.email = owner.Email;
};

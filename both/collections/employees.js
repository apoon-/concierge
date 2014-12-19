Employees = new Mongo.Collection('employees');
/*
 * Add query methods like this:
 *  Employees.findPublic = function () {
 *    return Employees.find({is_public: true});
 *  }
 */

Meteor.startup(function () {
    if(Employees.find().count() === 0){
      employeesJSON.nuruners.forEach(function(x){
        Employees.insert(x.staff)
      });
    }
});
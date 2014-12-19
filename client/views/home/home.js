/*****************************************************************************/
/* Home: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.Home.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */

});

Template.Home.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */

   isAdmin: function(){
    var user = Meteor.user();
    if (user && user.emails) {
      var adminEmail = Meteor.user().emails[0].address;
        if(adminEmail === "admin@nurun.com"){
          console.log("hi");
          return true
        } else {
          console.log("nope");
          return false
          //add some logic for displaying error template.
        }
    }
   },

   adminOverride: function(){
    console.log("admin override");
    $('.dropdown-toggle').text("Admin");
   }
});

/*****************************************************************************/
/* Home: Lifecycle Hooks */
/*****************************************************************************/
Template.Home.created = function () {
};

Template.Home.rendered = function () {
  $('.dropdown-toggle').text("Admin");
};

Template.Home.destroyed = function () {
};
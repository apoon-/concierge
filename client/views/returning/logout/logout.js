/*****************************************************************************/
/* Logout: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.Logout.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */

   'click #logout': function (){
      var activeGuest = this;
      console.log('before: ' + activeGuest);
      activeGuest.active = false;
      _.extend(activeGuest, {
        endTime: new Date()
      })
      console.log('after: ' + activeGuest);
   }
});

Template.Logout.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

/*****************************************************************************/
/* Logout: Lifecycle Hooks */
/*****************************************************************************/
Template.Logout.created = function () {
};

Template.Logout.rendered = function () {
};

Template.Logout.destroyed = function () {
};
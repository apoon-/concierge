/*****************************************************************************/
/* Admin: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.Admin.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.Admin.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
   activeGuests: function(){
    return Guests.find({active: true}).fetch();
   },
   inactiveGuests: function(){
    return Guests.find({active: false}).fetch();
   }
});

/*****************************************************************************/
/* Admin: Lifecycle Hooks */
/*****************************************************************************/
Template.Admin.created = function () {
};

Template.Admin.rendered = function () {
};

Template.Admin.destroyed = function () {
};
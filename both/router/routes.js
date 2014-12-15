/*****************************************************************************/
/* Client and Server Routes */
/*****************************************************************************/
Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});

/*
 *  Example:
 *  Router.route('/', {name: 'home'});
*/

Router.route('/', {name: 'home'});

Router.route('/new', {name: 'new'});

Router.route('/returning', {name: 'returning'});

Router.route('/guests/:_id', {
  name: 'guestDone',
  data: function() { return Guests.findOne(this.params._id); }
});
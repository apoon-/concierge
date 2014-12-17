/*****************************************************************************/
/* Returning: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.Returning.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */

   'submit form': function(e) {
     e.preventDefault();

     var guestName = $(e.target).find('[name=q1]').val();

     if (Guests.findOne({name: guestName})){
      var returnGuest = Guests.findOne({name: guestName});
      if (returnGuest.active === true){
        //guest found & active = logout
        Router.go('/logout/'+ returnGuest._id , {_id: returnGuest._id});
      } else {
        //guest found & inactive = returning login
        Router.go('/login/' + returnGuest._id, {_id: returnGuest.id});
      }
     } else {
      //guest not found
      Router.go('/new');
     }
   }
});

Template.Returning.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

/*****************************************************************************/
/* Returning: Lifecycle Hooks */
/*****************************************************************************/
Template.Returning.created = function () {
};

Template.Returning.rendered = function () {
  (function() {
    var formWrap = document.getElementById( 'fs-form-wrap' );

    [].slice.call( document.querySelectorAll( 'select.cs-select' ) ).forEach( function(el) {  
      new SelectFx( el, {
        stickyPlaceholder: false,
        onChange: function(val){
          document.querySelector('span.cs-placeholder').style.backgroundColor = val;
        }
      });
    } );
    new FForm( formWrap, {
    } );
  })();
};

Template.Returning.destroyed = function () {
};
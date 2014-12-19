/*****************************************************************************/
/* Signout: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.Signout.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
   'submit form': function (e){
      e.preventDefault();

      var guestName = $(e.target).find('[name=q1]').val();
      console.log(guestName);

      var activeGuest = Guests.findOne({name: guestName});

      if (activeGuest) {
        console.log('name:' + activeGuest.name);
        console.log('before: ' + activeGuest.active);
        var updateGuest = {
          active: false
        }
        _.extend(updateGuest, {
          endTime: new Date()
        })
        console.log('after: ' + activeGuest.active);

        Guests.update(activeGuest._id, {$set: updateGuest}, function(error) {
          if (error) {
            // display the error to the user
          } else {
            Router.go('/done/'+ activeGuest._id , {_id: activeGuest._id});
          }
        });

      } else {
        console.log("Guest not found");
        Router.go('/invalid');
      }
   }

});

Template.Signout.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

/*****************************************************************************/
/* Signout: Lifecycle Hooks */
/*****************************************************************************/
Template.Signout.created = function () {
};

Template.Signout.rendered = function () {
  (function() {
    var formWrap = document.getElementById( 'fs-form-wrap' );

    [].slice.call( document.querySelectorAll( 'select.cs-select' ) ).forEach( function(el) {  
      new SelectFx( el, {
        stickyPlaceholder: false,
        ctrlNavDots: false,
        onChange: function(val){
          document.querySelector('span.cs-placeholder').style.backgroundColor = val;
        }
      });
    } );
    new FForm( formWrap, {
      onReview : function() {
        classie.add( document.body, 'overview' ); // for demo purposes only
      }
    } );
  })();
};

Template.Signout.destroyed = function () {
};
/*****************************************************************************/
/* New: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.New.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */

   'submit form': function(e) {
     e.preventDefault();

     var video = document.querySelector('#video');
     var pic = document.querySelector('#canvas').getContext('2d').drawImage(video, 0, 0, 300, 225);

     form = e.target;

     console.log(form);

     var guest = {
       name: $(e.target).find('[name=q1]').val(),
       photo: canvas.toDataURL('image/png'),
       staff: $(e.target).find('.cs-selected span').html(),
       startTime: new Date(),
       active: true
     }

     //inserting guest in DB
     guest._id = Guests.insert(guest);

     //sending email to employee
     var guestEmployee = Employees.findOne({name: guest.staff});

     var emailContent = 'Hi ' + guestEmployee.name + '<br> Your Guest, ' + guest.name + ' has arrived at ' + guest.startTime + ' and is waiting in the lobby.<br><img src="' + guest.photo + '"/>'; 

     console.log(guestEmployee);

     console.log(emailContent);

     Meteor.call('sendEmail', 
                 guestEmployee.email,
                 'nurunconcierge@gmail.com',
                 'NurunConcierge: Your Guest ' + guest.name + ' is here!',
                 emailContent);

     Router.go('/guests/'+ guest._id , {_id: guest._id});
   }
});

Template.New.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
   employees: function(){
    return Employees.find({}, {sort: {name: 1}});
   }
});

/*****************************************************************************/
/* New: Lifecycle Hooks */
/*****************************************************************************/
Template.New.created = function () {
};

Template.New.rendered = function () {

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
      onReview : function() {
        classie.add( document.body, 'overview' ); // for demo purposes only
      }
    } );
  })();

  var picture = function (){
    var streaming = false,  //  used to watch for camera activation
    video = document.querySelector('#video'),
    canvas = document.querySelector('#canvas'),
    ctx = canvas.getContext('2d'),
    width = 300,
    height = 225;

    canvas.width = width;
    canvas.height = height;

    ctx.fillStyle="#F6F4F0";
    ctx.font="100px Arial";
    ctx.fillText("?",50,100);

    navigator.getMedia = ( navigator.getUserMedia ||
      navigator.webkitGetUserMedia ||
      navigator.mozGetUserMedia ||
      navigator.msGetUserMedia);

    // create ObjectURL from stream and play
    navigator.getMedia(
      {
        video: true,
        audio: false
      },
      function(stream) {
        if (navigator.mozGetUserMedia) {
          video.mozSrcObject = stream;
        } else {
          var vendorURL = window.URL || window.webkitURL;
          video.src = vendorURL.createObjectURL(stream);
        }
        video.play();
      },
      function(err) {
        console.log("An error occured! " + err);
        document.querySelector(".error").style.visibility = "visible";
      }
    );

    //  once camera is active
    video.addEventListener('canplay', function(ev){
      if (!streaming) {
        document.querySelector('#canvas').style.display = "none";
        document.querySelector('#video').style.display = "inline";
        video.width = width;
        video.height = height;
        streaming = true;
      }
    }, false);
  };

  picture();

};

Template.New.destroyed = function () {
};
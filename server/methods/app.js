Meteor.methods({
  sendEmail: function (to, from, subject, html) {
    check([to, from, subject, html], [String]);

    // Lets email sending be unblocking
    this.unblock();

    Email.send({
      to: to,
      from: from,
      subject: subject,
      html: html
    });
  },
  sendText: function(vistor, staff, dateString){
      twilio = Twilio('AC9ab4ee71b1e99c8da0cb1c99a9cd48c3', '83e32d6a9da338d86fdbba51d5329a43');
      twilio.sendSms({
        to: staff.phone, // Any number Twilio can deliver to
        from: '+16474962935', // A number you bought from Twilio and can use for outbound communication
        body: 'Hi ' +  staff.name + ' Your Guest, ' + vistor.name + ' has arrived at ' + dateString + ' and is waiting in the lobby.' // body of the SMS message
      }, function(err, responseData) { //this function is executed when a response is received from Twilio
        if (!err) { // "err" is an error received during the request, if any
          // "responseData" is a JavaScript object containing data received from Twilio.
          // A sample response from sending an SMS message is here (click "JSON" to see how the data appears in JavaScript):
          // http://www.twilio.com/docs/api/rest/sending-sms#example-1
          console.log(responseData.from); // outputs from number
          console.log(responseData.body); // outputs guest text
        } else {
          console.log(err);
        }
    });
  }
});
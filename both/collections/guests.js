/*
 * Add query methods like this:
 *  Visits.findPublic = function () {
 *    return Visits.find({is_public: true});
 *  }
 */
Guests = new Mongo.Collection('guests');

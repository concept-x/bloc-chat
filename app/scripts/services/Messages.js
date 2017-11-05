(function() {
  function Message($firebaseArray) {
    var Message = {};//establish Message object
    var ref = firebase.database().ref().child("messages");//reference to firebaseArray raw data
    var messages = $firebaseArray(ref);//turn into actual array called 'messages'; will include what's been made in firebase dashboard.

    Message.all = messages;//.all property of Message obj now referenced as "messages"

    Message.getByRoomId = function(roomId){//use getByRoomId method(?) on Message object
      return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
      //chain .orderByChild and .equalTo methods to firebaseArray ref to target a specific room by its roomID
    }

    return Message;//return the Message obj declared above
  }


  angular
    .module('blocChatEe')
    .factory('Message', ['$firebaseArray', Message]);
})();//Service is named Message; ['$firebaseArray' = dependency, Message function available to other svcs]
//IIFE = immediately invoked fn expression

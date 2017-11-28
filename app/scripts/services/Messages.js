(function() {
  function Message($firebaseArray, $cookies) {
    var Message = {};//establish Message object
    var ref = firebase.database().ref().child("messages");//reference to firebaseArray raw data
    var messages = $firebaseArray(ref);//turn into actual array called 'messages'; will include what's been made in firebase dashboard.

    Message.all = messages;//.all property of Message obj now referenced as "messages"

    Message.getByRoomId = function(roomId){//use getByRoomId method(?) on Message object
      return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
      //chain .orderByChild and .equalTo methods to firebaseArray ref to target a specific room by its roomID
    }
//logic: target the roomId as the parent node of messages
    Message.push = function(newMessage, activeRoom){
      //messages.$add(newMessage)
      console.log($cookies.get('blocChatCurrentUser'));
      console.log(newMessage);
      console.log(activeRoom);
    }//this command should be 'push' b/c from here we're pushing to the firebase array
    //  var sendMessage =  $firebaseArray(ref.orderByChild('roomId').equalTo(roomId).push(newMessage));
//send method logic...ckpoint 6
  /*  Message.send = function(newMessage){
      messages.$add(newMessage);
      newMessage.sentAt = firebase.database.ServerValue.TIMESTAMP;
    }*/

/*timestamp example
      var sessionsRef = firebase.database().ref("sessions");
      sessionsRef.push({
        startedAt: firebase.database.ServerValue.TIMESTAMP
      });
//timestamp
*/

      //4 properties: content, un, roomId, timestamp

    return Message;//return the Message obj declared above
  }


  angular
    .module('blocChatEe')
    .factory('Message', ['$firebaseArray', '$cookies',  Message]);
})();//Service is named Message; ['$firebaseArray' = dependency, Message function available to other svcs]
//IIFE = immediately invoked fn expression

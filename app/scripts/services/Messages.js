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
/*
    var messageObject = {
      content: newMessage,
      roomId: home.currentRoom$id,
      user: 'blocChatCurrentUser',
      sentAt: Date.now().toDateString()
    }
    console.log(messageObject);
    messages.$add(messageObject);
    */

    Message.push = function(newMessage, activeRoom, blocChatCurrentUser,  userName){
      messages.$add(newMessage);//works! writes to firebase!!
      console.log($cookies.get('blocChatCurrentUser'));
      console.log(newMessage);
      console.log(home.currentRoom$id);
//error: home is not defined
    }

    //this command should be 'push' b/c from here we're pushing to the firebase array
    // can we use messages.add(message) to write to fb like we did for new rooms?
    /*Obj.add = function(room) {
      rooms.$add(room);}*/
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

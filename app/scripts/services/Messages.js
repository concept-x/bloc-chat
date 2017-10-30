(function() {
  function Message($firebaseArray) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");//reference to firebaseArray raw data
    var messages = $firebaseArray(ref);//turn into actual array called 'messages'; will include what's been made in firebase dashboard.

    Message.all = messages;

    Message.getByRoomId = function(roomId){
      return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
    }

    return Message;

  /*  getRoomMessages: function (room) {
 		// logic to display room messages - when a particular room is opened, its messages should display in the view
  }*/
  }

  angular
    .module('blocChatEe')
    .factory('Message', ['$firebaseArray', Message]);
})();

/*Room.js below*
(function() {//Room.js is a service
    function Room($firebaseArray) {//firebaseArray is a dependency
         var Obj = {};
         var ref = firebase.database().ref().child("rooms");//reference to firebaseArray raw data
         var rooms = $firebaseArray(ref);//turn into actual array called 'rooms'; will include room1, room2, etc.

         Obj.all = rooms;//attach 'all' property to Obj; call it 'rooms'
         //will use ng-repeat later to iterate thru all the actual rooms in the array

         Obj.add = function(room) {
           rooms.$add(room);//firebase $add method; adding new room to array
         //end $add function
}
         return Obj;//allows us to access all rooms from anywhere Room gets injected
       }

       angular
           .module('blocChatEe')
           //**insert '$uibModal' below after $firebaseArray?*****
           .factory('Room', ['$firebaseArray', Room]);//'factory' = recipe
      //Service is named Room; [firebaseArray = dependency, Room function available to other svcs]
    })();//IIFE = immediately invoked fn expression
*/

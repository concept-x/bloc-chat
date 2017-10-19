(function() {//Room.js is a service
    function Room($firebaseArray) {//firebaseArray is a dependency
         var Obj = {};
         var ref = firebase.database().ref().child("rooms");//reference to firebaseArray raw data
         var rooms = $firebaseArray(ref);//turn into actual array called 'rooms'; will include room1, room2, etc.

         Obj.all = rooms;//attach 'all' property to Obj; call it 'rooms'
         //will use ng-repeat later to iterate thru all the actual rooms in the array

         Obj.add = function(room) {
           //use firebase $add method here
           rooms.$add(room);
         //end $add function

         return Obj;//allows us to access all rooms from anywhere Room gets injected
       }
};
       angular
           .module('blocChatEe', 'angularModals')
           //**insert '$uibModal' below after $firebaseArray?*****
           .factory('Room', ['$firebaseArray', '$uibModalInstance', '$uibModal', Room]);//'factory' = recipe
      //Service is named Room; [firebaseArray = dependency, Room function available to other svcs]
    })();//IIFE = immediately invoked fn expression

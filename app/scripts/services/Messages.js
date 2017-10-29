(function() {
  function Message($firebaseArray) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");

    return Message;
  }

  angular
    .module('blocChatEe')
    .factory('Message', ['$firebaseArray', Message]);
})();

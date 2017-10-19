(function() {//interface between view (home.html) and service (Room.js)
    function HomeCtrl(Room) {
      this.rooms = Room.all;
      this.greeting = "Bloc Chat Home Page!!!";
      //everything made in this controller must be inside this function, or else no accessibility
    }

    angular
        .module('blocChatEe', 'angularModals')
        .controller('HomeCtrl', ['Room', '$firebaseArray', '$uibModalInstance', '$uibModal', HomeCtrl]);
        //inject UI Bootstrap into dep. array...how?? And what do we call it?
})();

//Create 'room' argument passed into rooms.add method (in Room.js) here. How??

//Below is the entirety of Carrie's HomeCtrl.js file.
(function() {
    function HomeCtrl() {
        this.greeting = 'let\'s make some modals!'
    }
    angular
        .module('angularModals')//need a new module called angularModals
        .controller('HomeCtrl', [HomeCtrl])
})()

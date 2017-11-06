(function() {
    function config($locationProvider, $stateProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
             });

        $stateProvider
            .state('home', {
                url: '/',
                controller: 'HomeCtrl as home',
                templateUrl: '/templates/home.html'
            })
    }
//below fn does ModalCtrl for username; don't need separate file.
    function BlocChatCookies($cookies, $uibModal) {
        var currentUser = $cookies.get('blocChatCurrentUser');//currentUser var equals corresponding value in $cookie when .get method is called on key 'blocChatCurrentUser'
        if (!currentUser || currentUser === '') {//if no current user or current user = empty string

//create UnInstanceCtrl obj here
          var UnModalInstance = $uibModal.open({// Make modal window pop up
            currentUser: $cookies.put('blocChatCurrentUser'),//use put() to store username as value for key 'blocChatCurrentUser'
          templateUrl: '/templates/username.html',//link to modal template
          controller: 'UnInstanceCtrl as UnInstanceCtrl'//links controller to username.html template
        });

        UnModalInstance.result.then(function(currentUser){//call .result.then on the entered string value (username) in the username modal window
        })
        }
      }//pulled from first code example in bc cp5
      //use modalctrl.js to look for guidance in inserting fn execution above; see lines 23-34 of modalctrl.js.

/*Lines 23-34 of ModalCtrl.js
var modalInstance = $uibModal.open({//modals have only one method: open, but...
    templateUrl: '/templates/modal.html',//...they have lots of parameter options
    controller: 'ModalInstanceCtrl as modalInstance'

})
console.log('modal opened')//msg to check functionality

modalInstance.result.then(function(room) {//.result = whatever user passed into text field/new room name, aka 'promise'
//.then = promise handler
    Room.add(room)//referencing Room.js service, calling 'add' method, passing in room as parameter
    console.log(Room.all)
})
*/


     angular
         .module('blocChatEe', ['ui.router', 'ui.bootstrap', 'firebase', 'ngCookies'])
         .config(config)
         .run(['$cookies', '$uibModal', BlocChatCookies]);//is this how we make the fn execute on page load?
 })();

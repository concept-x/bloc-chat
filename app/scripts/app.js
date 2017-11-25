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

          templateUrl: '/templates/username.html',//link to modal template
          controller: 'UnInstanceCtrl as UnInstanceCtrl'//links controller to username.html template
        });

        UnModalInstance.result.then(function(currentUser){//call .result.then on the entered string value (username) in the username modal window
          $cookies.put('blocChatCurrentUser', currentUser);//use put() to store username as value for key 'blocChatCurrentUser'. See angular documentation re: both key *and* value needed as parameters.
        })
        }
      }


     angular
         .module('blocChatEe', ['ui.router', 'ui.bootstrap', 'firebase', 'ngCookies'])
         .config(config)
         .run(['$cookies', '$uibModal', BlocChatCookies]);//is this how we make the fn execute on page load?
 })();

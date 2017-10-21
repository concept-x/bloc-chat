(function() {
    function config($locationProvider, $stateProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
             });

/*
        $stateProvider
              .state('modal', {
                url: '/',
                controller: 'ModalCtrl as modal',
                templateUrl: '/templates/modal.html'
              })
  */
  //adding above made modal.html show up; home (showing chat rooms) = gone
        $stateProvider
            .state('home', {
                url: '/',
                controller: 'HomeCtrl as home',
                templateUrl: '/templates/home.html'
            });
    }

     angular
         .module('blocChatEe', ['ui.router', 'ui.bootstrap.modal', 'firebase'])
         .config(config);
 })();
//above: my file; below: found on interwebs
/*
var app = angular.module("MyApp", ["ui.bootstrap.modal"]);

app.controller("MyCtrl", function($scope) {

  $scope.open = function() {
    $scope.showModal = true;
  };

  $scope.ok = function() {
    $scope.showModal = false;
  };

  $scope.cancel = function() {
    $scope.showModal = false;
  };

});
*/

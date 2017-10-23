//Controller to open modal

(function() {
    /*
        our ModalCtrl listens for instructions from the button
        in home.html. once it gets instructions from the view, it
        reaches out to the $uibModal service and calls the service's
        open() method, passing optional values to it in a javascript
        object.
    */
    function ModalCtrl($uibModal) {//$uibModal = service to open modal windows
  //    this.greeting = 'let\'s make some modals!'; **don't need; keep greeting in HomeCtrl?**
        this.open = function() {//'this' = ModalCtrl or $uibModal??
            /*
                in the future, we'll need to do something with this
                modalInstance variable in the ModalCtrl, but for now,
                we won't be doing anything with it.
                we use the $uibModal service to open up our modal and
                to link our modal.html template with our
                ModalInstanceCtrl.
            */

            var modalInstance = $uibModal.open({//modals have only one method: open, but...
                templateUrl: '/templates/modal.html',//...they have lots of parameter options
                controller: 'ModalInstanceCtrl as modalInstance'

            })
            console.log('modal opened')//msg to check functionality

            modalInstance.result.then(function(room) {
                Room.createNewRoom(room)
                console.log(Room.all)
            })
        }

    }

    angular
        .module('blocChatEe')
        .controller('ModalCtrl', ['$uibModal', ModalCtrl])
})();

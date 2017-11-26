//Controller for new message input

(function() {//starting parenthese needed so this compiles as a fn expression, not a declaration.
    /*
        our NewMsgCtrl listens for instructions from the 'Post!' button
        in home.html. once it gets instructions from the view, it
        reaches out to the []$uibModal] service and calls the service's
        open() method, passing optional values to it in a javascript
        object.
    */
    function NewMsgCtrl($uibModal, Room) {//$uibModal = service to open modal windows

        this.open = function() {//'this' = controller
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

            modalInstance.result.then(function(room) {//.result = whatever user passed into text field/new room name, aka 'promise'
//.then = promise handler
                Room.add(room)//referencing Room.js service, calling 'add' method, passing in room as parameter
                console.log(Room.all)
            })
        }

    }

    angular
        .module('blocChatEe')
        .controller('ModalCtrl', ['$uibModal', 'Room', ModalCtrl])
})();

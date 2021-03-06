//Controller to close/cancel modal

(function() {
    /*
        this controller listens for instructions from inside our modal,
        similar to how ModalCtrl listens to instructions from outside
        of it. when the cancel button is clicked inside of modal.html,
        this.cancel() is executed, which calls the $uibModalInstance
        service and dismisses the modal.
    */

    function ModalInstanceCtrl($uibModalInstance) {
        this.cancel = function() {//.cancel quits modal without anything entered
            $uibModalInstance.dismiss('dismiss')//'dismiss' parameter to close modal
        }

        this.ok = function() {
            $uibModalInstance.close(this.room)
        }//.close takes the string input and passes it back to ModalCtrl
    }

    angular
        .module('blocChatEe')
        .controller('ModalInstanceCtrl', ['$uibModalInstance', ModalInstanceCtrl])
        //('modal name', ['dependency array', ModalInstanceCtrl avail to other svcs ])
})()

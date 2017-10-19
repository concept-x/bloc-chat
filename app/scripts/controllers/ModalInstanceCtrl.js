//Controller to close/cancel modal

(function() {
    function ModalInstanceCtrl($uibModalInstance) {
        this.cancel = function() {
            $uibModalInstance.dismiss('dismiss')//'dismiss' parameter to close modal
        }
    }

    angular
        .module('angularModals')
        .controller('ModalInstanceCtrl', ['$uibModalInstance', ModalInstanceCtrl])
        //('modal name', ['dependency array', ModalInstanceCtrl avail to other svcs ])
})()

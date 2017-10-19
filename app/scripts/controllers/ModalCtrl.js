//Controller to open modal

(function() {
    function ModalCtrl($uibModal) {//$uibModal = service to open modal windows
        this.open = function() {//'this' = ModalCtrl or $uibModal??
            var modalInstance = $uibModal.open({//modals have only one method: open, but...
                templateUrl: '/templates/modal.html',//...they have lots of parameter options
                controller: 'ModalInstanceCtrl as modalInstance'
            })
            console.log('modal opened')//msg to check functionality
        }
    }
    angular
        .module('angularModals')
        .controller('ModalCtrl', ['$uibModal', ModalCtrl])
})()

(function() {
    /*
        this controller listens for instructions from inside our modal,
        similar to how ModalCtrl listens to instructions from outside
        of it.
    */

    function UnInstanceCtrl($uibModalInstance) {
//do I need uibUnModalInstance instead of uibModalInstance?
        this.ok = function(userName) {
            $uibModalInstance.close(this.userName)
        }//.close takes the string input and passes it back to ModalCtrl
    }
//***Make 'ok' button grayed out until something is entered in un field
    angular
        .module('blocChatEe')
        .controller('UnInstanceCtrl', ['$uibModalInstance', UnInstanceCtrl])
        //('modal name', ['dependency array', ModalInstanceCtrl avail to other svcs ])
})()

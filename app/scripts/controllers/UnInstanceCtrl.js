(function() {
    /*
        this controller listens for instructions from inside our modal,
        similar to how ModalCtrl listens to instructions from outside
        of it.
    */

    function UnInstanceCtrl($uibModalInstance) {
//needs to be uibModalInstance b/c it's a built-in (b/c of $)
        this.ok = function(userName) {
          console.log(this.userName);//to check functionality
            $uibModalInstance.close(this.userName)
        }//.close takes the string input and passes it back to ModalCtrl
    }
//***Make 'ok' button grayed out until something is entered in un field
    angular
        .module('blocChatEe')
        .controller('UnInstanceCtrl', ['$uibModalInstance', UnInstanceCtrl])
        //('modal name', ['dependency array', ModalInstanceCtrl avail to other svcs ])
})()

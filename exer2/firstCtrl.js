module.controller("firstCtrl", FirstCtrl)

//let value1 

// DI dependency injection - IOC
function FirstCtrl($scope) {   
        this.message = "Hello I am First controller in first module"
    }
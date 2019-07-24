module.controller("classCtrl", ClassCtrl)

//let value1 

// DI dependency injection - IOC
function ClassCtrl($scope) {
    $scope.age = ''
    $scope.name = ''
    $scope.email = ''
    $scope.getClass = function() {
        if ($scope.name == '' && $scope.email == '' && $scope.age == ''){
            return 'empty'
        }
        if ($scope.name != '' && $scope.email != '' && $scope.age != '') {
            return 'notEmpty'
        }
        
        if ($scope.name != '' || $scope.email == '' || $scope.age == '') {
            return 'partEmpty'
        }
       
        else {
            return 'other'
        }

    }
   
}
   

class Mobile {
    constructor({model, color, price,editind,readind}) {
        this.model = model
        this.color = color
        this.price = price
        this.editind=editind;
        this.readind=readind;
    }
}
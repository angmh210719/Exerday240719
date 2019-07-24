const secondModule = angular.module("mySecondModule", [])

secondModule.controller("helloSecondController", HelloSecondCtrl);

function HelloSecondCtrl() {
    this.message = "Hello I am second controller in second module"
}
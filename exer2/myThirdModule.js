const thirdModule = angular.module("myThirdModule", [])

thirdModule.controller("helloThirdController", HelloThirdCtrl);

function HelloThirdCtrl() {
    this.message = "Hello I am third controller in third module"
}
function ContactController(){
  var vm = this;
  this.name = "Dom";
  this.email = "dom@example.com";
  this.phone = "1112223333";

  this.changeName = function (){
    vm.name = "DomP";
  }
}

angular
  .module('app')
  .controller('ContactController', ContactController);

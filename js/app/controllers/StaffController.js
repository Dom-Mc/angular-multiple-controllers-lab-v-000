function StaffController(){
  this.name = "jake";
  this.phone = "1112223333";
  this.email = "j@example.com";
}

angular
  .module('app')
  .controller('StaffController', StaffController);

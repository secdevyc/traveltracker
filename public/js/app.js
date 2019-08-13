const app = angular.module('TravelApp', [])

app.controller('MainController', ['$http', function($http) {
  this.createForm = {};

  this.createTravel = () => {
    $http({
      method:'POST',
      url:'/traveltracker',
      data: this.createForm
    }).then(response => {
      console.log(response.data);
    }, error => {
      console.log(error);
    })
  }//end createTravel()
}])// end controller

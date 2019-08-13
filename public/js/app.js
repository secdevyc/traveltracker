const app = angular.module('TravelApp', [])

app.controller('MainController', ['$http', function($http) {
  this.createForm = {};

  this.createTravel = () => {
    $http({
      method:'POST',
      url:'/traveltracker',
      data: this.createForm
    }).then(response => {
      this.getTravels();
    }, error => {
      console.log(error);
    })
  }//end createTravel()
  //============================
//======     GET      ========
//============================
      this.getTravels = () => {
    $http({
        method: 'GET',
        url: '/traveltracker',
    }).then((response) => {
        this.travels = response.data
    }, (error) => {
        console.log(error);
    })
} // end getTravels();
//============================
//======     DELETE   ========
//============================
      this.deleteTravel = (travel) => {
          $http({
              method: "DELETE",
              url: "/traveltracker/" + travel._id
          }).then((response) => {
              this.getTravels();
          }, (error) => {
              console.log(error);
          })
      }

this.getTravels(); //retrieving db on page load
}])// end controller

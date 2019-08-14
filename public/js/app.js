const app = angular.module('TravelApp', [])

app.controller('MainController', ['$http', function($http) {
  this.createForm = {};
  this.updatedTravel = {};
  this.indexOfShowInfo = null;
  this.indexOfShowEditForm = null;

//============================
//======     PUT      ========
//============================
    this.updateTravel = (travel) => {
      $http({
          method: "PUT",
          url: "/traveltracker/" + travel._id,
          data: this.updatedTravel
      }).then((response) => {
          this.indexOfShowEditForm = null;
          this.getTravels();
      }, (error) => {
          console.log(error);
      })
    } //end updateTravel();
  //============================
  //======     CREATE   ========
  //============================
  this.createTravel = () => {
    $http({
      method:'POST',
      url:'/traveltracker',
      data: this.createForm
    }).then(response => {
      this.createForm = {};
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
        console.log(response.data);
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
      } //end deleteTravel();

this.getTravels(); //retrieving db on page load
}])// end controller

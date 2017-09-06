const testApp = angular.module('testApp', []);

testApp.controller('testController', $scope => {
  $scope.testData= [
    {
      name: "Brett",
      type: "Homebrewer"
    },
    {
      name: "Pizza",
      type: "Hawaiian"
    }
  ];
});
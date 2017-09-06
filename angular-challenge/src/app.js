const testApp = angular.module('testApp', []);

testApp.controller('testController', $scope => {
  const success = data => {
    console.log(data);
    $scope.testData= [
      {
        name: secrets.consumerSecret,
        type: secrets.consumerKey
      },
      {
        name: "Pizza",
        type: "Hawaiian"
      }
    ];
  };
  
  const error = (data, textStatus) => console.log(data);
  
  const getTweet = $.ajax({
    headers: {
      Authorization: 'Bearer ' + secrets.accessToken
    },
    url: 'https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=jackdriper&count=1&callback=?',
    type: 'GET',
    dataType: 'jsonp',
    data: {},
    error,
    success
  });
});
var thisApp = angular.module('demo', []);




thisApp.controller('demoCtrl', ['$scope', function($scope){
// view
	$scope.inputVisable = 'visable';
  $scope.outputVisable  = '';
  $scope.gender = '';

// gender start
  $scope.male = function(){
    $scope.heshe = 'he';
    $scope.girlboy = 'boy';
  }; // male
  $scope.female = function(){
    $scope.heshe = 'she';
    $scope.girlboy = 'girl';
  }; // female

// submit start
  $scope.submit = function(){
   //view
    $scope.inputVisable = '';
    $scope.outputVisable = 'visable';


  }; // submit end

// reset start
  $scope.reset = function(){
  // view
    $scope.inputVisable = 'visable';
    $scope.outputVisable = '';
  // data
    $scope.data.handle = '';
    $scope.data.adjective = '';
    $scope.data.when = '';
    $scope.data.where = '';
    $scope.data.place = '';
    $scope.data.when = '';
    $scope.data.where2 = '';
    $scope.data.job = '';
    $scope.data.adjective2 = '';
    $scope.data.alcohol = '';
    $scope.data.adjective3 = '';
  }; // reset end





  // switch start
    $scope.switch = function(){
    if ($scope.inputVisable){
      $scope.inputVisable = '';
      $scope.outputVisable = 'visable';
    } else {
      $scope.inputVisable = 'visable';
      $scope.outputVisable = '';
    }
  }; // swtch end
}]);
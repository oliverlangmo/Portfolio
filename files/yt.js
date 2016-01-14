var app1 = angular.module('demoApp', [])
.config(function($httpProvider) {
	$httpProvider.defaults.useXDomain = true;
}) /// YouTube App


app1.controller('MyController', function($scope, $http, $sce) {

  $scope.demo_show = '';

  $scope.show_demo = function () { 
    $scope.demo_show = 'demo_show';
  };

  $scope.hide_demo = function () { 
    $scope.demo_show = '';
  };
	
  $scope.embedUrl = "http://www.youtube.com/embed/";  /// <--- this one here!!!!!
		
	$scope.trustSrc = function(src) {
	  return $sce.trustAsResourceUrl(src);
	};//strict contextual escaping

	$scope.searchYouTube = function(keyword) {
			
  	$scope.keyword = keyword;

	  var url = "https://www.googleapis.com/youtube/v3/search";
	  var request = {
		  key: "AIzaSyBIT2homLIII4fhIFO1ePwQDKA_rm2Ym30",
		  part: "snippet",
		  maxResults: 3,
		  order: "viewCount",
		  q: keyword,
		  type: "video",
		  videoEmbeddable: true,
	  };//search parameters

	  $http({
		  method: 'GET',
		  url: url,
		  params: request
	  })
	  .success(function(data) {
		  $scope.results = data.items;
	  })
	  .error(function() {
		  alert('error');
	  });
  };

}); /// Youtube Controller





app1.controller('demoCtrl', ['$scope', function($scope){
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

$(document).ready(function() {
  $('.ryu').mouseenter(function() {
    $('.ryu-still').hide();
    $('.ryu-ready').show();
  })
  .mouseleave(function() {
    $('.ryu-ready').hide();
    $('.ryu-still').show();
  })
  .mousedown(function() {
  playHadouken();    
  $('.ryu-ready').hide();
  $('.ryu-throwing').show();
  $('.hadouken').finish().show()
  .animate(
    {'left': '300px'},
    500,
    function() {
      $(this).hide();
      $(this).css('left', '0px');
    }
  );
})//Ryu throws haduken
  .mouseup(function() {
    $('.ryu-throwing').hide();
    $('.ryu-ready').show();
  });//Ryu goes back to ready stance
  
  
  $(document).keydown(function(e){
    if (e.keyCode == 88) {
      $(".ryu-cool").show();
      $(".ryu-ready").hide();
    }
  }).keyup(function(e) {
    if (e.keyCode == 88) {
      $('.ryu-ready').show();
      $('.ryu-cool').hide();
    }
  }
 );//Ryu's cool pose
 

function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}
});
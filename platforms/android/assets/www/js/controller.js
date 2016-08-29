// JavaScript Document
angular.module('starter.controllers', [])
.controller('MainCtrl', function($scope, $ionicSideMenuDelegate,$http,$state) {
  $scope.attendees = [
    { firstname: 'Nicolas', lastname: 'Cage' },
    { firstname: 'Jean-Claude', lastname: 'Van Damme' },
    { firstname: 'Keanu', lastname: 'Reeves' },
    { firstname: 'Steven', lastname: 'Seagal' }
  ];
  
  $scope.toggleLeft = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };
  
  	
})

.controller('CheckinCtrl', function($scope,$state) {
	$scope.showtask = function(){
		$state.go('eventmenu.tasks');
	}
})

.controller('tasksCtrl', function($scope,$state) {
	$scope.showreview = function(){
		$state.go('eventmenu.review');
	}
	
	$scope.showedit = function(){
		$state.go('eventmenu.edit');
	}
	
	$scope.showtranslate = function(){
		$state.go('eventmenu.translate');
	}
})

.controller('reviewCtrl', function($scope,$state) {
	$scope.showreviewdetail = function(val){
		console.log(val);
		if(val == 1){
			$state.go('eventmenu.reviewdetail');
		}
		else{
			$state.go('eventmenu.reviewdetail1');
		}
		
	}
})

.controller('translateCtrl', function($scope,$state) {
	$scope.showtranslatedetail = function(){
		$state.go('eventmenu.translatedetail1');
	}
})

.controller('editCtrl', function($scope,$state) {
	$scope.showeditdetail1 = function(){
		$state.go('eventmenu.editdetail1');
	}
})

.controller('reviewdetailCtrl', function($scope,$state) {
	var val1 = localStorage.getItem("rbutton1");
	var val2 = localStorage.getItem("rbutton2");
	
	$scope.reviewtitle = "Article A by John Smith";
	
	if(val1 != 1)$scope.buttoncolor11 = "button-assertive";
	else $scope.buttoncolor11 = "button-energized";
	if(val2 != 1)$scope.buttoncolor12 = "button-assertive";
	else $scope.buttoncolor12 = "button-balanced";
	
	$scope.changecolor = function(val){
		
		if(val == 11){
			$scope.buttoncolor11 = "button-energized";
			localStorage.setItem("rbutton1",1);
		}
		if(val == 12){
			$scope.buttoncolor12 = "button-balanced";
			localStorage.setItem("rbutton2",1);
		}
	}
})
.controller('reviewdetail1Ctrl', function($scope,$state) {
	var val1 = localStorage.getItem("r1button1");
	var val2 = localStorage.getItem("r1button2");
	
	$scope.reviewtitle = "Article B by Fred Malton";
	
	if(val1 != 1)$scope.buttoncolor11 = "button-assertive";
	else $scope.buttoncolor11 = "button-energized";
	if(val2 != 1)$scope.buttoncolor12 = "button-assertive";
	else $scope.buttoncolor12 = "button-balanced";
	
	
	$scope.changecolor = function(val){
		if(val == 11){
			$scope.buttoncolor11 = "button-energized";
			localStorage.setItem("r1button1",1);
		}
		if(val == 12){
			$scope.buttoncolor12 = "button-balanced";
			localStorage.setItem("r1button2",1);
		}
	}
})
.controller('translatedetail1Ctrl', function($scope,$state) {
	var val1 = localStorage.getItem("tbutton1");
	var val2 = localStorage.getItem("tbutton2");
	
	$scope.reviewtitle = "Article C by Jesse Stuart";
	
	if(val1 != 1)$scope.buttoncolor11 = "button-assertive";
	else $scope.buttoncolor11 = "button-energized";
	if(val2 != 1)$scope.buttoncolor12 = "button-assertive";
	else $scope.buttoncolor12 = "button-balanced";
	
	$scope.changecolor = function(val){
		if(val == 11){
			$scope.buttoncolor11 = "button-energized";
			localStorage.setItem("tbutton1",1);
		}
		if(val == 12){
			$scope.buttoncolor12 = "button-balanced";
			localStorage.setItem("tbutton2",1);
		}
	}
})
.controller('editdetail1Ctrl', function($scope,$state) {
	var val1 = localStorage.getItem("ebutton1");
	var val2 = localStorage.getItem("ebutton2");
	
	$scope.reviewtitle = "Article D	by Alfredo Colli";
	
	if(val1 != 1)$scope.buttoncolor11 = "button-assertive";
	else $scope.buttoncolor11 = "button-energized";
	if(val2 != 1)$scope.buttoncolor12 = "button-assertive";
	else $scope.buttoncolor12 = "button-balanced";
	
	$scope.changecolor = function(val){
		if(val == 11){
			$scope.buttoncolor11 = "button-energized";
			localStorage.setItem("ebutton1",1);
		}
		if(val == 12){
			$scope.buttoncolor12 = "button-balanced";
			localStorage.setItem("ebutton2",1);
		}
	}
})

.controller('AttendeesCtrl', function($scope) {
  
  $scope.activity = [];
  $scope.arrivedChange = function(attendee) {
    var msg = attendee.firstname + ' ' + attendee.lastname;
    msg += (!attendee.arrived ? ' has arrived, ' : ' just left, '); 
    msg += new Date().getMilliseconds();
    $scope.activity.push(msg);
    if($scope.activity.length > 3) {
      $scope.activity.splice(0, 1);
    }
  };
  
})
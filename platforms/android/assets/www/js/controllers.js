angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('offersCtrl', function($scope,$state,$cordovaContacts) {
	$scope.getContactList = function() {
		console.log("sdf");
		$cordovaContacts.find({filter: ''}).then(function(result) {
			$scope.contacts = result;
		}, function(error) {
			console.log("ERROR: " + error);
		});
	}
})

.controller('offers_detailCtrl', function($scope,$stateParams,$http) {
	$scope.origin = $stateParams.origin;
	$scope.quantity = $stateParams.quantity;
	$scope.thickness = $stateParams.thickness;
	$scope.width = $stateParams.width;
	$scope.length = $stateParams.length;
	$scope.currency = $stateParams.currency;
	$scope.price = $stateParams.price;
	$scope.title = $stateParams.title;
})

.controller('contactCtrl', function($scope) {
	$scope.mapCreated = function(map) {
		$scope.map = map;
	};
	
	$scope.centerOnMe = function () {
		console.log("Centering");
		if (!$scope.map) {
		  return;
		}
	
		$scope.loading = $ionicLoading.show({
		  content: 'Getting current location...',
		  showBackdrop: false
		});
	
		navigator.geolocation.getCurrentPosition(function (pos) {
		  console.log('Got pos', pos);
		  $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
		  $scope.loading.hide();
		}, function (error) {
		  alert('Unable to get location: ' + error.message);
		});
	};
})

.controller('emailCtrl', function($scope,$state,$http,$ionicPopup) {
	$scope.user = {
			name : '',
			email : '',
			website : '',
			comments : ''
	};
	
	$scope.sendemail = function(user){
		var name = user.name;
		var email = user.email;
		var website = user.website;
		var comments = user.comments;
		
		var data_parameters = "cont_name="+name+ "&cont_mail="+email+ "&cont_url="+website+ "&cont_message="+comments;
		$http.post("http://"+globalip+"/email.php",data_parameters, {
			headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
		})
		.success(function(response){
			if(response[0].status == "Y"){
				$ionicPopup.show({
				  template: '',
				  title: 'Email sent successfully.',
				  scope: $scope,
				  buttons: [
					{
					  text: 'Ok',
					  type: 'button-assertive'
					},
				  ]
				})
			}
		});
	}
});

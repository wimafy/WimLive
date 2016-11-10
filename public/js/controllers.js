var wimControllers = angular.module('wimControllers', ['ngFileUpload']);

var newwiminvitedfriends = [];
var signupinterestslist = [];

wimControllers.constant('moment', moment);

wimControllers.controller('LoginController', [
    'userService',
    '$location',
    '$scope',
    '$http',
    'moment',
    function (userService, $location, $scope, $http, moment) {

	$scope.login = function() {
        userService.login(
            $scope.username, $scope.password,
            function(response){
                $location.path('/');
            },
            function(response){
                alert('Something went wrong with the login process. Try again later!');
            }
        );
    }

    $scope.username = '';
    $scope.password = '';

    if(userService.checkIfLoggedIn())
        $location.path('/');

}]);

wimControllers.controller('SignupController', [ 'userService', '$scope', '$http', '$location', function (userService, $scope, $http, $location) {
	function validateEmail(email) {
		var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(email);
	}

    $scope.signupselectinterests = function(interestID) {
        //alert(interestID);



         //console.log("Task Id is "+IDnumber);

        var selecteddiv = document.getElementById('interstID' + interestID);
        var actualinterestID = 'interestID' + interestID;
        //alert(actualinterestID);

        if(document.getElementById(actualinterestID).style.backgroundColor == "#5cb85c" || document.getElementById(actualinterestID).style.backgroundColor == "rgb(92, 184, 92)"){
            document.getElementById(actualinterestID).style.backgroundColor = "#FAFAFA";
            document.getElementById(actualinterestID).style.color = "black";
            var newwiminvtefriendsindex = signupinterestslist.indexOf(interestID);
            //alert(newwiminvtefriendsindex);
            signupinterestslist.splice(newwiminvtefriendsindex, 1);
            //alert(signupinterestslist);


        }else{
            document.getElementById(actualinterestID).style.backgroundColor = "#5cb85c";
            document.getElementById(actualinterestID).style.color = "white";
            signupinterestslist.push(interestID);
            //alert(signupinterestslist);
        }


    }

	$scope.signup = function(file) {
		$scope.birthday = $scope.birth_year + '-' + $scope.birth_month + '-' + $scope.birth_day;

		if ($scope.username == ""){ //todo, let user know if username is taken
			alert("Please enter your username.");
		}
		else if ($scope.password == "" || $scope.password_confirmation == ""){
			alert("One of your passwords was not entered.");
		}
		else if ($scope.password_confirmation != $scope.password)
		{
			alert("Your passwords do not match.");
		}
		else if ($scope.password.length < 8){
			alert("Your password is too short.");
		}
		/*else if (!(validateEmail($scope.email))){
			alert("Please enter a valid email.");
		}
		*/
		else if ($scope.FirstName == ""){
			alert("Please enter your first name.");
		}
		else if ($scope.LastName == ""){
			alert("Please enter your last name.");
		}
		/*else if ($scope.birth_year == null || $scope.birth_month == null || $scope.birth_day == null){
			alert("Please enter your birthday.");
		}
		*/
		else if ($scope.gender == ""){
			alert("Please enter your gender.");
		}
		/*else if ($scope.city == ""){
			alert("Please enter your city.");
		}
		*/
		else if ($scope.state == ""){
			alert("Please enter your state.");
		}
		else{
			userService.signup(
				$scope.username, $scope.password, $scope.FirstName, $scope.LastName, $scope.gender, $scope.interests, file,
				function(response){
					alert('Great! You are signed up! Welcome to WIM(afy), ' + $scope.FirstName + '!');
					$location.path('/');
				},
				function(response){
					alert('Something went wrong with the signup process. Try again later.');
				}
			);
		}
	}

	$scope.username = '';
	$scope.password = '';
	$scope.password_confirmation = '';
	//$scope.email = '';
	$scope.FirstName = '';
	$scope.LastName = '';
	//$scope.birthday = '';
	$scope.gender = '';
	//$scope.city = '';
	//$scope.state = '';
	$scope.interests = '';
	//$scope.bio = '';
	file = '';


	if(userService.checkIfLoggedIn())
		$location.path('/');

}]);

wimControllers.controller('ProfileController', ['$scope', '$log', '$location', 'userService', 'profileService', '$http', function($scope, $log, $location, userService, profileService, $http){


    $scope.isClicked = false;

	$scope.logout = function(){
		userService.logout();
		$location.path('/login');
        //alert("1");

        document.getElementById("ngviewdiv").classList.add('ngviewtransitionout');
        document.getElementById("fullpage2myprofile").classList.remove('pagetransitionIN');
        document.getElementById("fullpage2myprofile").classList.add('pagetransitionOUT');

           $(document).ready(function(){
               document.getElementById("loadinggiflevel1").classList.add('killopacity');
               document.getElementById("loadinggiflevel1").classList.remove('loadinggifOUTlevel1');

            });


      setTimeout(function(){
          document.getElementById("loadinggiflevel1").classList.remove('pagetransitionIN');
          document.getElementById("loadinggiflevel1").classList.remove('killopacity');
      }, 100);
	}

	if(!userService.checkIfLoggedIn())
		$location.path('/login');

	$scope.refresh = function(){
		profileService.index(function(response){
			$scope.profile = response;
		}, function(){
			alert('Some errors occurred while communicating with the service. Try again later.');
		});

	}

	$scope.profile = [];
	$scope.refresh();

  $scope.customers=  [
            { name:'John Smith', city:'Phoenix'},
            { name:'John Doe', city:'New York'},
            { name:'Jane Doe', city:'San Francisco'}
          ];

}]);

wimControllers.controller('UserListController', ['$scope', '$location', 'userService', 'relationshipService', '$http', function ($scope, $location, userService, relationshipService, $http) {

	$scope.logout = function(){
		userService.logout();
		$location.path('/login');
	}

	$scope.sendFriendRequest = function(id){

		relationshipService.sendRequest({
			friend_id: id
		}, function(){
			alert('Friend request sent!');
		}, function(){
			alert('A friendship status is already pending.');
		});
	}
	if(!userService.checkIfLoggedIn())
		$location.path('/login');

	$scope.refresh = function(){

		relationshipService.getAll(function(response){
			$scope.relationships = response;
		}, function(){
			alert('Some errors happened... oopsie');
		});
	};

	$scope.relationships = [];
	$scope.refresh();
}]);

wimControllers.controller('RequestController', ['$scope', '$log', '$location', 'userService', 'relationshipService', '$http', function ($scope, $log, $location, userService, relationshipService, $http) {


	$scope.logout = function(){
		userService.logout();
		$location.path('/login');
	};

	$scope.acceptRequest = function(senderID){
		relationshipService.acceptRequest(senderID, function(){
		}, function(){
			alert('Friend request accepted!');
		}, function(){
			alert('Some errors happened when accepting the friend request.');
		});
	};

	$scope.denyRequest = function(senderID){
		relationshipService.denyRequest(senderID, function(){
		}, function(){
			alert('Friend request denied!');
		}, function(){
			alert('Some errors happened when denying the friend request.');
		});
	};

	if(!userService.checkIfLoggedIn())
		$location.path('/login');

	$scope.refresh = function(){

		relationshipService.viewRequests(function(response){
			$scope.requests = response;
		}, function(){
			alert('Some errors happened... oopsie');
		});
	};

	$scope.requests = [];
	$scope.refresh();


}]);

wimControllers.controller('FriendController', ['$scope', '$location', 'userService', 'relationshipService', '$http', function ($scope, $location, userService, relationshipService, $http) {

	$scope.logout = function(){
		userService.logout();
		$location.path('/login');
	}

	if(!userService.checkIfLoggedIn())
		$location.path('/login');

	//view friend list
	$scope.refresh = function(){
		relationshipService.viewFriends(function(response){
			$scope.friends = response;
		}, function(){
			alert('some errors happened...');
		});
	};

	$scope.friends = [];
	$scope.refresh();


    $scope.newwimselectfriend = function(IDnumber){


        //console.log("Task Id is "+IDnumber);

        var selecteddiv = document.getElementById(IDnumber);
        if(document.getElementById(IDnumber).style.opacity  == 1){
            document.getElementById(IDnumber).style.opacity = "0";
            var newwiminvtefriendsindex = newwiminvitedfriends.indexOf(IDnumber);
            //alert(newwiminvtefriendsindex);
            newwiminvitedfriends.splice(newwiminvtefriendsindex, 1);
            //alert(newwiminvitedfriends);


        }else{
            document.getElementById(IDnumber).style.opacity = "1";
            newwiminvitedfriends.push(IDnumber);
            //alert(newwiminvitedfriends);
        }

    }



}]);

wimControllers.controller('WimController', ['$scope', '$location', 'userService', 'wimService', '$http', function ($scope, $location, userService, wimService, $http) {

    //Logs the user out and redirects to the login page
    $scope.logout = function(){

        //Removes the user's JWT
        userService.logout();

        //Redirects the the user to the login page
        $location.path('/login');

        //pushes profile window out of the way


    }

    //Attempts to create a new Wim
    $scope.create = function(){

        //This is ghetto right now...Basically pulling the array of strings that represent friend ids and recreating the $scope.friends as an array of integers
		//TODO adjust this to get the actual id once the form actually generates a friends list.
		$scope.friends = newwiminvitedfriends;
		if ($scope.friends.length > 1)
			{
				for(i = 0; i < $scope.friends.length; i++) {
					$scope.friends[i] = parseInt($scope.friends[i]);
				}
			}
		else {
			$scope.friends[0] = 0;

			//Sends the user supplied values to the wimService in services.js to create the new Wim
			wimService.create({
				title: $scope.currentWimTitle,
				location: $scope.currentWimLocation,
				address: $scope.currentWimAddress,
				date: $scope.currentWimDate,
				time: $scope.currentWimTime,
				transportation: $scope.currentWimTransportation,
				attire: $scope.currentWimAttire,
				description: $scope.currentWimDescription,
				friends: $scope.friends
			}, function(){

				//If succussful, refesh the Wims on the currentWims page and redirect to that page
				$scope.refresh();
				$location.path('/currentWims');

			}, function(){

				//If error, alert user
				alert('Some errors occurred while communicating with the service. Try again later.');

			});
		}

    }

	//If the an unsigned in user attempts to access this page, redirect to the login page
    if(!userService.checkIfLoggedIn())
        $location.path('/login');

    //Everytime the currentWims page is loaded, load the wims array with all the wims associated with that user
    $scope.refresh = function(){

        //GET wims associated with that user through the wimService created in in the services.js from API
        wimService.getAll(function(response){

            //Load the wims array created below with the wims retrieved from the API
            $scope.wims = response;

        }, function(){

            //Error out if there was a problem getting the wims
            alert('Some errors occurred while communicating with the service. Try again later.');

        });

    };


    //Create the array to be used by the refresh function every time the page loads
    $scope.wims = [];

    //Repopulate the current wims for that user
    $scope.refresh();

}]);

wimControllers.controller('MainController', ['userService', '$location', '$scope', '$http', function (userService, $location, $scope, $http) {

	$scope.logout = function(){
		userService.logout();
		$location.path('/login');
	}

	if(!userService.checkIfLoggedIn())
		$location.path('/login');

}]);

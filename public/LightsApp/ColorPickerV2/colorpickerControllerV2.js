var app = angular.module('myApp', ['ngMaterial', 'ngMdIcons']);


app.controller('AppCtrl', ['$scope', '$mdBottomSheet','$mdSidenav', '$mdDialog', $http,  function($scope, $mdBottomSheet, $mdSidenav, $mdDialog){
  $scope.toggleSidenav = function(menuId) {
    $mdSidenav(menuId).toggle();
  };
 	$scope.menu = [
    {
      link : '',
      title: 'Dashboard',
      icon: 'dashboard'
    },
    {
      link : '',
      title: 'Friends',
      icon: 'group'
    },
    {
      link : '',
      title: 'Messages',
      icon: 'message'
    }
  ];
  $scope.admin = [
    {
      link : '',
      title: 'Trash',
      icon: 'delete'
    },
    {
      link : 'showListBottomSheet($event)',
      title: 'Settings',
      icon: 'settings'
    }
  ];



//imports user's songs and presets

$http.get('http://localhost/WimLive/public/LightsApp/ColorPickerV2/databaseinterface.php')
  .success(function(response) {
    alert(response);
  })






  $scope.songs = [
    {'date': '1/15/17', 'title': 'Shake it off', 'durration': '3:55', 'songID': 32},
    {'date': '1/15/17', 'title': 'Shake it off', 'durration': '3:55', 'songID': 32},
    {'date': '1/15/17', 'title': 'Shake it off', 'durration': '3:55', 'songID': 32},
    {'date': '1/15/17', 'title': 'Shake it off', 'durration': '3:55', 'songID': 32},
    {'date': '1/15/17', 'title': 'Shake it off', 'durration': '3:55', 'songID': 32},
    {'date': '1/15/17', 'title': 'Shake it off', 'durration': '3:55', 'songID': 32}

  ];

  $scope.presets = [
    {'date': '1/15/17', 'title': 'Shake it off', 'durration': '3:55', 'presetID': 32, 'creatorID': 03},


  ];

  $scope.alert = '';
  $scope.showListBottomSheet = function($event) {
    $scope.alert = '';
    $mdBottomSheet.show({
      template: '<md-bottom-sheet class="md-list md-has-header"> <md-subheader>Settings</md-subheader> <md-list> <md-item ng-repeat="item in items"><md-item-content md-ink-ripple flex class="inset"> <a flex aria-label="{{item.name}}" ng-click="listItemClick($index)"> <span class="md-inline-list-icon-label">{{ item.name }}</span> </a></md-item-content> </md-item> </md-list></md-bottom-sheet>',
      controller: 'ListBottomSheetCtrl',
      targetEvent: $event
    }).then(function(clickedItem) {
      $scope.alert = clickedItem.name + ' clicked!';
    });
  };

  $scope.showAdd = function(ev) {
    $mdDialog.show({
      controller: DialogController,
      template: '<md-dialog aria-label="Mango (Fruit)"> <md-content class="md-padding"> <form name="userForm"> <div layout layout-sm="column"> <md-input-container flex> <label>First Name</label> <input ng-model="user.firstName" placeholder="Placeholder text"> </md-input-container> <md-input-container flex> <label>Last Name</label> <input ng-model="theMax"> </md-input-container> </div> <md-input-container flex> <label>Address</label> <input ng-model="user.address"> </md-input-container> <div layout layout-sm="column"> <md-input-container flex> <label>City</label> <input ng-model="user.city"> </md-input-container> <md-input-container flex> <label>State</label> <input ng-model="user.state"> </md-input-container> <md-input-container flex> <label>Postal Code</label> <input ng-model="user.postalCode"> </md-input-container> </div> <md-input-container flex> <label>Biography</label> <textarea ng-model="user.biography" columns="1" md-maxlength="150"></textarea> </md-input-container> </form> </md-content> <div class="md-actions" layout="row"> <span flex></span> <md-button ng-click="answer(\'not useful\')"> Cancel </md-button> <md-button ng-click="answer(\'useful\')" class="md-primary"> Save </md-button> </div></md-dialog>',
      targetEvent: ev,
    })
    .then(function(answer) {
      $scope.alert = 'You said the information was "' + answer + '".';
    }, function() {
      $scope.alert = 'You cancelled the dialog.';
    });
  };
}]);

app.controller('ListBottomSheetCtrl', function($scope, $mdBottomSheet) {
  $scope.items = [
    { name: 'Share', icon: 'share' },
    { name: 'Upload', icon: 'upload' },
    { name: 'Copy', icon: 'copy' },
    { name: 'Print this page', icon: 'print' },
  ];

  $scope.listItemClick = function($index) {
    var clickedItem = $scope.items[$index];
    $mdBottomSheet.hide(clickedItem);
  };
});

function DialogController($scope, $mdDialog) {
  $scope.hide = function() {
    $mdDialog.hide();
  };
  $scope.cancel = function() {
    $mdDialog.cancel();
  };
  $scope.answer = function(answer) {
    $mdDialog.hide(answer);
  };
};

app.directive('userAvatar', function() {
  return {
    replace: true,
    template: '<svg class="user-avatar" viewBox="0 0 128 128" height="64" width="64" pointer-events="none" display="block" > <path fill="#FF8A80" d="M0 0h128v128H0z"/> <path fill="#FFE0B2" d="M36.3 94.8c6.4 7.3 16.2 12.1 27.3 12.4 10.7-.3 20.3-4.7 26.7-11.6l.2.1c-17-13.3-12.9-23.4-8.5-28.6 1.3-1.2 2.8-2.5 4.4-3.9l13.1-11c1.5-1.2 2.6-3 2.9-5.1.6-4.4-2.5-8.4-6.9-9.1-1.5-.2-3 0-4.3.6-.3-1.3-.4-2.7-1.6-3.5-1.4-.9-2.8-1.7-4.2-2.5-7.1-3.9-14.9-6.6-23-7.9-5.4-.9-11-1.2-16.1.7-3.3 1.2-6.1 3.2-8.7 5.6-1.3 1.2-2.5 2.4-3.7 3.7l-1.8 1.9c-.3.3-.5.6-.8.8-.1.1-.2 0-.4.2.1.2.1.5.1.6-1-.3-2.1-.4-3.2-.2-4.4.6-7.5 4.7-6.9 9.1.3 2.1 1.3 3.8 2.8 5.1l11 9.3c1.8 1.5 3.3 3.8 4.6 5.7 1.5 2.3 2.8 4.9 3.5 7.6 1.7 6.8-.8 13.4-5.4 18.4-.5.6-1.1 1-1.4 1.7-.2.6-.4 1.3-.6 2-.4 1.5-.5 3.1-.3 4.6.4 3.1 1.8 6.1 4.1 8.2 3.3 3 8 4 12.4 4.5 5.2.6 10.5.7 15.7.2 4.5-.4 9.1-1.2 13-3.4 5.6-3.1 9.6-8.9 10.5-15.2M76.4 46c.9 0 1.6.7 1.6 1.6 0 .9-.7 1.6-1.6 1.6-.9 0-1.6-.7-1.6-1.6-.1-.9.7-1.6 1.6-1.6zm-25.7 0c.9 0 1.6.7 1.6 1.6 0 .9-.7 1.6-1.6 1.6-.9 0-1.6-.7-1.6-1.6-.1-.9.7-1.6 1.6-1.6z"/> <path fill="#E0F7FA" d="M105.3 106.1c-.9-1.3-1.3-1.9-1.3-1.9l-.2-.3c-.6-.9-1.2-1.7-1.9-2.4-3.2-3.5-7.3-5.4-11.4-5.7 0 0 .1 0 .1.1l-.2-.1c-6.4 6.9-16 11.3-26.7 11.6-11.2-.3-21.1-5.1-27.5-12.6-.1.2-.2.4-.2.5-3.1.9-6 2.7-8.4 5.4l-.2.2s-.5.6-1.5 1.7c-.9 1.1-2.2 2.6-3.7 4.5-3.1 3.9-7.2 9.5-11.7 16.6-.9 1.4-1.7 2.8-2.6 4.3h109.6c-3.4-7.1-6.5-12.8-8.9-16.9-1.5-2.2-2.6-3.8-3.3-5z"/> <circle fill="#444" cx="76.3" cy="47.5" r="2"/> <circle fill="#444" cx="50.7" cy="47.6" r="2"/> <path fill="#444" d="M48.1 27.4c4.5 5.9 15.5 12.1 42.4 8.4-2.2-6.9-6.8-12.6-12.6-16.4C95.1 20.9 92 10 92 10c-1.4 5.5-11.1 4.4-11.1 4.4H62.1c-1.7-.1-3.4 0-5.2.3-12.8 1.8-22.6 11.1-25.7 22.9 10.6-1.9 15.3-7.6 16.9-10.2z"/> </svg>'
  };
});

app.config(function($mdThemingProvider) {
  var customBlueMap = 		$mdThemingProvider.extendPalette('light-blue', {
    'contrastDefaultColor': 'light',
    'contrastDarkColors': ['50'],
    '50': 'ffffff'
  });
  $mdThemingProvider.definePalette('customBlue', customBlueMap);
  $mdThemingProvider.theme('default')
    .primaryPalette('blue', {
      'default': '500',
      'hue-1': '50'
    })
    .accentPalette('grey');
  $mdThemingProvider.theme('input', 'default')
        .primaryPalette('orange')
});








app.controller('SettupController', function($scope, $timeout, $interval, $scope, $http) {

  // Event handlers
  //keyboard commands
  $scope.onKeyDownResult = "";
  $scope.onKeyUpResult = "";
  var getKeyboardEventResult = function (keyEvent, keyEventDesc)
   {
     return (window.event ? keyEvent.keyCode : keyEvent.which);
   };

  $scope.onKeyDown = function ($event) {

    $scope.onKeyDownResult = getKeyboardEventResult($event, "Key down");
    if($scope.onKeyDownResult == "38") {
      //alert("up");
      $scope.upThroughFrames();
    }
    if($scope.onKeyDownResult == "40") {
      //alert("down");
      $scope.downThroughFrames();
    }


  };


//end keyboard commands

//ng-if for second or frame clicker
$scope.showSeconds = false;

$scope.showSecondsfunc = function(){
  $scope.showSeconds = false;
}

$scope.hideSecondsfunc = function(){
  $scope.showSeconds = true;
}

// sets number of frames
$scope.numberofFrames = 3500;

$scope.frames = [
];

$scope.numberofpresetframes = 10;

$scope.presetFrames = [
];


$scope.columns = [
];

$scope.row = [
];

$scope.uponInit = function() {
  $timeout(function () {
      $scope.initializeFramesFunc();

      document.getElementById('timeline0').style.backgroundColor = "#66BB6A";
      document.getElementById('preseteditbutton').style.backgroundColor = "#66BB6A";
      document.getElementById('preseteditbutton').style.color = "white";


  }, 1000);
}

$scope.initializeFramesFunc = function(){
  $scope.musicfunction('songdurration');
  for(frame=0; frame<$scope.numberofFrames; frame++){
    $scope.frames.push([])
     for (row=0; row<38; row++) {
       //console.log(row);
       //$scope.frames[this.frame].push(row);
       $scope.frames[frame].push([]);
       for (seat=0; seat< 38; seat++) {
         //printvar("" + row + "_" + seat + "");
         $scope.frames[frame][row].push([]);
         $scope.frames[frame][row][seat] = 0;
       }
     }

     //holder for time
     //$scope.frames[frame].push([]);
     $scope.frames[frame][38] = "100";
   }

  //creates preset frame arrays
  for(frame=0; frame<$scope.numberofpresetframes; frame++){
    $scope.presetFrames.push([])
     for (row=0; row<38; row++) {
       //console.log(row);
       //$scope.frames[this.frame].push(row);
       $scope.presetFrames[frame].push([]);
       for (seat=0; seat< 38; seat++) {
         //printvar("" + row + "_" + seat + "");
         $scope.presetFrames[frame][row].push([]);
         $scope.presetFrames[frame][row][seat] = 0;
       }
     }

     //holder for time
     //$scope.frames[frame].push([]);

   }
}


/*
 for (row=0; row<38; row++) {
   //console.log(row);
   //$scope.frames[this.frame].push(row);
   $scope.frames[frame].push([]);
   for (seat=0; seat< 38; seat++) {
     //printvar("" + row + "_" + seat + "");
     $scope.frames[frame][row].push([]);
     $scope.frames[frame][row][seat] = 0;
   }
 }
*/


//sets current color as red to start
$scope.currentColorI = 1;

$scope.colorListArray = [
  "", "#f44336", "#E91E63",
  "#9C27B0", "#673AB7", "#3F51B5",
  "#2196F3", "#03A9F4", "#00BCD4",
  "#009688", "#66BB6A", "#8BC34A",
  "#CDDC39", "#FFEB3B", "#FFC107",
  "#FF9800", "#FF5722", "#795548",
  "#9E9E9E", "#607D8B"];

$scope.clearFrame = function() {
  for (row=0; row<38; row++) {
    for (seat=0; seat< 38; seat++) {
        $scope.frames[$scope.currentFrame][row][seat] = 0;
    }
  }
  $scope.setCurrentFrame($scope.currentFrame);
}

$scope.duplicateFrame = function() {
  //duplicates frame to next frame
  for (row=0; row<38; row++) {
    for (seat=0; seat< 38; seat++) {
        $scope.frames[$scope.currentFrame+1][row][seat] = $scope.frames[$scope.currentFrame][row][seat];
    }
  }
  $scope.setCurrentFrame($scope.currentFrame);
  $scope.downThroughFrames();

}

$scope.translateFrame = function(direction) {
  $scope.translateTempFrame = [];
  for (row=0; row<38; row++) {
    $scope.translateTempFrame.push([]);
    for (seat=0; seat< 38; seat++) {
        $scope.translateTempFrame[row].push([]);
        $scope.translateTempFrame[row][seat] = $scope.frames[$scope.currentFrame][row][seat];
    }
  }
  for (row=0; row<38; row++) {
    for (seat=0; seat< 38; seat++) {

        if(direction == "up"){
          if(row + 1 < 38){
            $scope.frames[$scope.currentFrame][row][seat] =   $scope.translateTempFrame[row+1][seat];
          }else{
            $scope.frames[$scope.currentFrame][row][seat] = 0;
          }
        }else if(direction == "left"){
          if(seat + 1 < 38){
            $scope.frames[$scope.currentFrame][row][seat] = $scope.translateTempFrame[row][seat
          + 1];
          }else{
            $scope.frames[$scope.currentFrame][row][seat] = 0;
          }
        }else if(direction == "right"){
          if(seat - 1 > -1){
            $scope.frames[$scope.currentFrame][row][seat] = $scope.translateTempFrame[row][seat - 1];
          }else{
            $scope.frames[$scope.currentFrame][row][seat] = 0;
          }
        }else if(direction == "down"){
          if(row - 1 > -1){
            $scope.frames[$scope.currentFrame][row][seat] = $scope.translateTempFrame[row-1][seat];
          }else{
            $scope.frames[$scope.currentFrame][row][seat] = 0;
          }
        }

    }
  }



  $scope.setCurrentFrame($scope.currentFrame);
}




//create temp div and do the lookup in there
$scope.currentFrame = 0;
$scope.lastCurrentFrame = 0;

$scope.setCurrentFrame = function(indexvar) {

  $scope.currentFrame = indexvar;



  $scope.settimelineScrollClickDiv();
  //itterates through squares in frame
  for (row=0; row<38; row++) {
    for (seat=0; seat< 38; seat++) {
      document.getElementById('display'+row+"."+seat).style.backgroundColor = $scope.colorListArray[$scope.frames[indexvar][row][seat]];
    }
  }

if($scope.testIsRunning == false){
  for (row=0; row<38; row++) {
    for (seat=0; seat< 38; seat++) {
      if(indexvar != 0){
        document.getElementById('displayminusone'+row+"."+seat).style.backgroundColor = $scope.colorListArray[$scope.frames[indexvar - 1][row][seat]];
      }
    }
  }
}else{
  for (row=0; row<38; row++) {
    for (seat=0; seat< 38; seat++) {
      document.getElementById('displayminusone'+row+"."+seat).style.backgroundColor = "";
    }
  }
}


}

$scope.updateplayingsong = function(){
  //for updating frame if music is going
  if($scope.testIsRunning == true){
    $scope.musicfunction('setTime', $scope.currentFrame/10);
  }
}


$scope.totalFrames = $scope.frames.length - 1;




//undo stuff
$scope.undoarray = [];
$scope.redoarray = [];


$scope.undoarrayAdd = function() {


  $scope.undoarray.push([]);
  for (row=0; row<38; row++) {
    $scope.undoarray[$scope.undoarray.length - 1].push([]);
    for (seat=0; seat< 38; seat++) {
        $scope.undoarray[$scope.undoarray.length - 1][row].push([]);
        $scope.undoarray[$scope.undoarray.length - 1][row][seat] = $scope.frames[$scope.currentFrame][row][seat];
    }
  }
  $scope.undoarray[$scope.undoarray.length - 1][38] = $scope.currentFrame;


}

$scope.undo = function() {

  var indexvar = $scope.undoarray[$scope.undoarray.length - 1][38];
  var array = $scope.undoarray[$scope.undoarray.length - 1];

  for (row=0; row<38; row++) {
    for (seat=0; seat< 38; seat++) {

        $scope.frames[indexvar][row][seat] = array[row][seat];
    }
  }

  //updates frame if user is on the frame that was affected, otherwise it does nothing
  if( $scope.currentFrame == indexvar){
    $scope.setCurrentFrame($scope.currentFrame);
  }

  $scope.undoarray.pop();

}


$scope.changeSquareColor = function(row, seat) {

  //runs undo array add before frame is edited so an undo reverts the frame to what it was before changes were made
  $scope.undoarrayAdd();

  //if statement determines if the preset is set to a specific position or any position
  if($scope.presetdivs[$scope.selectedpreset]["setxy"] == "no"){


      for(frame=0; frame<$scope.presetdivs[$scope.selectedpreset]["xy"].length; frame++){
        //alert($scope.presetdivs[$scope.selectedpreset]["xy"][frame][0]);
        for(coordinate=0; coordinate<$scope.presetdivs[$scope.selectedpreset]["xy"][frame].length; coordinate++){
          if(row-$scope.presetdivs[$scope.selectedpreset]["xy"][frame][coordinate][1] > -1){

            $scope.frames[$scope.currentFrame+frame][row-$scope.presetdivs[$scope.selectedpreset]["xy"][frame][coordinate][1]][seat+$scope.presetdivs[$scope.selectedpreset]["xy"][frame][coordinate][0]] = $scope.currentColorI;
          }
        }
      }
  }else{
    for(frame=0; frame<$scope.presetdivs[$scope.selectedpreset]["xy"].length; frame++){
      //alert($scope.presetdivs[$scope.selectedpreset]["xy"][frame][0]);
      for(coordinate=0; coordinate<$scope.presetdivs[$scope.selectedpreset]["xy"][frame].length; coordinate++){

        $scope.frames[$scope.currentFrame+frame][$scope.presetdivs[$scope.selectedpreset]["setxycoords"][1]-$scope.presetdivs[$scope.selectedpreset]["xy"][frame][coordinate][1]][$scope.presetdivs[$scope.selectedpreset]["setxycoords"][0]+$scope.presetdivs[$scope.selectedpreset]["xy"][frame][coordinate][0]] = $scope.currentColorI;
      }
    }
  }


  //this is used to refresh the frame to update the changes of any given click
  $scope.setCurrentFrame($scope.currentFrame);


}


$scope.changeSquareColorOUT = function(row, seat) {

  //runs undo array add before frame is edited so an undo reverts the frame to what it was before changes were made
  $scope.undoarrayAdd();

  //if statement determines if the preset is set to a specific position or any position
  if($scope.manyselectIN != $scope.manyselectOUT){

    if($scope.manyselectINrow - $scope.manyselectOUTrow + 1 > 0 & $scope.manyselectOUTcolumn - $scope.manyselectINcolumn + 1 > 0){
      $scope.rowdifference = $scope.manyselectINrow - $scope.manyselectOUTrow + 1;
      $scope.columndifference = $scope.manyselectOUTcolumn - $scope.manyselectINcolumn + 1;
      for(row=0; row<$scope.rowdifference; row++){
        //alert($scope.presetdivs[$scope.selectedpreset]["xy"][row][0]);
        for(seat=0; seat<$scope.columndifference; seat++){

          $scope.frames[$scope.currentFrame][$scope.manyselectINrow - row][$scope.manyselectINcolumn + seat] = $scope.currentColorI;
        }
      }

    }else if($scope.manyselectINrow - $scope.manyselectOUTrow + 1 > 0 & $scope.manyselectINcolumn - $scope.manyselectOUTcolumn + 1 > 0){
      $scope.rowdifference = $scope.manyselectINrow - $scope.manyselectOUTrow + 1;
      $scope.columndifference = $scope.manyselectINcolumn - $scope.manyselectOUTcolumn + 1;
      for(row=0; row<$scope.rowdifference; row++){
        //alert($scope.presetdivs[$scope.selectedpreset]["xy"][row][0]);
        for(seat=0; seat<$scope.columndifference; seat++){

          $scope.frames[$scope.currentFrame][$scope.manyselectINrow - row][$scope.manyselectINcolumn - seat] = $scope.currentColorI;
        }
      }
    }else if($scope.manyselectOUTrow - $scope.manyselectINrow + 1 > 0 & $scope.manyselectINcolumn - $scope.manyselectOUTcolumn + 1 > 0){
      $scope.rowdifference = $scope.manyselectOUTrow - $scope.manyselectINrow + 1;
      $scope.columndifference = $scope.manyselectINcolumn - $scope.manyselectOUTcolumn + 1;
      for(row=0; row<$scope.rowdifference; row++){
        //alert($scope.presetdivs[$scope.selectedpreset]["xy"][row][0]);
        for(seat=0; seat<$scope.columndifference; seat++){

          $scope.frames[$scope.currentFrame][$scope.manyselectINrow + row][$scope.manyselectINcolumn - seat] = $scope.currentColorI;
        }
      }
    }else{
      $scope.rowdifference = $scope.manyselectOUTrow - $scope.manyselectINrow + 1;
      $scope.columndifference = $scope.manyselectOUTcolumn - $scope.manyselectINcolumn + 1;
      for(row=0; row<$scope.rowdifference; row++){
        //alert($scope.presetdivs[$scope.selectedpreset]["xy"][row][0]);
        for(seat=0; seat<$scope.columndifference; seat++){

          $scope.frames[$scope.currentFrame][$scope.manyselectINrow + row][$scope.manyselectINcolumn + seat] = $scope.currentColorI;
        }
      }

    }


  }

  //this is used to refresh the frame to update the changes of any given click
  $scope.setCurrentFrame($scope.currentFrame);


}


$scope.changeSquareColorOUThighlight = function(row, seat) {
  //alert($scope.presetdivs[$scope.selectedpreset]["xy"][1][1][1]);
  //this is for determining which preset to use
  //currently only for single frame presets
  //if statement determines if the preset is set to a specific position or any position




  if($scope.manyselectIN != $scope.manyselectOUT){

    for (row=0; row<38; row++) {
      for (seat=0; seat< 38; seat++) {
        document.getElementById("preset"+row+"."+seat).style.backgroundColor = "";
        //$scope.frames[$scope.currentFrame][$scope.manyselectINrow - row][$scope.manyselectINcolumn - seat] = $scope.currentColorI;
      }
    }
    if($scope.manyselectINrow - $scope.manyselectOUTrow + 1 > 0 & $scope.manyselectOUTcolumn - $scope.manyselectINcolumn + 1 > 0){
      $scope.rowdifference = $scope.manyselectINrow - $scope.manyselectOUTrow + 1;
      $scope.columndifference = $scope.manyselectOUTcolumn - $scope.manyselectINcolumn + 1;
      for(row=0; row<$scope.rowdifference; row++){
        //alert($scope.presetdivs[$scope.selectedpreset]["xy"][row][0]);
        for(seat=0; seat<$scope.columndifference; seat++){
          document.getElementById("preset"+($scope.manyselectINrow - row)+"."+($scope.manyselectINcolumn + seat)).style.backgroundColor = $scope.colorListArray[$scope.currentColorI];
          //$scope.frames[$scope.currentFrame][$scope.manyselectINrow - row][$scope.manyselectINcolumn + seat] = $scope.currentColorI;
        }
      }

    }else if($scope.manyselectINrow - $scope.manyselectOUTrow + 1 > 0 & $scope.manyselectINcolumn - $scope.manyselectOUTcolumn + 1 > 0){
      $scope.rowdifference = $scope.manyselectINrow - $scope.manyselectOUTrow + 1;
      $scope.columndifference = $scope.manyselectINcolumn - $scope.manyselectOUTcolumn + 1;
      for(row=0; row<$scope.rowdifference; row++){
        //alert($scope.presetdivs[$scope.selectedpreset]["xy"][row][0]);
        for(seat=0; seat<$scope.columndifference; seat++){
          document.getElementById("preset"+($scope.manyselectINrow - row)+"."+($scope.manyselectINcolumn - seat)).style.backgroundColor = $scope.colorListArray[$scope.currentColorI];
          //$scope.frames[$scope.currentFrame][$scope.manyselectINrow - row][$scope.manyselectINcolumn - seat] = $scope.currentColorI;
        }
      }
    }else if($scope.manyselectOUTrow - $scope.manyselectINrow + 1 > 0 & $scope.manyselectINcolumn - $scope.manyselectOUTcolumn + 1 > 0){
      $scope.rowdifference = $scope.manyselectOUTrow - $scope.manyselectINrow + 1;
      $scope.columndifference = $scope.manyselectINcolumn - $scope.manyselectOUTcolumn + 1;
      for(row=0; row<$scope.rowdifference; row++){
        //alert($scope.presetdivs[$scope.selectedpreset]["xy"][row][0]);
        for(seat=0; seat<$scope.columndifference; seat++){

          //$scope.frames[$scope.currentFrame][$scope.manyselectINrow + row][$scope.manyselectINcolumn - seat] = $scope.currentColorI;
          document.getElementById("preset"+($scope.manyselectINrow + row)+"."+($scope.manyselectINcolumn - seat)).style.backgroundColor = $scope.colorListArray[$scope.currentColorI];
        }
      }
    }else{
      $scope.rowdifference = $scope.manyselectOUTrow - $scope.manyselectINrow + 1;
      $scope.columndifference = $scope.manyselectOUTcolumn - $scope.manyselectINcolumn + 1;
      for(row=0; row<$scope.rowdifference; row++){
        //alert($scope.presetdivs[$scope.selectedpreset]["xy"][row][0]);
        for(seat=0; seat<$scope.columndifference; seat++){
           document.getElementById("preset"+($scope.manyselectINrow + row)+"."+($scope.manyselectINcolumn + seat)).style.backgroundColor = $scope.colorListArray[$scope.currentColorI];
        }
      }

    }


  }

  //this is used to refresh the frame to update the changes of any given click
  $scope.setCurrentFrame($scope.currentFrame);

}






$scope.manyselectIN = 0;

$scope.spreadSelectIN = function(row, column) {
  //alert(row+column);
  $scope.manyselectINrow = row;
  $scope.manyselectINcolumn = column;
  if($scope.selectedpreset > 1 ){
    //alert("1");
    $scope.changeSquareColor(row, column)
  }
  //only runs if in paint mode
  if($scope.selectedpreset == 1 ){
    $scope.undoarrayAdd();
  }

  $scope.ishighlighting = true;
}


$scope.spreadSelectOut = function(row, column) {


  if($scope.ishighlighting == true){
    //alert(row+column);
    //only does the spread select if the edit button is selected
    if($scope.selectedpreset == 0){
      $scope.manyselectOUTrow = row;
      $scope.manyselectOUTcolumn = column;
      $scope.changeSquareColorOUT(row, column)


    }
    //decolors all highlighted squares
    for (row=0; row<38; row++) {
      for (seat=0; seat< 38; seat++) {
        document.getElementById("preset"+row+"."+seat).style.backgroundColor = "";
        //$scope.frames[$scope.currentFrame][$scope.manyselectINrow - row][$scope.manyselectINcolumn - seat] = $scope.currentColorI;
      }
    }
    $scope.ishighlighting = false;
  }
  $scope.setCurrentFrame($scope.currentFrame);


}

$scope.speadSelectOUThighlightupdate = function(row, column) {
  $scope.manyselectOUTrow = row;
  $scope.manyselectOUTcolumn = column;
  $scope.currentrow = row;
  $scope.currentcolumn = column;


  if($scope.ishighlighting == true){
    if($scope.selectedpreset == 0){
      $scope.changeSquareColorOUThighlight(row, column);
    }else if($scope.selectedpreset == 1){
      //only works for paint tool
      $scope.painthighlighttool(row, column);

    }
  }

}

$scope.painthighlighttool = function(row, column){
  document.getElementById("preset"+row+"."+column).style.backgroundColor = "white";
  $scope.frames[$scope.currentFrame][row][column] = $scope.currentColorI;


}

$scope.settimelineScrollClickDiv = function() {
  document.getElementById('timeline'+$scope.lastCurrentFrame).style.backgroundColor = "#9E9E9E";
  document.getElementById('timeline'+$scope.currentFrame).style.backgroundColor = "#66BB6A";
  $scope.lastCurrentFrame = $scope.currentFrame;
}

$scope.upThroughFrames = function() {
  if($scope.currentFrame > 0) {
    $scope.currentFrame = $scope.currentFrame - 1;
    $scope.settimelineScrollClickDiv();
    $scope.setCurrentFrame($scope.currentFrame);
  }
}
$scope.downThroughFrames = function() {
  if($scope.currentFrame < $scope.totalFrames){
    $scope.currentFrame = $scope.currentFrame + 1;
    $scope.settimelineScrollClickDiv();
    $scope.setCurrentFrame($scope.currentFrame);
  }
}

$scope.setColor = function(color, index) {
  //alert(color + " " + index);
  document.getElementById('selectedColorDiv').style.backgroundColor = color;
  document.getElementById('selectedColorDiv').innerHTML = color;
  $scope.currentColorI = index;

}

//this boolean determines is set to define when the test is running (for the purpose of not showing the last frame while playing)
$scope.testIsRunning = false;
//sets initial frame to start test
$scope.runTestTimevar = 0;

//code for running Test display
$scope.incrimentFrame = function() {

  if ($scope.runTestTimevar >= $scope.frames.length) {
    clearInterval($scope.intervalId);
    $scope.testIsRunning = false;
  } else {
    $scope.setCurrentFrame($scope.runTestTimevar);
    //resyncs music every minute to ensure slides are on time with music
    if($scope.runTestTimevar % 600 == 0){
      console.log($scope.audioElementVar.currentTime);
      $scope.musicfunction('setTime', $scope.runTestTimevar/10);
    }
    $scope.$apply();
    $scope.runTestTimevar++;
    //console.log($scope.runTestTimevar);
  }
}

$scope.runtest = function() {

  //keeps users from double clicking by disabling button for .2 secs
  document.getElementById("runtestbutton").disabled = true;
  $timeout(function () {
    document.getElementById("runtestbutton").disabled = false;
  }, 200);

  $scope.runTestTimevar = 0;
  $scope.testIsRunning = false;
  $scope.testIsRunning = true;
  clearInterval($scope.intervalId);
  $scope.musicfunction('setTime', 0);
  //this number is added onto to set a starting point for each next frame
  $scope.intervalId = setInterval($scope.incrimentFrame, 100);

}

$scope.stoptest = function() {

  //this number is added onto to set a starting point for each next frame
  $scope.testIsRunning = true;
  $scope.testIsRunning = false;
  $scope.musicfunction('pause');
  clearInterval($scope.intervalId);
}

$scope.continuetest = function() {
  $scope.runTestTimevar = $scope.currentFrame;
  clearInterval($scope.intervalId);
  $scope.testIsRunning = false;
  $scope.testIsRunning = true;
  $scope.musicfunction('setTime', $scope.runTestTimevar/10);
  $scope.intervalId = setInterval($scope.incrimentFrame, 100);

}

//this section is for all things revolving around presets
//default preset is the normal one
$scope.laspreset = "editbutton";
$scope.selectedpreset = 0;

//the arrays will first be nested in by frames then by x,y coordinates in relation to the clicked square
$scope.presetdivs = [
  {name: "edit", setxy: "no", setxycoords: [], xy: [[[0,0]]] },
  {name: "paint", setxy: "no", setxycoords: [], xy: [[[0,0]]] },
  {name: "checkard", setxy: "yes", setxycoords: [19,19], xy: [[[-18,19],[-16,19],[-14,19],[-12,19],[-10,19],[-8,19],[-6,19],[-4,19],[-2,19],[0,19],[2,19],[4,19],[6,19],[8,19],[10,19],[12,19],[14,19],[16,19],[18,19],[-19,18],[-17,18],[-15,18],[-13,18],[-11,18],[-9,18],[-7,18],[-5,18],[-3,18],[-1,18],[1,18],[3,18],[5,18],[7,18],[9,18],[11,18],[13,18],[15,18],[17,18],[-18,17],[-16,17],[-14,17],[-12,17],[-10,17],[-8,17],[-6,17],[-4,17],[-2,17],[0,17],[2,17],[4,17],[6,17],[8,17],[10,17],[12,17],[14,17],[16,17],[18,17],[-19,16],[-17,16],[-15,16],[-13,16],[-11,16],[-9,16],[-7,16],[-5,16],[-3,16],[-1,16],[1,16],[3,16],[5,16],[7,16],[9,16],[11,16],[13,16],[15,16],[17,16],[-18,15],[-16,15],[-14,15],[-12,15],[-10,15],[-8,15],[-6,15],[-4,15],[-2,15],[0,15],[2,15],[4,15],[6,15],[8,15],[10,15],[12,15],[14,15],[16,15],[18,15],[-19,14],[-17,14],[-15,14],[-13,14],[-11,14],[-9,14],[-7,14],[-5,14],[-3,14],[-1,14],[1,14],[3,14],[5,14],[7,14],[9,14],[11,14],[13,14],[15,14],[17,14],[-18,13],[-16,13],[-14,13],[-12,13],[-10,13],[-8,13],[-6,13],[-4,13],[-2,13],[0,13],[2,13],[4,13],[6,13],[8,13],[10,13],[12,13],[14,13],[16,13],[18,13],[-19,12],[-17,12],[-15,12],[-13,12],[-11,12],[-9,12],[-7,12],[-5,12],[-3,12],[-1,12],[1,12],[3,12],[5,12],[7,12],[9,12],[11,12],[13,12],[15,12],[17,12],[-18,11],[-16,11],[-14,11],[-12,11],[-10,11],[-8,11],[-6,11],[-4,11],[-2,11],[0,11],[2,11],[4,11],[6,11],[8,11],[10,11],[12,11],[14,11],[16,11],[18,11],[-19,10],[-17,10],[-15,10],[-13,10],[-11,10],[-9,10],[-7,10],[-5,10],[-3,10],[-1,10],[1,10],[3,10],[5,10],[7,10],[9,10],[11,10],[13,10],[15,10],[17,10],[-18,9],[-16,9],[-14,9],[-12,9],[-10,9],[-8,9],[-6,9],[-4,9],[-2,9],[0,9],[2,9],[4,9],[6,9],[8,9],[10,9],[12,9],[14,9],[16,9],[18,9],[-19,8],[-17,8],[-15,8],[-13,8],[-11,8],[-9,8],[-7,8],[-5,8],[-3,8],[-1,8],[1,8],[3,8],[5,8],[7,8],[9,8],[11,8],[13,8],[15,8],[17,8],[-18,7],[-16,7],[-14,7],[-12,7],[-10,7],[-8,7],[-6,7],[-4,7],[-2,7],[0,7],[2,7],[4,7],[6,7],[8,7],[10,7],[12,7],[14,7],[16,7],[18,7],[-19,6],[-17,6],[-15,6],[-13,6],[-11,6],[-9,6],[-7,6],[-5,6],[-3,6],[-1,6],[1,6],[3,6],[5,6],[7,6],[9,6],[11,6],[13,6],[15,6],[17,6],[-18,5],[-16,5],[-14,5],[-12,5],[-10,5],[-8,5],[-6,5],[-4,5],[-2,5],[0,5],[2,5],[4,5],[6,5],[8,5],[10,5],[12,5],[14,5],[16,5],[18,5],[-19,4],[-17,4],[-15,4],[-13,4],[-11,4],[-9,4],[-7,4],[-5,4],[-3,4],[-1,4],[1,4],[3,4],[5,4],[7,4],[9,4],[11,4],[13,4],[15,4],[17,4],[-18,3],[-16,3],[-14,3],[-12,3],[-10,3],[-8,3],[-6,3],[-4,3],[-2,3],[0,3],[2,3],[4,3],[6,3],[8,3],[10,3],[12,3],[14,3],[16,3],[18,3],[-19,2],[-17,2],[-15,2],[-13,2],[-11,2],[-9,2],[-7,2],[-5,2],[-3,2],[-1,2],[1,2],[3,2],[5,2],[7,2],[9,2],[11,2],[13,2],[15,2],[17,2],[-18,1],[-16,1],[-14,1],[-12,1],[-10,1],[-8,1],[-6,1],[-4,1],[-2,1],[0,1],[2,1],[4,1],[6,1],[8,1],[10,1],[12,1],[14,1],[16,1],[18,1],[-19,0],[-17,0],[-15,0],[-13,0],[-11,0],[-9,0],[-7,0],[-5,0],[-3,0],[-1,0],[1,0],[3,0],[5,0],[7,0],[9,0],[11,0],[13,0],[15,0],[17,0],[-18,-1],[-16,-1],[-14,-1],[-12,-1],[-10,-1],[-8,-1],[-6,-1],[-4,-1],[-2,-1],[0,-1],[2,-1],[4,-1],[6,-1],[8,-1],[10,-1],[12,-1],[14,-1],[16,-1],[18,-1],[-19,-2],[-17,-2],[-15,-2],[-13,-2],[-11,-2],[-9,-2],[-7,-2],[-5,-2],[-3,-2],[-1,-2],[1,-2],[3,-2],[5,-2],[7,-2],[9,-2],[11,-2],[13,-2],[15,-2],[17,-2],[-18,-3],[-16,-3],[-14,-3],[-12,-3],[-10,-3],[-8,-3],[-6,-3],[-4,-3],[-2,-3],[0,-3],[2,-3],[4,-3],[6,-3],[8,-3],[10,-3],[12,-3],[14,-3],[16,-3],[18,-3],[-19,-4],[-17,-4],[-15,-4],[-13,-4],[-11,-4],[-9,-4],[-7,-4],[-5,-4],[-3,-4],[-1,-4],[1,-4],[3,-4],[5,-4],[7,-4],[9,-4],[11,-4],[13,-4],[15,-4],[17,-4],[-18,-5],[-16,-5],[-14,-5],[-12,-5],[-10,-5],[-8,-5],[-6,-5],[-4,-5],[-2,-5],[0,-5],[2,-5],[4,-5],[6,-5],[8,-5],[10,-5],[12,-5],[14,-5],[16,-5],[18,-5],[-19,-6],[-17,-6],[-15,-6],[-13,-6],[-11,-6],[-9,-6],[-7,-6],[-5,-6],[-3,-6],[-1,-6],[1,-6],[3,-6],[5,-6],[7,-6],[9,-6],[11,-6],[13,-6],[15,-6],[17,-6],[-18,-7],[-16,-7],[-14,-7],[-12,-7],[-10,-7],[-8,-7],[-6,-7],[-4,-7],[-2,-7],[0,-7],[2,-7],[4,-7],[6,-7],[8,-7],[10,-7],[12,-7],[14,-7],[16,-7],[18,-7],[-19,-8],[-17,-8],[-15,-8],[-13,-8],[-11,-8],[-9,-8],[-7,-8],[-5,-8],[-3,-8],[-1,-8],[1,-8],[3,-8],[5,-8],[7,-8],[9,-8],[11,-8],[13,-8],[15,-8],[17,-8],[-18,-9],[-16,-9],[-14,-9],[-12,-9],[-10,-9],[-8,-9],[-6,-9],[-4,-9],[-2,-9],[0,-9],[2,-9],[4,-9],[6,-9],[8,-9],[10,-9],[12,-9],[14,-9],[16,-9],[18,-9],[-19,-10],[-17,-10],[-15,-10],[-13,-10],[-11,-10],[-9,-10],[-7,-10],[-5,-10],[-3,-10],[-1,-10],[1,-10],[3,-10],[5,-10],[7,-10],[9,-10],[11,-10],[13,-10],[15,-10],[17,-10],[-18,-11],[-16,-11],[-14,-11],[-12,-11],[-10,-11],[-8,-11],[-6,-11],[-4,-11],[-2,-11],[0,-11],[2,-11],[4,-11],[6,-11],[8,-11],[10,-11],[12,-11],[14,-11],[16,-11],[18,-11],[-19,-12],[-17,-12],[-15,-12],[-13,-12],[-11,-12],[-9,-12],[-7,-12],[-5,-12],[-3,-12],[-1,-12],[1,-12],[3,-12],[5,-12],[7,-12],[9,-12],[11,-12],[13,-12],[15,-12],[17,-12],[-18,-13],[-16,-13],[-14,-13],[-12,-13],[-10,-13],[-8,-13],[-6,-13],[-4,-13],[-2,-13],[0,-13],[2,-13],[4,-13],[6,-13],[8,-13],[10,-13],[12,-13],[14,-13],[16,-13],[18,-13],[-19,-14],[-17,-14],[-15,-14],[-13,-14],[-11,-14],[-9,-14],[-7,-14],[-5,-14],[-3,-14],[-1,-14],[1,-14],[3,-14],[5,-14],[7,-14],[9,-14],[11,-14],[13,-14],[15,-14],[17,-14],[-18,-15],[-16,-15],[-14,-15],[-12,-15],[-10,-15],[-8,-15],[-6,-15],[-4,-15],[-2,-15],[0,-15],[2,-15],[4,-15],[6,-15],[8,-15],[10,-15],[12,-15],[14,-15],[16,-15],[18,-15],[-19,-16],[-17,-16],[-15,-16],[-13,-16],[-11,-16],[-9,-16],[-7,-16],[-5,-16],[-3,-16],[-1,-16],[1,-16],[3,-16],[5,-16],[7,-16],[9,-16],[11,-16],[13,-16],[15,-16],[17,-16],[-18,-17],[-16,-17],[-14,-17],[-12,-17],[-10,-17],[-8,-17],[-6,-17],[-4,-17],[-2,-17],[0,-17],[2,-17],[4,-17],[6,-17],[8,-17],[10,-17],[12,-17],[14,-17],[16,-17],[18,-17],[-19,-18],[-17,-18],[-15,-18],[-13,-18],[-11,-18],[-9,-18],[-7,-18],[-5,-18],[-3,-18],[-1,-18],[1,-18],[3,-18],[5,-18],[7,-18],[9,-18],[11,-18],[13,-18],[15,-18],[17,-18]],
[[-19,19],[-17,19],[-15,19],[-13,19],[-11,19],[-9,19],[-7,19],[-5,19],[-3,19],[-1,19],[1,19],[3,19],[5,19],[7,19],[9,19],[11,19],[13,19],[15,19],[17,19],[-18,18],[-16,18],[-14,18],[-12,18],[-10,18],[-8,18],[-6,18],[-4,18],[-2,18],[0,18],[2,18],[4,18],[6,18],[8,18],[10,18],[12,18],[14,18],[16,18],[18,18],[-19,17],[-17,17],[-15,17],[-13,17],[-11,17],[-9,17],[-7,17],[-5,17],[-3,17],[-1,17],[1,17],[3,17],[5,17],[7,17],[9,17],[11,17],[13,17],[15,17],[17,17],[-18,16],[-16,16],[-14,16],[-12,16],[-10,16],[-8,16],[-6,16],[-4,16],[-2,16],[0,16],[2,16],[4,16],[6,16],[8,16],[10,16],[12,16],[14,16],[16,16],[18,16],[-19,15],[-17,15],[-15,15],[-13,15],[-11,15],[-9,15],[-7,15],[-5,15],[-3,15],[-1,15],[1,15],[3,15],[5,15],[7,15],[9,15],[11,15],[13,15],[15,15],[17,15],[-18,14],[-16,14],[-14,14],[-12,14],[-10,14],[-8,14],[-6,14],[-4,14],[-2,14],[0,14],[2,14],[4,14],[6,14],[8,14],[10,14],[12,14],[14,14],[16,14],[18,14],[-19,13],[-17,13],[-15,13],[-13,13],[-11,13],[-9,13],[-7,13],[-5,13],[-3,13],[-1,13],[1,13],[3,13],[5,13],[7,13],[9,13],[11,13],[13,13],[15,13],[17,13],[-18,12],[-16,12],[-14,12],[-12,12],[-10,12],[-8,12],[-6,12],[-4,12],[-2,12],[0,12],[2,12],[4,12],[6,12],[8,12],[10,12],[12,12],[14,12],[16,12],[18,12],[-19,11],[-17,11],[-15,11],[-13,11],[-11,11],[-9,11],[-7,11],[-5,11],[-3,11],[-1,11],[1,11],[3,11],[5,11],[7,11],[9,11],[11,11],[13,11],[15,11],[17,11],[-18,10],[-16,10],[-14,10],[-12,10],[-10,10],[-8,10],[-6,10],[-4,10],[-2,10],[0,10],[2,10],[4,10],[6,10],[8,10],[10,10],[12,10],[14,10],[16,10],[18,10],[-19,9],[-17,9],[-15,9],[-13,9],[-11,9],[-9,9],[-7,9],[-5,9],[-3,9],[-1,9],[1,9],[3,9],[5,9],[7,9],[9,9],[11,9],[13,9],[15,9],[17,9],[-18,8],[-16,8],[-14,8],[-12,8],[-10,8],[-8,8],[-6,8],[-4,8],[-2,8],[0,8],[2,8],[4,8],[6,8],[8,8],[10,8],[12,8],[14,8],[16,8],[18,8],[-19,7],[-17,7],[-15,7],[-13,7],[-11,7],[-9,7],[-7,7],[-5,7],[-3,7],[-1,7],[1,7],[3,7],[5,7],[7,7],[9,7],[11,7],[13,7],[15,7],[17,7],[-18,6],[-16,6],[-14,6],[-12,6],[-10,6],[-8,6],[-6,6],[-4,6],[-2,6],[0,6],[2,6],[4,6],[6,6],[8,6],[10,6],[12,6],[14,6],[16,6],[18,6],[-19,5],[-17,5],[-15,5],[-13,5],[-11,5],[-9,5],[-7,5],[-5,5],[-3,5],[-1,5],[1,5],[3,5],[5,5],[7,5],[9,5],[11,5],[13,5],[15,5],[17,5],[-18,4],[-16,4],[-14,4],[-12,4],[-10,4],[-8,4],[-6,4],[-4,4],[-2,4],[0,4],[2,4],[4,4],[6,4],[8,4],[10,4],[12,4],[14,4],[16,4],[18,4],[-19,3],[-17,3],[-15,3],[-13,3],[-11,3],[-9,3],[-7,3],[-5,3],[-3,3],[-1,3],[1,3],[3,3],[5,3],[7,3],[9,3],[11,3],[13,3],[15,3],[17,3],[-18,2],[-16,2],[-14,2],[-12,2],[-10,2],[-8,2],[-6,2],[-4,2],[-2,2],[0,2],[2,2],[4,2],[6,2],[8,2],[10,2],[12,2],[14,2],[16,2],[18,2],[-19,1],[-17,1],[-15,1],[-13,1],[-11,1],[-9,1],[-7,1],[-5,1],[-3,1],[-1,1],[1,1],[3,1],[5,1],[7,1],[9,1],[11,1],[13,1],[15,1],[17,1],[-18,0],[-16,0],[-14,0],[-12,0],[-10,0],[-8,0],[-6,0],[-4,0],[-2,0],[0,0],[2,0],[4,0],[6,0],[8,0],[10,0],[12,0],[14,0],[16,0],[18,0],[-19,-1],[-17,-1],[-15,-1],[-13,-1],[-11,-1],[-9,-1],[-7,-1],[-5,-1],[-3,-1],[-1,-1],[1,-1],[3,-1],[5,-1],[7,-1],[9,-1],[11,-1],[13,-1],[15,-1],[17,-1],[-18,-2],[-16,-2],[-14,-2],[-12,-2],[-10,-2],[-8,-2],[-6,-2],[-4,-2],[-2,-2],[0,-2],[2,-2],[4,-2],[6,-2],[8,-2],[10,-2],[12,-2],[14,-2],[16,-2],[18,-2],[-19,-3],[-17,-3],[-15,-3],[-13,-3],[-11,-3],[-9,-3],[-7,-3],[-5,-3],[-3,-3],[-1,-3],[1,-3],[3,-3],[5,-3],[7,-3],[9,-3],[11,-3],[13,-3],[15,-3],[17,-3],[-18,-4],[-16,-4],[-14,-4],[-12,-4],[-10,-4],[-8,-4],[-6,-4],[-4,-4],[-2,-4],[0,-4],[2,-4],[4,-4],[6,-4],[8,-4],[10,-4],[12,-4],[14,-4],[16,-4],[18,-4],[-19,-5],[-17,-5],[-15,-5],[-13,-5],[-11,-5],[-9,-5],[-7,-5],[-5,-5],[-3,-5],[-1,-5],[1,-5],[3,-5],[5,-5],[7,-5],[9,-5],[11,-5],[13,-5],[15,-5],[17,-5],[-18,-6],[-16,-6],[-14,-6],[-12,-6],[-10,-6],[-8,-6],[-6,-6],[-4,-6],[-2,-6],[0,-6],[2,-6],[4,-6],[6,-6],[8,-6],[10,-6],[12,-6],[14,-6],[16,-6],[18,-6],[-19,-7],[-17,-7],[-15,-7],[-13,-7],[-11,-7],[-9,-7],[-7,-7],[-5,-7],[-3,-7],[-1,-7],[1,-7],[3,-7],[5,-7],[7,-7],[9,-7],[11,-7],[13,-7],[15,-7],[17,-7],[-18,-8],[-16,-8],[-14,-8],[-12,-8],[-10,-8],[-8,-8],[-6,-8],[-4,-8],[-2,-8],[0,-8],[2,-8],[4,-8],[6,-8],[8,-8],[10,-8],[12,-8],[14,-8],[16,-8],[18,-8],[-19,-9],[-17,-9],[-15,-9],[-13,-9],[-11,-9],[-9,-9],[-7,-9],[-5,-9],[-3,-9],[-1,-9],[1,-9],[3,-9],[5,-9],[7,-9],[9,-9],[11,-9],[13,-9],[15,-9],[17,-9],[-18,-10],[-16,-10],[-14,-10],[-12,-10],[-10,-10],[-8,-10],[-6,-10],[-4,-10],[-2,-10],[0,-10],[2,-10],[4,-10],[6,-10],[8,-10],[10,-10],[12,-10],[14,-10],[16,-10],[18,-10],[-19,-11],[-17,-11],[-15,-11],[-13,-11],[-11,-11],[-9,-11],[-7,-11],[-5,-11],[-3,-11],[-1,-11],[1,-11],[3,-11],[5,-11],[7,-11],[9,-11],[11,-11],[13,-11],[15,-11],[17,-11],[-18,-12],[-16,-12],[-14,-12],[-12,-12],[-10,-12],[-8,-12],[-6,-12],[-4,-12],[-2,-12],[0,-12],[2,-12],[4,-12],[6,-12],[8,-12],[10,-12],[12,-12],[14,-12],[16,-12],[18,-12],[-19,-13],[-17,-13],[-15,-13],[-13,-13],[-11,-13],[-9,-13],[-7,-13],[-5,-13],[-3,-13],[-1,-13],[1,-13],[3,-13],[5,-13],[7,-13],[9,-13],[11,-13],[13,-13],[15,-13],[17,-13],[-18,-14],[-16,-14],[-14,-14],[-12,-14],[-10,-14],[-8,-14],[-6,-14],[-4,-14],[-2,-14],[0,-14],[2,-14],[4,-14],[6,-14],[8,-14],[10,-14],[12,-14],[14,-14],[16,-14],[18,-14],[-19,-15],[-17,-15],[-15,-15],[-13,-15],[-11,-15],[-9,-15],[-7,-15],[-5,-15],[-3,-15],[-1,-15],[1,-15],[3,-15],[5,-15],[7,-15],[9,-15],[11,-15],[13,-15],[15,-15],[17,-15],[-18,-16],[-16,-16],[-14,-16],[-12,-16],[-10,-16],[-8,-16],[-6,-16],[-4,-16],[-2,-16],[0,-16],[2,-16],[4,-16],[6,-16],[8,-16],[10,-16],[12,-16],[14,-16],[16,-16],[18,-16],[-19,-17],[-17,-17],[-15,-17],[-13,-17],[-11,-17],[-9,-17],[-7,-17],[-5,-17],[-3,-17],[-1,-17],[1,-17],[3,-17],[5,-17],[7,-17],[9,-17],[11,-17],[13,-17],[15,-17],[17,-17],[-18,-18],[-16,-18],[-14,-18],[-12,-18],[-10,-18],[-8,-18],[-6,-18],[-4,-18],[-2,-18],[0,-18],[2,-18],[4,-18],[6,-18],[8,-18],[10,-18],[12,-18],[14,-18],[16,-18],[18,-18]]]},
  {name: "square", setxy: "no", setxycoords: [], xy: [[[0,0],[1,1],[1,0],[0,1]]] },
  {name: "explode", setxy: "no", setxycoords: [19,19], xy: [[[0,0]],[[0,1],[-1,0],[1,0],[0,-1]],[[0,2],[-1,1],[1,1],[-2,0],[2,0],[-1,-1],[1,-1],[0,-2]],[[0,3],[-1,2],[1,2],[-2,1],[2,1],[-3,0],[3,0],[-2,-1],[2,-1],[-1,-2],[1,-2],[0,-3]],[[0,4],[-1,3],[1,3],[-2,2],[2,2],[-3,1],[3,1],[-4,0],[4,0],[-3,-1],[3,-1],[-2,-2],[2,-2],[-1,-3],[1,-3],[0,-4]],[[0,5],[-1,4],[1,4],[-4,1],[4,1],[-5,0],[5,0],[-4,-1],[4,-1],[-1,-4],[1,-4],[0,-5]],[[-1,6],[1,6],[-2,5],[-1,5],[1,5],[2,5],[-5,2],[5,2],[-6,1],[-5,1],[5,1],[6,1],[-6,-1],[-5,-1],[5,-1],[6,-1],[-5,-2],[5,-2],[-2,-5],[-1,-5],[1,-5],[2,-5],[-1,-6],[1,-6]],[[-1,6],[1,6],[-2,5],[2,5],[-5,2],[5,2],[-6,1],[6,1],[-6,-1],[6,-1],[-5,-2],[5,-2],[-2,-5],[2,-5],[-1,-6],[1,-6]]]},
  {name: "solid", setxy: "yes", setxycoords: [19,19], xy: [[[-19,19],[-18,19],[-17,19],[-16,19],[-15,19],[-14,19],[-13,19],[-12,19],[-11,19],[-10,19],[-9,19],[-8,19],[-7,19],[-6,19],[-5,19],[-4,19],[-3,19],[-2,19],[-1,19],[0,19],[1,19],[2,19],[3,19],[4,19],[5,19],[6,19],[7,19],[8,19],[9,19],[10,19],[11,19],[12,19],[13,19],[14,19],[15,19],[16,19],[17,19],[18,19],[-19,18],[-18,18],[-17,18],[-16,18],[-15,18],[-14,18],[-13,18],[-12,18],[-11,18],[-10,18],[-9,18],[-8,18],[-7,18],[-6,18],[-5,18],[-4,18],[-3,18],[-2,18],[-1,18],[0,18],[1,18],[2,18],[3,18],[4,18],[5,18],[6,18],[7,18],[8,18],[9,18],[10,18],[11,18],[12,18],[13,18],[14,18],[15,18],[16,18],[17,18],[18,18],[-19,17],[-18,17],[-17,17],[-16,17],[-15,17],[-14,17],[-13,17],[-12,17],[-11,17],[-10,17],[-9,17],[-8,17],[-7,17],[-6,17],[-5,17],[-4,17],[-3,17],[-2,17],[-1,17],[0,17],[1,17],[2,17],[3,17],[4,17],[5,17],[6,17],[7,17],[8,17],[9,17],[10,17],[11,17],[12,17],[13,17],[14,17],[15,17],[16,17],[17,17],[18,17],[-19,16],[-18,16],[-17,16],[-16,16],[-15,16],[-14,16],[-13,16],[-12,16],[-11,16],[-10,16],[-9,16],[-8,16],[-7,16],[-6,16],[-5,16],[-4,16],[-3,16],[-2,16],[-1,16],[0,16],[1,16],[2,16],[3,16],[4,16],[5,16],[6,16],[7,16],[8,16],[9,16],[10,16],[11,16],[12,16],[13,16],[14,16],[15,16],[16,16],[17,16],[18,16],[-19,15],[-18,15],[-17,15],[-16,15],[-15,15],[-14,15],[-13,15],[-12,15],[-11,15],[-10,15],[-9,15],[-8,15],[-7,15],[-6,15],[-5,15],[-4,15],[-3,15],[-2,15],[-1,15],[0,15],[1,15],[2,15],[3,15],[4,15],[5,15],[6,15],[7,15],[8,15],[9,15],[10,15],[11,15],[12,15],[13,15],[14,15],[15,15],[16,15],[17,15],[18,15],[-19,14],[-18,14],[-17,14],[-16,14],[-15,14],[-14,14],[-13,14],[-12,14],[-11,14],[-10,14],[-9,14],[-8,14],[-7,14],[-6,14],[-5,14],[-4,14],[-3,14],[-2,14],[-1,14],[0,14],[1,14],[2,14],[3,14],[4,14],[5,14],[6,14],[7,14],[8,14],[9,14],[10,14],[11,14],[12,14],[13,14],[14,14],[15,14],[16,14],[17,14],[18,14],[-19,13],[-18,13],[-17,13],[-16,13],[-15,13],[-14,13],[-13,13],[-12,13],[-11,13],[-10,13],[-9,13],[-8,13],[-7,13],[-6,13],[-5,13],[-4,13],[-3,13],[-2,13],[-1,13],[0,13],[1,13],[2,13],[3,13],[4,13],[5,13],[6,13],[7,13],[8,13],[9,13],[10,13],[11,13],[12,13],[13,13],[14,13],[15,13],[16,13],[17,13],[18,13],[-19,12],[-18,12],[-17,12],[-16,12],[-15,12],[-14,12],[-13,12],[-12,12],[-11,12],[-10,12],[-9,12],[-8,12],[-7,12],[-6,12],[-5,12],[-4,12],[-3,12],[-2,12],[-1,12],[0,12],[1,12],[2,12],[3,12],[4,12],[5,12],[6,12],[7,12],[8,12],[9,12],[10,12],[11,12],[12,12],[13,12],[14,12],[15,12],[16,12],[17,12],[18,12],[-19,11],[-18,11],[-17,11],[-16,11],[-15,11],[-14,11],[-13,11],[-12,11],[-11,11],[-10,11],[-9,11],[-8,11],[-7,11],[-6,11],[-5,11],[-4,11],[-3,11],[-2,11],[-1,11],[0,11],[1,11],[2,11],[3,11],[4,11],[5,11],[6,11],[7,11],[8,11],[9,11],[10,11],[11,11],[12,11],[13,11],[14,11],[15,11],[16,11],[17,11],[18,11],[-19,10],[-18,10],[-17,10],[-16,10],[-15,10],[-14,10],[-13,10],[-12,10],[-11,10],[-10,10],[-9,10],[-8,10],[-7,10],[-6,10],[-5,10],[-4,10],[-3,10],[-2,10],[-1,10],[0,10],[1,10],[2,10],[3,10],[4,10],[5,10],[6,10],[7,10],[8,10],[9,10],[10,10],[11,10],[12,10],[13,10],[14,10],[15,10],[16,10],[17,10],[18,10],[-19,9],[-18,9],[-17,9],[-16,9],[-15,9],[-14,9],[-13,9],[-12,9],[-11,9],[-10,9],[-9,9],[-8,9],[-7,9],[-6,9],[-5,9],[-4,9],[-3,9],[-2,9],[-1,9],[0,9],[1,9],[2,9],[3,9],[4,9],[5,9],[6,9],[7,9],[8,9],[9,9],[10,9],[11,9],[12,9],[13,9],[14,9],[15,9],[16,9],[17,9],[18,9],[-19,8],[-18,8],[-17,8],[-16,8],[-15,8],[-14,8],[-13,8],[-12,8],[-11,8],[-10,8],[-9,8],[-8,8],[-7,8],[-6,8],[-5,8],[-4,8],[-3,8],[-2,8],[-1,8],[0,8],[1,8],[2,8],[3,8],[4,8],[5,8],[6,8],[7,8],[8,8],[9,8],[10,8],[11,8],[12,8],[13,8],[14,8],[15,8],[16,8],[17,8],[18,8],[-19,7],[-18,7],[-17,7],[-16,7],[-15,7],[-14,7],[-13,7],[-12,7],[-11,7],[-10,7],[-9,7],[-8,7],[-7,7],[-6,7],[-5,7],[-4,7],[-3,7],[-2,7],[-1,7],[0,7],[1,7],[2,7],[3,7],[4,7],[5,7],[6,7],[7,7],[8,7],[9,7],[10,7],[11,7],[12,7],[13,7],[14,7],[15,7],[16,7],[17,7],[18,7],[-19,6],[-18,6],[-17,6],[-16,6],[-15,6],[-14,6],[-13,6],[-12,6],[-11,6],[-10,6],[-9,6],[-8,6],[-7,6],[-6,6],[-5,6],[-4,6],[-3,6],[-2,6],[-1,6],[0,6],[1,6],[2,6],[3,6],[4,6],[5,6],[6,6],[7,6],[8,6],[9,6],[10,6],[11,6],[12,6],[13,6],[14,6],[15,6],[16,6],[17,6],[18,6],[-19,5],[-18,5],[-17,5],[-16,5],[-15,5],[-14,5],[-13,5],[-12,5],[-11,5],[-10,5],[-9,5],[-8,5],[-7,5],[-6,5],[-5,5],[-4,5],[-3,5],[-2,5],[-1,5],[0,5],[1,5],[2,5],[3,5],[4,5],[5,5],[6,5],[7,5],[8,5],[9,5],[10,5],[11,5],[12,5],[13,5],[14,5],[15,5],[16,5],[17,5],[18,5],[-19,4],[-18,4],[-17,4],[-16,4],[-15,4],[-14,4],[-13,4],[-12,4],[-11,4],[-10,4],[-9,4],[-8,4],[-7,4],[-6,4],[-5,4],[-4,4],[-3,4],[-2,4],[-1,4],[0,4],[1,4],[2,4],[3,4],[4,4],[5,4],[6,4],[7,4],[8,4],[9,4],[10,4],[11,4],[12,4],[13,4],[14,4],[15,4],[16,4],[17,4],[18,4],[-19,3],[-18,3],[-17,3],[-16,3],[-15,3],[-14,3],[-13,3],[-12,3],[-11,3],[-10,3],[-9,3],[-8,3],[-7,3],[-6,3],[-5,3],[-4,3],[-3,3],[-2,3],[-1,3],[0,3],[1,3],[2,3],[3,3],[4,3],[5,3],[6,3],[7,3],[8,3],[9,3],[10,3],[11,3],[12,3],[13,3],[14,3],[15,3],[16,3],[17,3],[18,3],[-19,2],[-18,2],[-17,2],[-16,2],[-15,2],[-14,2],[-13,2],[-12,2],[-11,2],[-10,2],[-9,2],[-8,2],[-7,2],[-6,2],[-5,2],[-4,2],[-3,2],[-2,2],[-1,2],[0,2],[1,2],[2,2],[3,2],[4,2],[5,2],[6,2],[7,2],[8,2],[9,2],[10,2],[11,2],[12,2],[13,2],[14,2],[15,2],[16,2],[17,2],[18,2],[-19,1],[-18,1],[-17,1],[-16,1],[-15,1],[-14,1],[-13,1],[-12,1],[-11,1],[-10,1],[-9,1],[-8,1],[-7,1],[-6,1],[-5,1],[-4,1],[-3,1],[-2,1],[-1,1],[0,1],[1,1],[2,1],[3,1],[4,1],[5,1],[6,1],[7,1],[8,1],[9,1],[10,1],[11,1],[12,1],[13,1],[14,1],[15,1],[16,1],[17,1],[18,1],[-19,0],[-18,0],[-17,0],[-16,0],[-15,0],[-14,0],[-13,0],[-12,0],[-11,0],[-10,0],[-9,0],[-8,0],[-7,0],[-6,0],[-5,0],[-4,0],[-3,0],[-2,0],[-1,0],[0,0],[1,0],[2,0],[3,0],[4,0],[5,0],[6,0],[7,0],[8,0],[9,0],[10,0],[11,0],[12,0],[13,0],[14,0],[15,0],[16,0],[17,0],[18,0],[-19,-1],[-18,-1],[-17,-1],[-16,-1],[-15,-1],[-14,-1],[-13,-1],[-12,-1],[-11,-1],[-10,-1],[-9,-1],[-8,-1],[-7,-1],[-6,-1],[-5,-1],[-4,-1],[-3,-1],[-2,-1],[-1,-1],[0,-1],[1,-1],[2,-1],[3,-1],[4,-1],[5,-1],[6,-1],[7,-1],[8,-1],[9,-1],[10,-1],[11,-1],[12,-1],[13,-1],[14,-1],[15,-1],[16,-1],[17,-1],[18,-1],[-19,-2],[-18,-2],[-17,-2],[-16,-2],[-15,-2],[-14,-2],[-13,-2],[-12,-2],[-11,-2],[-10,-2],[-9,-2],[-8,-2],[-7,-2],[-6,-2],[-5,-2],[-4,-2],[-3,-2],[-2,-2],[-1,-2],[0,-2],[1,-2],[2,-2],[3,-2],[4,-2],[5,-2],[6,-2],[7,-2],[8,-2],[9,-2],[10,-2],[11,-2],[12,-2],[13,-2],[14,-2],[15,-2],[16,-2],[17,-2],[18,-2],[-19,-3],[-18,-3],[-17,-3],[-16,-3],[-15,-3],[-14,-3],[-13,-3],[-12,-3],[-11,-3],[-10,-3],[-9,-3],[-8,-3],[-7,-3],[-6,-3],[-5,-3],[-4,-3],[-3,-3],[-2,-3],[-1,-3],[0,-3],[1,-3],[2,-3],[3,-3],[4,-3],[5,-3],[6,-3],[7,-3],[8,-3],[9,-3],[10,-3],[11,-3],[12,-3],[13,-3],[14,-3],[15,-3],[16,-3],[17,-3],[18,-3],[-19,-4],[-18,-4],[-17,-4],[-16,-4],[-15,-4],[-14,-4],[-13,-4],[-12,-4],[-11,-4],[-10,-4],[-9,-4],[-8,-4],[-7,-4],[-6,-4],[-5,-4],[-4,-4],[-3,-4],[-2,-4],[-1,-4],[0,-4],[1,-4],[2,-4],[3,-4],[4,-4],[5,-4],[6,-4],[7,-4],[8,-4],[9,-4],[10,-4],[11,-4],[12,-4],[13,-4],[14,-4],[15,-4],[16,-4],[17,-4],[18,-4],[-19,-5],[-18,-5],[-17,-5],[-16,-5],[-15,-5],[-14,-5],[-13,-5],[-12,-5],[-11,-5],[-10,-5],[-9,-5],[-8,-5],[-7,-5],[-6,-5],[-5,-5],[-4,-5],[-3,-5],[-2,-5],[-1,-5],[0,-5],[1,-5],[2,-5],[3,-5],[4,-5],[5,-5],[6,-5],[7,-5],[8,-5],[9,-5],[10,-5],[11,-5],[12,-5],[13,-5],[14,-5],[15,-5],[16,-5],[17,-5],[18,-5],[-19,-6],[-18,-6],[-17,-6],[-16,-6],[-15,-6],[-14,-6],[-13,-6],[-12,-6],[-11,-6],[-10,-6],[-9,-6],[-8,-6],[-7,-6],[-6,-6],[-5,-6],[-4,-6],[-3,-6],[-2,-6],[-1,-6],[0,-6],[1,-6],[2,-6],[3,-6],[4,-6],[5,-6],[6,-6],[7,-6],[8,-6],[9,-6],[10,-6],[11,-6],[12,-6],[13,-6],[14,-6],[15,-6],[16,-6],[17,-6],[18,-6],[-19,-7],[-18,-7],[-17,-7],[-16,-7],[-15,-7],[-14,-7],[-13,-7],[-12,-7],[-11,-7],[-10,-7],[-9,-7],[-8,-7],[-7,-7],[-6,-7],[-5,-7],[-4,-7],[-3,-7],[-2,-7],[-1,-7],[0,-7],[1,-7],[2,-7],[3,-7],[4,-7],[5,-7],[6,-7],[7,-7],[8,-7],[9,-7],[10,-7],[11,-7],[12,-7],[13,-7],[14,-7],[15,-7],[16,-7],[17,-7],[18,-7],[-19,-8],[-18,-8],[-17,-8],[-16,-8],[-15,-8],[-14,-8],[-13,-8],[-12,-8],[-11,-8],[-10,-8],[-9,-8],[-8,-8],[-7,-8],[-6,-8],[-5,-8],[-4,-8],[-3,-8],[-2,-8],[-1,-8],[0,-8],[1,-8],[2,-8],[3,-8],[4,-8],[5,-8],[6,-8],[7,-8],[8,-8],[9,-8],[10,-8],[11,-8],[12,-8],[13,-8],[14,-8],[15,-8],[16,-8],[17,-8],[18,-8],[-19,-9],[-18,-9],[-17,-9],[-16,-9],[-15,-9],[-14,-9],[-13,-9],[-12,-9],[-11,-9],[-10,-9],[-9,-9],[-8,-9],[-7,-9],[-6,-9],[-5,-9],[-4,-9],[-3,-9],[-2,-9],[-1,-9],[0,-9],[1,-9],[2,-9],[3,-9],[4,-9],[5,-9],[6,-9],[7,-9],[8,-9],[9,-9],[10,-9],[11,-9],[12,-9],[13,-9],[14,-9],[15,-9],[16,-9],[17,-9],[18,-9],[-19,-10],[-18,-10],[-17,-10],[-16,-10],[-15,-10],[-14,-10],[-13,-10],[-12,-10],[-11,-10],[-10,-10],[-9,-10],[-8,-10],[-7,-10],[-6,-10],[-5,-10],[-4,-10],[-3,-10],[-2,-10],[-1,-10],[0,-10],[1,-10],[2,-10],[3,-10],[4,-10],[5,-10],[6,-10],[7,-10],[8,-10],[9,-10],[10,-10],[11,-10],[12,-10],[13,-10],[14,-10],[15,-10],[16,-10],[17,-10],[18,-10],[-19,-11],[-18,-11],[-17,-11],[-16,-11],[-15,-11],[-14,-11],[-13,-11],[-12,-11],[-11,-11],[-10,-11],[-9,-11],[-8,-11],[-7,-11],[-6,-11],[-5,-11],[-4,-11],[-3,-11],[-2,-11],[-1,-11],[0,-11],[1,-11],[2,-11],[3,-11],[4,-11],[5,-11],[6,-11],[7,-11],[8,-11],[9,-11],[10,-11],[11,-11],[12,-11],[13,-11],[14,-11],[15,-11],[16,-11],[17,-11],[18,-11],[-19,-12],[-18,-12],[-17,-12],[-16,-12],[-15,-12],[-14,-12],[-13,-12],[-12,-12],[-11,-12],[-10,-12],[-9,-12],[-8,-12],[-7,-12],[-6,-12],[-5,-12],[-4,-12],[-3,-12],[-2,-12],[-1,-12],[0,-12],[1,-12],[2,-12],[3,-12],[4,-12],[5,-12],[6,-12],[7,-12],[8,-12],[9,-12],[10,-12],[11,-12],[12,-12],[13,-12],[14,-12],[15,-12],[16,-12],[17,-12],[18,-12],[-19,-13],[-18,-13],[-17,-13],[-16,-13],[-15,-13],[-14,-13],[-13,-13],[-12,-13],[-11,-13],[-10,-13],[-9,-13],[-8,-13],[-7,-13],[-6,-13],[-5,-13],[-4,-13],[-3,-13],[-2,-13],[-1,-13],[0,-13],[1,-13],[2,-13],[3,-13],[4,-13],[5,-13],[6,-13],[7,-13],[8,-13],[9,-13],[10,-13],[11,-13],[12,-13],[13,-13],[14,-13],[15,-13],[16,-13],[17,-13],[18,-13],[-19,-14],[-18,-14],[-17,-14],[-16,-14],[-15,-14],[-14,-14],[-13,-14],[-12,-14],[-11,-14],[-10,-14],[-9,-14],[-8,-14],[-7,-14],[-6,-14],[-5,-14],[-4,-14],[-3,-14],[-2,-14],[-1,-14],[0,-14],[1,-14],[2,-14],[3,-14],[4,-14],[5,-14],[6,-14],[7,-14],[8,-14],[9,-14],[10,-14],[11,-14],[12,-14],[13,-14],[14,-14],[15,-14],[16,-14],[17,-14],[18,-14],[-19,-15],[-18,-15],[-17,-15],[-16,-15],[-15,-15],[-14,-15],[-13,-15],[-12,-15],[-11,-15],[-10,-15],[-9,-15],[-8,-15],[-7,-15],[-6,-15],[-5,-15],[-4,-15],[-3,-15],[-2,-15],[-1,-15],[0,-15],[1,-15],[2,-15],[3,-15],[4,-15],[5,-15],[6,-15],[7,-15],[8,-15],[9,-15],[10,-15],[11,-15],[12,-15],[13,-15],[14,-15],[15,-15],[16,-15],[17,-15],[18,-15],[-19,-16],[-18,-16],[-17,-16],[-16,-16],[-15,-16],[-14,-16],[-13,-16],[-12,-16],[-11,-16],[-10,-16],[-9,-16],[-8,-16],[-7,-16],[-6,-16],[-5,-16],[-4,-16],[-3,-16],[-2,-16],[-1,-16],[0,-16],[1,-16],[2,-16],[3,-16],[4,-16],[5,-16],[6,-16],[7,-16],[8,-16],[9,-16],[10,-16],[11,-16],[12,-16],[13,-16],[14,-16],[15,-16],[16,-16],[17,-16],[18,-16],[-19,-17],[-18,-17],[-17,-17],[-16,-17],[-15,-17],[-14,-17],[-13,-17],[-12,-17],[-11,-17],[-10,-17],[-9,-17],[-8,-17],[-7,-17],[-6,-17],[-5,-17],[-4,-17],[-3,-17],[-2,-17],[-1,-17],[0,-17],[1,-17],[2,-17],[3,-17],[4,-17],[5,-17],[6,-17],[7,-17],[8,-17],[9,-17],[10,-17],[11,-17],[12,-17],[13,-17],[14,-17],[15,-17],[16,-17],[17,-17],[18,-17],[-19,-18],[-18,-18],[-17,-18],[-16,-18],[-15,-18],[-14,-18],[-13,-18],[-12,-18],[-11,-18],[-10,-18],[-9,-18],[-8,-18],[-7,-18],[-6,-18],[-5,-18],[-4,-18],[-3,-18],[-2,-18],[-1,-18],[0,-18],[1,-18],[2,-18],[3,-18],[4,-18],[5,-18],[6,-18],[7,-18],[8,-18],[9,-18],[10,-18],[11,-18],[12,-18],[13,-18],[14,-18],[15,-18],[16,-18],[17,-18],[18,-18]]] },
  {name: "explode", setxy: "no", setxycoords: [19,19], xy: [[[0,0]],[[0,1],[-1,0],[1,0],[0,-1]],[[0,2],[-1,1],[1,1],[-2,0],[2,0],[-1,-1],[1,-1],[0,-2]],[[0,3],[-1,2],[1,2],[-2,1],[2,1],[-3,0],[3,0],[-2,-1],[2,-1],[-1,-2],[1,-2],[0,-3]],[[0,4],[-1,3],[1,3],[-2,2],[2,2],[-3,1],[3,1],[-4,0],[4,0],[-3,-1],[3,-1],[-2,-2],[2,-2],[-1,-3],[1,-3],[0,-4]],[[0,5],[-1,4],[1,4],[-4,1],[4,1],[-5,0],[5,0],[-4,-1],[4,-1],[-1,-4],[1,-4],[0,-5]],[[-1,6],[1,6],[-2,5],[-1,5],[1,5],[2,5],[-5,2],[5,2],[-6,1],[-5,1],[5,1],[6,1],[-6,-1],[-5,-1],[5,-1],[6,-1],[-5,-2],[5,-2],[-2,-5],[-1,-5],[1,-5],[2,-5],[-1,-6],[1,-6]],[[-1,6],[1,6],[-2,5],[2,5],[-5,2],[5,2],[-6,1],[6,1],[-6,-1],[6,-1],[-5,-2],[5,-2],[-2,-5],[2,-5],[-1,-6],[1,-6]]]},
  {name: "explode", setxy: "no", setxycoords: [19,19], xy: [[[0,0]],[[0,1],[-1,0],[1,0],[0,-1]],[[0,2],[-1,1],[1,1],[-2,0],[2,0],[-1,-1],[1,-1],[0,-2]],[[0,3],[-1,2],[1,2],[-2,1],[2,1],[-3,0],[3,0],[-2,-1],[2,-1],[-1,-2],[1,-2],[0,-3]],[[0,4],[-1,3],[1,3],[-2,2],[2,2],[-3,1],[3,1],[-4,0],[4,0],[-3,-1],[3,-1],[-2,-2],[2,-2],[-1,-3],[1,-3],[0,-4]],[[0,5],[-1,4],[1,4],[-4,1],[4,1],[-5,0],[5,0],[-4,-1],[4,-1],[-1,-4],[1,-4],[0,-5]],[[-1,6],[1,6],[-2,5],[-1,5],[1,5],[2,5],[-5,2],[5,2],[-6,1],[-5,1],[5,1],[6,1],[-6,-1],[-5,-1],[5,-1],[6,-1],[-5,-2],[5,-2],[-2,-5],[-1,-5],[1,-5],[2,-5],[-1,-6],[1,-6]],[[-1,6],[1,6],[-2,5],[2,5],[-5,2],[5,2],[-6,1],[6,1],[-6,-1],[6,-1],[-5,-2],[5,-2],[-2,-5],[2,-5],[-1,-6],[1,-6]]]},
  {name: "explode", setxy: "no", setxycoords: [19,19], xy: [[[0,0]],[[0,1],[-1,0],[1,0],[0,-1]],[[0,2],[-1,1],[1,1],[-2,0],[2,0],[-1,-1],[1,-1],[0,-2]],[[0,3],[-1,2],[1,2],[-2,1],[2,1],[-3,0],[3,0],[-2,-1],[2,-1],[-1,-2],[1,-2],[0,-3]],[[0,4],[-1,3],[1,3],[-2,2],[2,2],[-3,1],[3,1],[-4,0],[4,0],[-3,-1],[3,-1],[-2,-2],[2,-2],[-1,-3],[1,-3],[0,-4]],[[0,5],[-1,4],[1,4],[-4,1],[4,1],[-5,0],[5,0],[-4,-1],[4,-1],[-1,-4],[1,-4],[0,-5]],[[-1,6],[1,6],[-2,5],[-1,5],[1,5],[2,5],[-5,2],[5,2],[-6,1],[-5,1],[5,1],[6,1],[-6,-1],[-5,-1],[5,-1],[6,-1],[-5,-2],[5,-2],[-2,-5],[-1,-5],[1,-5],[2,-5],[-1,-6],[1,-6]],[[-1,6],[1,6],[-2,5],[2,5],[-5,2],[5,2],[-6,1],[6,1],[-6,-1],[6,-1],[-5,-2],[5,-2],[-2,-5],[2,-5],[-1,-6],[1,-6]]]},
  {name: "explode", setxy: "no", setxycoords: [19,19], xy: [[[0,0]],[[0,1],[-1,0],[1,0],[0,-1]],[[0,2],[-1,1],[1,1],[-2,0],[2,0],[-1,-1],[1,-1],[0,-2]],[[0,3],[-1,2],[1,2],[-2,1],[2,1],[-3,0],[3,0],[-2,-1],[2,-1],[-1,-2],[1,-2],[0,-3]],[[0,4],[-1,3],[1,3],[-2,2],[2,2],[-3,1],[3,1],[-4,0],[4,0],[-3,-1],[3,-1],[-2,-2],[2,-2],[-1,-3],[1,-3],[0,-4]],[[0,5],[-1,4],[1,4],[-4,1],[4,1],[-5,0],[5,0],[-4,-1],[4,-1],[-1,-4],[1,-4],[0,-5]],[[-1,6],[1,6],[-2,5],[-1,5],[1,5],[2,5],[-5,2],[5,2],[-6,1],[-5,1],[5,1],[6,1],[-6,-1],[-5,-1],[5,-1],[6,-1],[-5,-2],[5,-2],[-2,-5],[-1,-5],[1,-5],[2,-5],[-1,-6],[1,-6]],[[-1,6],[1,6],[-2,5],[2,5],[-5,2],[5,2],[-6,1],[6,1],[-6,-1],[6,-1],[-5,-2],[5,-2],[-2,-5],[2,-5],[-1,-6],[1,-6]]]},
  {name: "explode", setxy: "no", setxycoords: [19,19], xy: [[[0,0]],[[0,1],[-1,0],[1,0],[0,-1]],[[0,2],[-1,1],[1,1],[-2,0],[2,0],[-1,-1],[1,-1],[0,-2]],[[0,3],[-1,2],[1,2],[-2,1],[2,1],[-3,0],[3,0],[-2,-1],[2,-1],[-1,-2],[1,-2],[0,-3]],[[0,4],[-1,3],[1,3],[-2,2],[2,2],[-3,1],[3,1],[-4,0],[4,0],[-3,-1],[3,-1],[-2,-2],[2,-2],[-1,-3],[1,-3],[0,-4]],[[0,5],[-1,4],[1,4],[-4,1],[4,1],[-5,0],[5,0],[-4,-1],[4,-1],[-1,-4],[1,-4],[0,-5]],[[-1,6],[1,6],[-2,5],[-1,5],[1,5],[2,5],[-5,2],[5,2],[-6,1],[-5,1],[5,1],[6,1],[-6,-1],[-5,-1],[5,-1],[6,-1],[-5,-2],[5,-2],[-2,-5],[-1,-5],[1,-5],[2,-5],[-1,-6],[1,-6]],[[-1,6],[1,6],[-2,5],[2,5],[-5,2],[5,2],[-6,1],[6,1],[-6,-1],[6,-1],[-5,-2],[5,-2],[-2,-5],[2,-5],[-1,-6],[1,-6]]]},
  {name: "explode", setxy: "no", setxycoords: [19,19], xy: [[[0,0]],[[0,1],[-1,0],[1,0],[0,-1]],[[0,2],[-1,1],[1,1],[-2,0],[2,0],[-1,-1],[1,-1],[0,-2]],[[0,3],[-1,2],[1,2],[-2,1],[2,1],[-3,0],[3,0],[-2,-1],[2,-1],[-1,-2],[1,-2],[0,-3]],[[0,4],[-1,3],[1,3],[-2,2],[2,2],[-3,1],[3,1],[-4,0],[4,0],[-3,-1],[3,-1],[-2,-2],[2,-2],[-1,-3],[1,-3],[0,-4]],[[0,5],[-1,4],[1,4],[-4,1],[4,1],[-5,0],[5,0],[-4,-1],[4,-1],[-1,-4],[1,-4],[0,-5]],[[-1,6],[1,6],[-2,5],[-1,5],[1,5],[2,5],[-5,2],[5,2],[-6,1],[-5,1],[5,1],[6,1],[-6,-1],[-5,-1],[5,-1],[6,-1],[-5,-2],[5,-2],[-2,-5],[-1,-5],[1,-5],[2,-5],[-1,-6],[1,-6]],[[-1,6],[1,6],[-2,5],[2,5],[-5,2],[5,2],[-6,1],[6,1],[-6,-1],[6,-1],[-5,-2],[5,-2],[-2,-5],[2,-5],[-1,-6],[1,-6]]]}

]

$scope.setPreset = function(index, xvar) {
  //alert(index);
  $scope.selectedpreset = index;

  //sets preset to edit
  if(xvar == "edit"){
    $scope.selectedpreset = 0;
  }
  // sets preset to paint...
  if(xvar == "paint"){
    $scope.selectedpreset = 1;
  }


  document.getElementById('preset'+$scope.laspreset).style.backgroundColor = "#BDBDBD";
  document.getElementById('preset'+$scope.laspreset).style.color = "black";
  $scope.laspreset = index;
  document.getElementById('preset'+index).style.backgroundColor = "#66BB6A";
  document.getElementById('preset'+index).style.color = "white";

}



$scope.presetarray = [];

$scope.createpreset = function() {
  $scope.presetarray = [];

  for(frame=0; frame<$scope.numberofFrames; frame++){
    $scope.presetarray.push([]);
     for (row=0; row<38; row++) {
       for (seat=0; seat< 38; seat++) {
         if($scope.frames[frame][row][seat] != 0){
           $scope.presetarray[frame].push([seat - 19, 19 - row]);
         }
       }
     }
   }

$scope.presetdivs.push({name: "wee", setxy:"no", setxycoords: [], xy: $scope.presetarray });

}

//determines if the preset center div is shown
$scope.presetcentertoggleTF = true;

//for pushing arrays to seats

$scope.stadiumSeatSquareArray = [

];

//pushes colors from each square to the seat arrays.
$scope.pushtoSeats = function() {
     $scope.stadiumSeatSquareArray = [];
     for (row=0; row<38; row++) {
       $scope.stadiumSeatSquareArray.push([]);
       for (seat=0; seat< 38; seat++) {
         $scope.stadiumSeatSquareArray[row].push([]);
         for(frame=0; frame<$scope.numberofFrames; frame++){
           $scope.stadiumSeatSquareArray[row][seat].push([]);
           $scope.stadiumSeatSquareArray[row][seat][frame] = $scope.frames[frame][row][seat];
         }
       }
     }
};

$scope.audioElementVar = document.getElementById('audioElement');

$scope.musicfunction = function(argument, time) {

  if(argument == "play"){
    $scope.audioElementVar.play();
  }else if(argument == "pause"){
    $scope.audioElementVar.pause();
  }else if(argument == "volup"){
    $scope.audioElementVar.volume+=0.1;
  }else if(argument == "voldown"){
    $scope.audioElementVar.volume-=0.1;
  }else if(argument == "mute"){
    $scope.audioElementVar.volume=0;
  }else if(argument == "setTime"){
    $scope.audioElementVar.currentTime = time;
    $scope.audioElementVar.play();
  }else if(argument == "startBeginning"){
    $scope.audioElementVar.currentTime=0;
    $scope.audioElementVar.play();
  }else if(argument == "songdurration"){
    //multiply times 10 because the song is set in terms of seconds
    $scope.numberofFrames = ($scope.audioElementVar.duration * 10) + 50;

  }

}


});

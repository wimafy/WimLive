<html lang="en" ng-app="wim">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>WIM(afy)</title>

        <link href="bower_components/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">
		<link href="css/wimmain.css" rel="stylesheet">
		<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
		<link href="bower_components/chosen/chosen.css" rel="stylesheet">
	  
		<script src="bower_components/angular/angular.min.js"></script>
		<script src="bower_components/ng-file-upload-shim/ng-file-upload-shim.min.js"></script>
        <script src="bower_components/ng-file-upload/ng-file-upload.min.js"></script>
        <script src="bower_components/lodash/lodash.js"></script>
        <script src="bower_components/angular-route/angular-route.min.js"></script>
        <script src="bower_components/angular-local-storage/dist/angular-local-storage.min.js"></script>
        <script src="bower_components/restangular/dist/restangular.min.js"></script>
		
		<script src = "js/app.js"></script>
		<script src = "js/services.js"></script>
		<script src = "js/controllers.js"></script>
		<script src = "js/checkPass.js"></script>
		<script src = "js/signupValidation.js"></script>
		<script src = "js/dropdown.js"></script>
		<script src = "js/profileActions.js"></script>

        
        <!--loading screen icon -->
        <!-- old jquery (it works though)
        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.5.2/jquery.min.js"></script>-->
        <script src="https://code.jquery.com/jquery-1.10.2.js"></script>
        <script src="http://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.2/modernizr.js"></script>

        <script>
        //paste this code under the head tag or in a separate js file.
            // Wait for window load
            $(window).load(function() {
                // Animate loader off screen
                $(".se-pre-con").fadeOut("slow");;
            });
            
        </script>
        
        <!-- end loading screen -->
        
        <style>
            
            li {
                padding-bottom: 8px;
            }

        </style>
        
             
        <script>
            function checkifpageisloaded() {
                $(document).ready(function(){
                    console.log("document is ready");
                });
            }


            checkifpageisloaded();
        </script>
        
        
    </head>
    
    <div class="se-pre-con"></div>

    <body style="background-color: lightgray;">		
    <div class="indexbladewholediv">
    <!-- shell-->
        <div id="fullpage1currentwims" class="fullpage1currentwims">
            <div class="headerdiv">
                <div class="headerbackarrow" onclick="backfullpage1currentwims()">
                    <i id="headerbackarrowicon" class="material-icons">&#xE314;</i>
                </div>
                <h1 class="headerpagetitle">Current WIMs</h1>

            </div>
        </div>


        <div id="fullpage2myprofile" class="fullpage2myprofile">
            <div class="headerdiv">
                <a onclick="backfullpage2myprofile()" href="#/">
                    <div class="headerbackarrow">
                        <i id="headerbackarrowicon" class="material-icons">&#xE314;</i>
                    </div>
                </a>

                <h1 class="headerpagetitle"> Profile</h1>
                <i id="profiletopactioncircleicon" class="material-icons" style="margin-right: 10px;">&#xE7FE;</i>
                <i id="profiletopactioncircleicon" class="material-icons">&#xE0C9;</i>
            </div>
        </div>


        <div id="fullpage3newwim" class="fullpage3newwim">
            <div class="headerdiv">
                <a onclick="backfullpage3newwim()" href="#/">
                    <div class="headerbackarrow">
                        <i id="headerbackarrowicon" class="material-icons">&#xE314;</i>
                    </div>
                </a>
                <h1 class="headerpagetitle">New WIM</h1>
            </div>
        </div>


        <div id="fullpage4search" class="fullpage4search">
            <div class="headerdiv">
                <a onclick="backfullpage4search()" href="#/">
                    <div class="headerbackarrow">
                        <i id="headerbackarrowicon" class="material-icons">&#xE314;</i>
                    </div>
                </a>
                <h1 class="headerpagetitle">Search any Users</h1>
            </div>
        </div>


        <div id="fullpage5notifications" class="fullpage5notifications">
            <div class="headerdiv">
                <a onclick="backfullpage5notifications()" href="#/">
                    <div class="headerbackarrow">
                        <i id="headerbackarrowicon" class="material-icons">&#xE314;</i>
                    </div>
                </a>

                <h1 class="headerpagetitle">Notifications</h1>
            </div>
        </div>
    <!-- end of shell-->
        
		<div id="ngviewdiv" ng-view></div>
		
    </div>    
        
		<script src="bower_components/jquery/dist/jquery.min.js"></script>
		<script src="bower_components/chosen/chosen.jquery.js" type="text/javascript"></script>
        <script src="bower_components/bootstrap/dist/js/bootstrap.min.js"></script>

		<script type="text/javascript">
			$(document).ready(function(){
				$(".chosen-select").chosen();
			});
               
		</script>
        <script>
    
            function fullpage1currentwims() {
                //alert("anything");
                document.getElementById("fullpage1currentwims").classList.add('pagetransitionIN');
                
                alert("very first");
                document.getElementById("fullpage1currentwims").classList.remove('pagetransitionOUT');
                
                alert('before');
                 
                setTimeout(function(){ 
                
                    alert('after');
                
                    window.location.assign("#currentWims");

                    checkifpageisloaded();
                    
                    document.getElementById("fullpage1currentwims").classList.add('pagezindexIN');
                   
                    alert("alert2");
                    document.getElementById("fullpage1currentwims").classList.remove('pagezindexOUT');
                    
                    alert("last");
                
                }, 100);
                
                
            }

            function backfullpage1currentwims() {
                //alert("anything");
               
                window.location.assign("#/");
                document.getElementById("fullpage1currentwims").classList.add('pagetransitionOUT');
               document.getElementById("fullpage1currentwims").classList.remove('pagetransitionIN');
               
                
               checkifpageisloaded();
                
               
               document.getElementById("fullpage1currentwims").classList.add('pagezindexOUT');
               document.getElementById("fullpage1currentwims").classList.remove('pagezindexIN');
                
                
            }

            function fullpage2myprofile() {
                //alert("anything");
                checkifpageisloaded();
                document.getElementById("fullpage2myprofile").classList.add('pagetransitionIN');
                document.getElementById("fullpage2myprofile").classList.remove('pagetransitionOUT');
            }

            function backfullpage2myprofile() {
                //alert("anything");
                checkifpageisloaded();
                document.getElementById("fullpage2myprofile").classList.add('pagetransitionOUT');
                document.getElementById("fullpage2myprofile").classList.remove('pagetransitionIN');
            }

            function fullpage3newwim() {
                //alert("anything");
                checkifpageisloaded();
                document.getElementById("fullpage3newwim").classList.add('pagetransitionIN');
                document.getElementById("fullpage3newwim").classList.remove('pagetransitionOUt');
            }

            function backfullpage3newwim() {
                //alert("anything");
                checkifpageisloaded();
                document.getElementById("fullpage3newwim").classList.add('pagetransitionOUT');
                document.getElementById("fullpage3newwim").classList.remove('pagetransitionIN');
            }

             function fullpage4search() {
                //alert("anything");
                checkifpageisloaded();
                document.getElementById("fullpage4search").classList.add('pagetransitionIN');
                 document.getElementById("fullpage4search").classList.remove('pagetransitionOUT');
            }

            function backfullpage4search() {
                //alert("anything");
                checkifpageisloaded();
                document.getElementById("fullpage4search").classList.add('pagetransitionOUT');
                document.getElementById("fullpage4search").classList.remove('pagetransitionIN');
            }

            function fullpage5notifications() {
                //alert("anything");
                checkifpageisloaded();
                document.getElementById("fullpage5notifications").classList.add('pagetransitionIN');
                 document.getElementById("fullpage5notifications").classList.remove('pagetransitionOUT');
            }

            function backfullpage5notifications() {
                //alert("anything");
                checkifpageisloaded();
                document.getElementById("fullpage5notifications").classList.add('pagetransitionOUT');
                document.getElementById("fullpage5notifications").classList.remove('pagetransitionIN');
            }     

        </script>
        
    </body>
    
</html>


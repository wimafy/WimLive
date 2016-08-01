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
        
        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.5.2/jquery.min.js"></script>
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
    </head>
    
    <div class="se-pre-con"></div>

    <body style="background-color: lightgray;">		
        
        
  
		<div ng-view></div>
		
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
                document.getElementById("fullpage1currentwims").classList.remove('pagetransitionOUT');
            }

            function backfullpage1currentwims() {
                //alert("anything");
               document.getElementById("fullpage1currentwims").classList.add('pagetransitionOUT');
               document.getElementById("fullpage1currentwims").classList.remove('pagetransitionIN');
            }

            function fullpage2myprofile() {
                //alert("anything");
                document.getElementById("fullpage2myprofile").classList.add('pagetransitionIN');
                document.getElementById("fullpage2myprofile").classList.remove('pagetransitionOUT');
            }

            function backfullpage2myprofile() {
                //alert("anything");
                document.getElementById("fullpage2myprofile").classList.add('pagetransitionOUT');
                document.getElementById("fullpage2myprofile").classList.remove('pagetransitionIN');
            }

            function fullpage3newwim() {
                //alert("anything");
                document.getElementById("fullpage3newwim").classList.add('pagetransitionIN');
                document.getElementById("fullpage3newwim").classList.remove('pagetransitionOUt');
            }

            function backfullpage3newwim() {
                //alert("anything");
                document.getElementById("fullpage3newwim").classList.add('pagetransitionOUT');
                document.getElementById("fullpage3newwim").classList.remove('pagetransitionIN');
            }

             function fullpage4search() {
                //alert("anything");
                document.getElementById("fullpage4search").classList.add('pagetransitionIN');
                 document.getElementById("fullpage4search").classList.remove('pagetransitionOUT');
            }

            function backfullpage4search() {
                //alert("anything");
                document.getElementById("fullpage4search").classList.add('pagetransitionOUT');
                document.getElementById("fullpage4search").classList.remove('pagetransitionIN');
            }

            function fullpage5notifications() {
                //alert("anything");
                document.getElementById("fullpage5notifications").classList.add('pagetransitionIN');
                 document.getElementById("fullpage5notifications").classList.remove('pagetransitionOUT');
            }

            function backfullpage5notifications() {
                //alert("anything");
                document.getElementById("fullpage5notifications").classList.add('pagetransitionOUT');
                document.getElementById("fullpage5notifications").classList.remove('pagetransitionIN');
            }     

        </script>
        
    </body>
    
</html>


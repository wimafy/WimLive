<html lang="en" ng-app="wim">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0">
        
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
        
        <script src="https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyCyB6K1CFUQ1RwVJ-nyXxd6W0rfiIBe12Q" type="text/javascript"></script>
        <script language="JavaScript" src="http://www.geoplugin.net/javascript.gp" type="text/javascript"></script>
        <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
        
		<script src = "js/app.js"></script>
		<script src = "js/services.js"></script>
		<script src = "js/controllers.js"></script>
		<script src = "js/checkPass.js"></script>
		<script src = "js/signupValidation.js"></script>
		<script src = "js/dropdown.js"></script>
		<script src = "js/profileActions.js"></script>
        <script src = "js/newwim.js"></script>
        <script src = "js/indexpage.js"></script>
        <script src = "js/signup.js"></script>
        <script src = "js/modal.js"></script>
        <script src = "js/jqueryfunctions.js"></script>
        
        
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCyB6K1CFUQ1RwVJ-nyXxd6W0rfiIBe12Q&libraries=places&callback=initAutocomplete"
         async defer type="text/javascript"></script>
        
        <!--loading screen icon -->
        <!-- old jquery (it works though)
        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.5.2/jquery.min.js"></script>-->
        <script src="https://code.jquery.com/jquery-1.10.2.js"></script>
        <script src="https://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.js"></script>
        <script src="http://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.2/modernizr.js"></script>
        

        <script>
        //paste this code under the head tag or in a separate js file.
            // Wait for window load
            $(window).load(function() {
                // Animate loader off screen
                $(".se-pre-con").fadeOut("slow");;
            });
            
        </script>
        <script>
            $(document).on("pagecreate","#pageone",function(){
              $("p").on("swipeleft",function(){
                $(this).hide();
            alert("wee");
              });
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

    <body style="background-color: #EEEEEE;">		
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
                <div class="dropdown">
                    <div onclick="profilepagedropdownFunction()" class="dropbtn">
                        <i id="profiletopactioncircleicon" class="material-icons dropbtn">&#xE5D4;</i>
                    </div>
                </div>
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
        
        <div id="fullpageB1selectedWim" class="fullpageB1selectedWim">
            <div class="headerdiv">
                <a onclick="backfullpageB1selectedWim()">
                    <div class="headerbackarrow">
                        <i id="headerbackarrowicon" class="material-icons">&#xE314;</i>
                    </div>
                </a>

                <h1 class="headerpagetitle">Birthday (wim title)</h1>
                <i class="individualwimheadericon material-icons" style="line-height: 50px; font-size: 20px;">&#xE7E9;</i>

                <p class="individualwimheadercountdowntimer">2 Days</p>
            </div>
        </div>
        
        <div id="fullpageC1wholepagemap" class="fullpageC1wholepagemap">
            <div class="headerdiv">
                <a onclick="backfullpageC1wholepagemap()">
                    <div class="headerbackarrow">
                        <i id="headerbackarrowicon" class="material-icons">&#xE314;</i>
                    </div>
                    <h1 class="headerpagetitle">Birthday (wim.title)</h1>
                    <i class="individualwimheadericon material-icons" style="line-height: 50px; font-size: 20px;">&#xE7E9;</i>
                </a>

                <h1 class="headerpagetitle"></h1>

                <a href="https://www.google.com/maps/dir/''/google+maps+space+needle/@47.620485,-122.4193171,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x5490151f4ed5b7f9:0xdb2ba8689ed0920d!2m2!1d-122.3492774!2d47.6205063">
                    <i class="bigmapgetdirectionsicon material-icons" style="margin-right: 15px; font-size: 30px; line-height: 50px;">&#xE52E;</i>
                </a>

            </div>
        </div>
        
        
        <div id="loadinggiflevel1" class="loadinggiflevel1"></div>
        <div id="loadinggiflevel2" class="loadinggiflevel2"></div>
        <div id="loadinggiflevel3" class="loadinggiflevel3"></div>
             
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
        
        
        <!-- script for page movement -->
        <script>
    
            function fullpage1currentwims() {
                console.log("anything");
                document.getElementById("fullpage1currentwims").classList.remove('pagetransitionOUT');
                document.getElementById("fullpage1currentwims").classList.add('pagetransitionIN');
                
                document.getElementById("loadinggiflevel1").classList.add('pagetransitionIN');
                 
                setTimeout(function(){ 
                
                    window.location.assign("#currentWims");
                    
                   $(document).ready(function(){
                       document.getElementById("loadinggiflevel1").classList.add('loadinggifOUTlevel1');
                    });
                
                }, 100);  
                
            }

            
            function backfullpage1currentwims() {
                document.getElementById("ngviewdiv").classList.add('ngviewtransitionout');
                document.getElementById("fullpage1currentwims").classList.remove('pagetransitionIN');
                document.getElementById("fullpage1currentwims").classList.add('pagetransitionOUT');

                window.location.assign("#/");
              
                   $(document).ready(function(){
                       document.getElementById("loadinggiflevel1").classList.add('killopacity');
                       document.getElementById("loadinggiflevel1").classList.remove('loadinggifOUTlevel1');
                    });

              setTimeout(function(){ 
                  document.getElementById("loadinggiflevel1").classList.remove('pagetransitionIN');
                  document.getElementById("loadinggiflevel1").classList.remove('killopacity');
              }, 100);
                
            }
            
    

            function fullpage2myprofile() {
               
                 console.log("anything");
                document.getElementById("fullpage2myprofile").classList.remove('pagetransitionOUT');
                document.getElementById("fullpage2myprofile").classList.add('pagetransitionIN');
                
                document.getElementById("loadinggiflevel1").classList.add('pagetransitionIN');
                 
                setTimeout(function(){ 
                
                    window.location.assign("#profile");
                    
                   $(document).ready(function(){
                       document.getElementById("loadinggiflevel1").classList.add('loadinggifOUTlevel1');
                       

                    });
                
                }, 100);    
            }

            
            function backfullpage2myprofile() {
                 document.getElementById("ngviewdiv").classList.add('ngviewtransitionout');
                document.getElementById("fullpage2myprofile").classList.remove('pagetransitionIN');
                document.getElementById("fullpage2myprofile").classList.add('pagetransitionOUT');

                window.location.assign("#/");

                   $(document).ready(function(){
                       document.getElementById("loadinggiflevel1").classList.add('killopacity');
                       document.getElementById("loadinggiflevel1").classList.remove('loadinggifOUTlevel1');

                    });
                
                
              setTimeout(function(){ 
                  document.getElementById("loadinggiflevel1").classList.remove('pagetransitionIN');
                  document.getElementById("loadinggiflevel1").classList.remove('killopacity');
              }, 100);
            }

            
            
            function fullpage3newwim() {
                  console.log("anything");
                document.getElementById("fullpage3newwim").classList.remove('pagetransitionOUT');
                document.getElementById("fullpage3newwim").classList.add('pagetransitionIN');
                document.getElementById("loadinggiflevel1").classList.add('pagetransitionIN');
                 
                setTimeout(function(){ 
                
                    window.location.assign("#newWim");
                    
                   $(document).ready(function(){
                       document.getElementById("loadinggiflevel1").classList.add('loadinggifOUTlevel1');

                    });
                
                }, 100);  
            }

            
            function backfullpage3newwim() {
                document.getElementById("ngviewdiv").classList.add('ngviewtransitionout');
                document.getElementById("fullpage3newwim").classList.remove('pagetransitionIN');
                document.getElementById("fullpage3newwim").classList.add('pagetransitionOUT');
                
                window.location.assign("#/");
     
                   $(document).ready(function(){
                       document.getElementById("loadinggiflevel1").classList.add('killopacity');
                       document.getElementById("loadinggiflevel1").classList.remove('loadinggifOUTlevel1');

                    });
                
                
              setTimeout(function(){ 
                  document.getElementById("loadinggiflevel1").classList.remove('pagetransitionIN');
                  document.getElementById("loadinggiflevel1").classList.remove('killopacity');
              }, 100);
            }

            
             function fullpage4search() {
                  console.log("anything");
                document.getElementById("fullpage4search").classList.remove('pagetransitionOUT');
                document.getElementById("fullpage4search").classList.add('pagetransitionIN');
                 document.getElementById("loadinggiflevel1").classList.add('pagetransitionIN');
                 
                setTimeout(function(){ 
                
                    window.location.assign("#friendSearch");
                    
                   $(document).ready(function(){
                       document.getElementById("loadinggiflevel1").classList.add('loadinggifOUTlevel1');

                    });
                
                }, 100);  
            }

            function backfullpage4search() {
                document.getElementById("ngviewdiv").classList.add('ngviewtransitionout');
                document.getElementById("fullpage4search").classList.remove('pagetransitionIN');
                document.getElementById("fullpage4search").classList.add('pagetransitionOUT');
                
                window.location.assign("#/");
     
                   $(document).ready(function(){
                         document.getElementById("loadinggiflevel1").classList.add('killopacity');
                       document.getElementById("loadinggiflevel1").classList.remove('loadinggifOUTlevel1');

                    });
                
                
              setTimeout(function(){ 
                  document.getElementById("loadinggiflevel1").classList.remove('pagetransitionIN');
                  
                  document.getElementById("loadinggiflevel1").classList.remove('killopacity');
              }, 100);
            }

            function fullpage5notifications() {
                  console.log("anything");
                document.getElementById("fullpage5notifications").classList.remove('pagetransitionOUT');
                document.getElementById("fullpage5notifications").classList.add('pagetransitionIN');
                
                document.getElementById("loadinggiflevel1").classList.add('pagetransitionIN');
                 
                setTimeout(function(){ 
                
                    window.location.assign("#notify");
                    
                   $(document).ready(function(){
                       document.getElementById("loadinggiflevel1").classList.add('loadinggifOUTlevel1');

                    });
                
                }, 100);  
            }

            function backfullpage5notifications() {
                  document.getElementById("ngviewdiv").classList.add('ngviewtransitionout');
                
               document.getElementById("fullpage5notifications").classList.remove('pagetransitionIN');
                document.getElementById("fullpage5notifications").classList.add('pagetransitionOUT');
    
              
                window.location.assign("#/");
              
                    
                   $(document).ready(function(){
                        
                       document.getElementById("loadinggiflevel1").classList.add('killopacity');
                       document.getElementById("loadinggiflevel1").classList.remove('loadinggifOUTlevel1');

                    });
                
                
              setTimeout(function(){ 
                  document.getElementById("loadinggiflevel1").classList.remove('pagetransitionIN');
                  
                  document.getElementById("loadinggiflevel1").classList.remove('killopacity');
              }, 100);
            }     

            
            
            function fullpageB1selectedWim() {
                  console.log("anything");
                document.getElementById("fullpageB1selectedWim").classList.remove('pagetransitionOUT');
                document.getElementById("fullpageB1selectedWim").classList.add('pagetransitionIN');
                
                document.getElementById("loadinggiflevel2").classList.add('pagetransitionIN');
                 
                setTimeout(function(){ 
                
                    window.location.assign("#selectedWim");
                    
                   $(document).ready(function(){
                       document.getElementById("loadinggiflevel2").classList.add('loadinggifOUTlevel2');

                    });
                
                }, 100);  
            }

            function backfullpageB1selectedWim() {
                  document.getElementById("ngviewdiv").classList.add('ngviewtransitionout');
                
               document.getElementById("fullpageB1selectedWim").classList.remove('pagetransitionIN');
                document.getElementById("fullpageB1selectedWim").classList.add('pagetransitionOUT');
    
              
                window.location.assign("#/");
              
                    
                   $(document).ready(function(){
                        
                       document.getElementById("loadinggiflevel2").classList.add('killopacity');
                       document.getElementById("loadinggiflevel2").classList.remove('loadinggifOUTlevel2');

                    });
                
                
              setTimeout(function(){ 
                  document.getElementById("loadinggiflevel2").classList.remove('pagetransitionIN');
                  
                  document.getElementById("loadinggiflevel2").classList.remove('killopacity');
              }, 100);
            }  
            
            
           function fullpageC1wholepagemap() {
                  console.log("anything");
                document.getElementById("fullpageC1wholepagemap").classList.remove('pagetransitionOUT');
                document.getElementById("fullpageC1wholepagemap").classList.add('pagetransitionIN');
                
                document.getElementById("loadinggiflevel3").classList.add('pagetransitionIN');
                 
                setTimeout(function(){ 
                
                    window.location.assign("#testMap");
                    
                   $(document).ready(function(){
                       document.getElementById("loadinggiflevel3").classList.add('loadinggifOUTlevel3');

                    });
                
                }, 100);  
            }

            function backfullpageC1wholepagemap() {
                  document.getElementById("ngviewdiv").classList.add('ngviewtransitionout');
                
               document.getElementById("fullpageC1wholepagemap").classList.remove('pagetransitionIN');
                document.getElementById("fullpageC1wholepagemap").classList.add('pagetransitionOUT');
    
              
                window.location.assign("#/selectedWim");
              
                    
                   $(document).ready(function(){
                        
                       document.getElementById("loadinggiflevel3").classList.add('killopacity');
                       document.getElementById("loadinggiflevel3").classList.remove('loadinggifOUTlevel3');

                    });
                
                
              setTimeout(function(){ 
                  document.getElementById("loadinggiflevel3").classList.remove('pagetransitionIN');
                  
                  document.getElementById("loadinggiflevel3").classList.remove('killopacity');
              }, 100);
            }  
            
            
            

        </script>
        
    </body>
    
</html>


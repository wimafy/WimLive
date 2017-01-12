
<?php


$servername = "localhost";
$username = "root";
$password = "";
$dbname = "lightsappdatabase";

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

$userIDnumber = $request->userID;
$newSongName = 'something';

//$userIDnumber = 32;


// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


//for loading songs
$sql = "INSERT INTO `songs` (`songID`, `UserOwnerID`, `lastEditDate`, `songTitle`, `durration`, `filepath`) VALUES (NULL, $userIDnumber, '3722', $newSongName, '3:47', 'yepp.mp3');";
$result = $conn->query($sql);


if ($result) {

    echo("you win");

} else {
    echo "0 results";
}


//echo json_encode($sendArray);
$conn->close();


?>

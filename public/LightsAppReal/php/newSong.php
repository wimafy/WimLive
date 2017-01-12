
<?php


$servername = "localhost";
$username = "root";
$password = "";
$dbname = "lightsappdatabase";

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

$userIDnumber = $request->userID;
$songName = $request->songName;

echo($userIDnumber);
//$userIDnumber = 32;

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


//for loading songs
$sql = "INSERT INTO `songs` (`songID`, `UserOwnerID`, `lastEditDate`, `songTitle`, `durration`, `filepath`) VALUES (NULL, '$userIDnumber', '3722', '$songName', '3:47', 'yepp.mp3');";
$result = $conn->query($sql);


if ($result) {

    echo("you win");


    $file = '../audio/' . $conn->insert_id . '.mp3';
    // The new person to add to the file
    $filecontents = $conn->insert_id . "\n";
    // Write the contents to the file,
    // using the FILE_APPEND flag to append the content to the end of the file
    // and the LOCK_EX flag to prevent anyone else writing to the file at the same time
    file_put_contents($file, $filecontents, FILE_APPEND | LOCK_EX);


} else {
    echo "Server Error we made a booboo";
}


//echo json_encode($sendArray);
$conn->close();




?>

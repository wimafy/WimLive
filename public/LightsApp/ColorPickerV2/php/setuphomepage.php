
<?php


$servername = "localhost";
$username = "root";
$password = "";
$dbname = "lightsappdatabase";

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

$userIDnumber = $request->userID;
//$userIDnumber = 32;


// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


//for loading songs
$sql = "SELECT * FROM `songs` WHERE `UserOwnerID` = $userIDnumber";
$result = $conn->query($sql);


if ($result->num_rows > 0) {

    // output data of each row
    while($songrow = $result->fetch_assoc()) {
        //echo "{'songID': '". $row["songID"] . "', 'UserOwnerID': '" . $row["UserOwnerID"] . "', 'lastEditDate': '" . $row["lastEditDate"] . "', 'songTitle': '" . $row["songTitle"] . "', 'durration': '" .$row["durration"] ."'}, ";
        $songrows[] = $songrow;
    }

} else {
    echo "0 results";
}

//for loading presets
$sql = "SELECT * FROM `presets` WHERE `UserOwnerID` = 12
";
$result = $conn->query($sql);


if ($result->num_rows > 0) {

    // output data of each row
    while($presetrow = $result->fetch_assoc()) {
        //echo "{'songID': '". $row["songID"] . "', 'UserOwnerID': '" . $row["UserOwnerID"] . "', 'lastEditDate': '" . $row["lastEditDate"] . "', 'songTitle': '" . $row["songTitle"] . "', 'durration': '" .$row["durration"] ."'}, ";
        $presetrows[] = $presetrow;
    }

} else {
    echo "0 results";
}

$sendArray = [$songrows, $presetrows];
//var_dump($sendArray);

echo json_encode($sendArray);
$conn->close();


?>

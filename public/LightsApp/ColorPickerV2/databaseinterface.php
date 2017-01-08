<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "lightsappdatabase";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM `songs`";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    //echo "[";
    // output data of each row
    while($row = $result->fetch_assoc()) {
        //echo "{'songID': '". $row["songID"] . "', 'UserOwnerID': '" . $row["UserOwnerID"] . "', 'lastEditDate': '" . $row["lastEditDate"] . "', 'songTitle': '" . $row["songTitle"] . "', 'durration': '" .$row["durration"] ."'},";
    }
    //echo "]";
} else {
    echo "0 results";
}
$conn->close();
?>

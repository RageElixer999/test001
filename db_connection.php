<?php
$servername = "localhost"; // For 000webhost, this should be correct.
$username = "id22244586_captainriz"; // Replace with your database username.
$password = "RizwanFazan3211!"; // Replace with your database password.
$dbname = "id22244586_logindata"; // Replace with your database name.

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>

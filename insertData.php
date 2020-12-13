<?php
$servername = "localhost";
$username = "root";
$password = "123";
$dbname = "unlocked";	

	$conn = new mysqli($servername, $username, $password, $dbname);

	$input = $_POST['input'];			// think about how we should be parsing to prevent SQL injection

	$q1 = "INSERT INTO `input`(Input) VALUES ('$input');";
	if($conn->query($q1)){
		echo "success";
	}
	else{
		echo "problems";
	}
?>
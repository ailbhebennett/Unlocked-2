<?php

    $servername="localhost";
    $password="";
    $username="root";
    $dbname='testdb';

    $conn = new mysqli($servername, $username, $password, $dbname) or die("unable");
echo "Greate wrk";
    
?>
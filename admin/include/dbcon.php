
<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "anaya"; 
// $base_url="://localhost:8081/asmakgroup/"
$conn = mysqli_connect($servername,$username,$password,$dbname);

if($conn)
{
    echo "";
}
else
{
    echo "connection failed";
}

?>
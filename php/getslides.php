<?php
header('Content-Type:application/json; charset=UTF-8');
ini_set('display_errors', 1);
error_reporting(E_ALL);

//Define the address of the server, database, user, and password
$host = 'mysql';
$db = 'projectG';
$user = 'root';
$pass = 'Angel@921266';
$dsn = "mysql:host=$host;dbname=$db";

//try to reach/open database
try {$pdo = new PDO( $dsn, $user, $pass );
} catch( Exception $e ) {
die( "<h3>Error in connection: " . $e->getMessage() .
"</h3>" );
}

//get data from database
try {
    $sql= 'SELECT * FROM gSlides';
    $sth = $pdo->query( $sql );
    $rows = $sth->fetchAll();
} catch( Exception $e ){
die( "<h3>Error in query: " . $e ->getMessage() . "</h3>" );
}

$list = array();
foreach( $rows as $row ){
        array_push( $list, array( $row[0], $row[1], $row[2] ));
}
$answer = json_encode( $list );
echo $answer;
?>
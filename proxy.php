<?php

$url = "https://watson-wdc01.ihost.com/instance/541/deepqa/v1/question/";

$fields_string = json_encode(["question" => ["questionText" => $_POST["question"]]]);
$credentials = "quk_student1:HGjAdFxI"; 

//open connection
$ch = curl_init();

//set the url, number of POST vars, POST data
curl_setopt($ch,CURLOPT_URL,$url);
curl_setopt($ch,CURLOPT_POST,true);

curl_setopt($ch,CURLOPT_HTTPHEADER,array('Accept: application/json','Content-Type: application/json', 'X-SyncTimeout: 30'));
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($ch,CURLOPT_RETURNTRANSFER, true );
curl_setopt($ch,CURLOPT_POSTFIELDS,$fields_string);

curl_setopt($ch,CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
curl_setopt($ch,CURLOPT_USERPWD, "quk_student1:HGjAdFxI");

//execute post
$content = curl_exec( $ch );
 
echo curl_error($ch);

$response_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
  
  curl_close( $ch );
  
if( ! empty($content) ) {
	echo $content;
} else {
	echo $response_code;
	echo $fields_string;
}
<?php

header('Content-Type: application/json');

// Get json raw datas from AJAX
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

$to      = 'hello@usine-creative.com';
$subject = 'Formulaire de contact';
$message = nl2br(htmlspecialchars($request->message));
$headers = 'From: '.$request->email."\r\n".'Reply-To:'.$request->email."\r\n";

$response = new \StdClass();

if(@mail($to, $subject, $message, $headers)) {
    $response->success = true;
}else{
    $response->success = false;
}

echo json_encode($response);

?>

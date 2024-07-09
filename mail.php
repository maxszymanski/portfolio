<?php
header('Content-Type: application/json');

$data = json_decode(file_get_contents('php://input'), true);

$name = $data['name']
$email = $data['email'];
$message = $data['message'];

$txt = "imie: " . $name . "\r\n" . "E-mail: " . $email . "\r\n" . "\r\n" . "tresc: " . $message;


$to = 'hello@maxszymanski.pl';
$subject = 'Wiadomość z formularza kontaktowego';
$headers = 'From: ' . $email . "\r\n" .
           'Reply-To: ' . $email . "\r\n" .
           'X-Mailer: PHP/' . phpversion();

if (mail($to, $subject, $txt, $headers)) {
    echo json_encode(['status' => 'success']);
} else {
    echo json_encode(['status' => 'error']);
}
?>
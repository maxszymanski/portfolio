<?php
header('Content-Type: application/json');
$data = json_decode(file_get_contents('php://input'), true);
 

if (isset($data['data']['name']) && isset($data['data']['email']) && isset($data['data']['message'])) {
    $name = htmlspecialchars($data['data']['name']);
    $email = filter_var($data['data']['email'], FILTER_VALIDATE_EMAIL);
    $message = htmlspecialchars($data['data']['message']);

    if ($email === false) {
        echo json_encode(['status' => 'error', 'message' => 'Invalid email address']);
        exit;
    }

    $to = 'hello@maxszymanski.pl';
    $subject = 'Wiadomosc z formularza kontaktowego';
    $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";
    $headers = 'From: ' . $email . "\r\n" .
               'Reply-To: ' . $email . "\r\n" .
               'X-Mailer: PHP/' . phpversion();

    if (mail($to, $subject, $body, $headers)) {
        echo json_encode(['status' => 'success', 'message' => 'Email sent successfully']);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Failed to send email']);
    }
} else {
    echo json_encode(['status' => 'error', 'message' => 'Invalid input']);
}
?>
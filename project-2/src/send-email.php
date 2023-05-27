<?php
header("Content-Type: application/json");

// Retrieve form data
$data = json_decode(file_get_contents("php://input"));

$email = $data->email;
$message = $data->message;

// Validate form data (add more validation if required)
if (!$email || !$message) {
  http_response_code(400);
  echo json_encode(array("success" => false, "message" => "Please provide email and message."));
  exit();
}

// Send email
$to = "maxinemayor@gmail.com"; // Your email address
$subject = "New Contact Form Submission";
$body = "Email: $email\n\nMessage: $message";

$headers = "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";

if (mail($to, $subject, $body, $headers)) {
  echo json_encode(array("success" => true));
} else {
  http_response_code(500);
  echo json_encode(array("success" => false, "message" => "Failed to send email."));
}
?>
<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Sanitize and retrieve form data
    $name = htmlspecialchars(trim($_POST['name']));
    $email = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
    $phone = htmlspecialchars(trim($_POST['phone']));
    $message = htmlspecialchars(trim($_POST['message']));

    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        die("Invalid email address.");
    }

    // Validate phone (basic validation, can be enhanced)
    if (!preg_match('/^[0-9\-\(\)\s]+$/', $phone)) {
        die("Invalid phone number.");
    }

    // Email settings
    $to = "ahsan.ullah.shaba@gmail.com"; // Replace with your email address
    $subject = "New Contact Form Submission";
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=utf-8\r\n";

    // Email body
    $body = "You have received a new message from the contact form:\n\n";
    $body .= "Name: $name\n";
    $body .= "Email: $email\n";
    $body .= "Phone: $phone\n";
    $body .= "Message:\n$message\n";

    // Send email
    if (mail($to, $subject, $body, $headers)) {
        echo "Your message has been sent successfully.";
    } else {
        echo "Failed to send your message. Please try again later.";
    }
} else {
    echo "Invalid request method.";
}
?>
<<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    require('PHPMailer/src/PHPMailer.php');
        require('PHPMailer/src/SMTP.php');
    // reCAPTCHA verification
    $recaptcha_secret= "v3-secret-key";
    $recaptcha_response = $_POST['g-recaptcha-response'];

    
    // Verify reCAPTCHA response
    $recaptcha_verify_url = "https://www.google.com/recaptcha/api/siteverify";
    $response = file_get_contents($recaptcha_verify_url . "?secret=" . $recaptcha_secret . "&response=" . $recaptcha_response);
    $response_keys = json_decode($response, true);

    if ($response_keys["success"] && $response_keys["score"] >= 0.5) {
        // reCAPTCHA success, proceed with sending the email

        $name = htmlspecialchars($_POST['name']);
        $email = htmlspecialchars($_POST['email']);
        $message = htmlspecialchars($_POST['message']);
              // Check if email is valid
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            header('Location: ' . $_SERVER['HTTP_REFERER'] . '?status=invalid_email');
            exit();
        }

        
        //Create an instance; passing `true` enables exceptions
        $mail = new PHPMailer\PHPMailer\PHPMailer(true);

        try {

        
            //Server settings
            //Enable verbose debug output
            $mail->isSMTP();                           //Send using SMTP
            $mail->Host       = 'smtp.demohost.com';  //Set the SMTP server to send through
            $mail->SMTPAuth   = true;                  //Enable SMTP authentication
            $mail->Username   = 'contact@user.com';  //SMTP username
            $mail->Password   = 'password';           //SMTP password
            $mail->SMTPSecure = 'ssl';                  //Enable implicit TLS encryption
            $mail->Port       = 465;                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`
        
            //Recipients
        $mail->setFrom('contact@user.com', 'user');  // Sender's email
        $mail->addAddress('abc@gmail.com');  // Recipient's email

        $mail->isHTML(true);
        $mail->Subject = 'Contact Form Submission';
        $mail->Body = "
        <div style='font-family: Arial, sans-serif; color: #333;'>
        <h2 style='color: #4CAF50;'>New Message Received</h2>
        <p><strong>Name:</strong> $name</p>
        <p><strong>Email:</strong> $email</p>
        <p><strong>Message:</strong></p>
        <p style='background-color: #f9f9f9; padding: 10px; border: 1px solid #ddd;'>$message</p>
        <hr style='border: 0; height: 1px; background-color: #4CAF50;'/>
        <p style='font-size: 12px; color: #777;'>This is an automated message. Please do not reply.</p>
        </div>";


          // Send the email
            $mail->send();

            // Redirect back to the form page with success message
            header('Location: ' . $_SERVER['HTTP_REFERER'] . '?status=success');
        } catch (Exception $e) {
            // Email sending failed, redirect with error message
            header('Location: ' . $_SERVER['HTTP_REFERER'] . '?status=mail_failed');
        }
    } else {
        // reCAPTCHA verification failed or score too low
        header('Location: ' . $_SERVER['HTTP_REFERER'] . '?status=captcha_failed');
}    }
 else {
    // Invalid request method
    header('Location: ' . $_SERVER['HTTP_REFERER'] . '?status=invalid_request');
}

?>

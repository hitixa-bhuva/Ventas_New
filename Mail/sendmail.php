<?php

// No need for "use" statements when not using namespaces
require 'smtp/PHPMailerAutoload.php';

header('Content-Type: application/json');

class sendmail
{    public $SenderEmail = "website@swastikaoverseas.in";
    public $SenderEmailPassword = "#8/|^NDt3R";
    public $ReciverEmail = "rahul.shah@theuniqueitsolution.com";
    public $Subject = "ggg ";
    public $Body = "bubububb";

    function sendMail()
    {
        if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
            echo json_encode(['status' => false, 'message' => 'Invalid request method']);
            return;
        }
        $inputData = json_decode(file_get_contents('php://input'), true);

        if (json_last_error() !== JSON_ERROR_NONE) {
            echo json_encode(['status' => false, 'message' => 'Invalid JSON data']);
            return;
        }
    
        // Fetch data from the decoded JSON
        $subject = isset($inputData['Subject']) ? $inputData['Subject'] : '';
        $body = isset($inputData['Body']) ? $inputData['Body'] : '';

        // Basic validation
        if (empty($subject) || empty($body)) {
            echo json_encode(['status' => false, 'message' => 'Subject and Body are required']);
            return;
        }
    

        $mail = new PHPMailer();

        try {
            $mail->isSMTP();
            $mail->Host = 'smtp.hostinger.com';
            $mail->SMTPAuth = true;
            $mail->Username = $this->SenderEmail;
            $mail->Password = $this->SenderEmailPassword;
            // $mail->SMTPSecure = 'tls';
            $mail->Port = 587;
            $mail->SMTPDebug = SMTP::DEBUG_SERVER;

            $mail->setFrom($this->SenderEmail, 'Swastika Overseas');
            $mail->addAddress($this->ReciverEmail,'Swastika Overseas');

            $mail->isHTML(false);
            $mail->Subject = $subject;
            $mail->Body =   $body ;
            $mail->AltBody = strip_tags($this->Body);
            // die($mail->send());

            if ($mail->send()) {
                echo json_encode(['status' => true, 'message' => 'Message has been sent']);
            } else {
                echo json_encode(['status' => false, 'message' => 'Mailer Error: ' . $mail->ErrorInfo]);
            }
        } catch (Exception $e) {
            echo json_encode(['status' => false, 'message' => "Message could not be sent. Mailer Error: {$e->getMessage()}"]);
        }
    }
}

$mailer = new sendmail();
$mailer->sendMail();

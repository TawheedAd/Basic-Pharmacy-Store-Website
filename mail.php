<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $itemName = $_POST["itemName"];
    $price = $_POST["price"];
    $units = $_POST["units"];
    $totalPrice = $_POST["totalPrice"];
    $name = $_POST["name"];
    $address = $_POST["address"];
    $mobile = $_POST["mobile"];
    
    // File handling
    $attachment = $_FILES["prescription"]["tmp_name"];
    $attachmentName = $_FILES["prescription"]["name"];

    // Create a new PHPMailer instance
    $mail = new PHPMailer(true);

    try {
        // Set up SMTP
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'mralpha409@gmail.com'; // Your email username
        $mail->Password = 'ifkvtgypzzlyubdn'; // Your email password
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;

        // Set email content
        $mail->setFrom('mralpha409@gmail.com', 'WellCare Valley');
        $mail->addReplyTo("twheedad@gmail.com", $name);
        $mail->addAddress("twheedad@gmail.com");
        $mail->Subject = $mobile;

        // Email body with improved styling
        $mail->Body = "
            <html>
            <head>
                <style>
                    .email-body {
                        font-family: Arial, sans-serif;
                        padding: 20px;
                        background-color: #f2f2f2;
                    }
                    .email-text {
                        color: #4CAF50;
                        font-size: 20px;
                        margin-bottom: 20px;
                    }
                    .table {
                        width: 100%;
                        border-collapse: collapse;
                        background-color: white;
                    }
                    .table th, .table td {
                        border: 1px solid #dddddd;
                        padding: 8px;
                        text-align: left;
                    }
                    .table th {
                        background-color: #4CAF50;
                        color: white;
                    }
                </style>
            </head>
            <body>
                <div class='email-body'>
                    <h4 class='email-text'>✓ Hi, You received a new lead!</h4>
                    <table class='table'>
                        <tr>
                            <th>Item Name</th>
                            <td>$itemName</td>
                        </tr>
                        <tr>
                            <th>Price</th>
                            <td>$price</td>
                        </tr>
                        <tr>
                            <th>Units</th>
                            <td>$units</td>
                        </tr>
                        <tr>
                            <th>Total Price</th>
                            <td>$totalPrice</td>
                        </tr>
                        <tr>
                            <th>Name</th>
                            <td>$name</td>
                        </tr>
                        <tr>
                            <th>Address</th>
                            <td>$address</td>
                        </tr>
                        <tr>
                            <th>Mobile</th>
                            <td>$mobile</td>
                        </tr>
                    </table>
                </div>
            </body>
            </html>
        ";

        // Add attachment
        if ($attachment && $attachmentName) {
            $mail->addAttachment($attachment, $attachmentName);
        }

        // Set the email body format to HTML
        $mail->isHTML(true);

        // Send email
        $mail->send();

        // Redirect to the thank you page
        header("Location: thankyou.html");
        exit; // Ensure that no further code is executed after the redirect
    } catch (Exception $e) {
        echo "Email sending failed: " . $mail->ErrorInfo;
    }
}
?>

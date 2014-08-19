<?php
/* Set e-mail recipient */
$myemail  = "jthomas@thomasassociates.ca";



/* Check all form inputs using check_input function */
$yourname = check_input($_POST['formName']);
$email  = check_input($_POST['formEmail']);
$subject    = "Thomas Associates website contact email";
$formCompany  = check_input($_POST['formCompany']);
$formMessage   = check_input($_POST['formMessage']);


/* If e-mail is not valid show error message */
if (!preg_match("/([\w\-]+\@[\w\-]+\.[\w\-]+)/", $email))
{
    $email = '';
	return false;
	
}

/* If URL is not valid set $website to empty */
if (!preg_match("/^(https?:\/\/+[\w\-]+\.[\w\-]+)/i", $website))
{
    $website = '';
}

/* Let's prepare the message for the e-mail */
$message = "Jeannette!

$yourname from $formCompany would like to contact you regarding your services.

They can be reached at $email

Here is there message to you regarding this matter:

$formMessage


";

/* Send the message using mail() function */
mail($myemail, $subject, $message);

/* Redirect visitor to the thank you page
header('Location: thanks.htm');*/
exit();

/* Functions we used */
function check_input($data)
{
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    
    return $data;
}

?>

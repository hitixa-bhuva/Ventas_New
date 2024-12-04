const emailForm = document.getElementById("contactForm");

// Contact mail start
emailForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the form from submitting normally

  // Gather data from the form - updated selectors to match new HTML
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const phone = document.getElementById("phone").value;
  const companyName = document.getElementById("companyName").value;
  const description = document.getElementById("description").value;

  // Create email data
  const emailData = {
    Host: "216.10.241.228",
    SenderEmail: "hitixa.bhuva@theuniqueitsolution.com",
    SenderEmailPassword: "1z,76)+1J_kD",
    ReciverEmail: "hitixa.bhuva@theuniqueitsolution.com",
    Subject: subject,
    Body: `
           <html dir="ltr" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
    <meta charset="UTF-8">
    <meta content="width=device-width, initial-scale=1" name="viewport">
    <meta name="x-apple-disable-message-reformatting">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="telephone=no" name="format-detection">
    <title></title>
    <!--[if (mso 16)]>
    <style type="text/css">
    a {text-decoration: none;}
    </style>
    <![endif]-->
    <!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]-->
    <!--[if gte mso 9]>
<noscript>
         <xml>
           <o:OfficeDocumentSettings>
           <o:AllowPNG></o:AllowPNG>
           <o:PixelsPerInch>96</o:PixelsPerInch>
           </o:OfficeDocumentSettings>
         </xml>
      </noscript>
<![endif]-->
    <!--[if !mso]><!-- -->
    <link href="https://fonts.googleapis.com/css2?family=Syne&display=swap" rel="stylesheet">
    <!--<![endif]-->
  </head>
  <body class="body">
    <div dir="ltr" class="es-wrapper-color">
      <!--[if gte mso 9]>
			<v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
				<v:fill type="tile" color="#f7f8fe"></v:fill>
			</v:background>
		<![endif]-->
      <table width="100%" cellspacing="0" cellpadding="0" class="es-wrapper">
        <tbody>
          <tr>
            <td valign="top" class="esd-email-paddings">
              <table cellpadding="0" cellspacing="0" align="center" class="esd-header-popover es-header">
                <tbody>
                  <tr>
                    <td align="center" class="esd-stripe">
                      <table bgcolor="#ffffff" align="center" cellpadding="0" cellspacing="0" width="600" class="es-header-body">
                        <tbody>
                          <tr>
                            <td align="left" class="esd-structure es-p20">
                              <table cellpadding="0" cellspacing="0" width="100%">
                                <tbody>
                                  <tr>
                                    <td width="560" align="left" class="esd-container-frame">
                                      <table cellspacing="0" width="100%" cellpadding="0">
                                        <tbody>
                                          <tr>
                                            <td align="center" class="esd-block-image" style="font-size:0">
                                              <a target="_blank">
                                                <img src="https://eogkycw.stripocdn.email/content/guids/CABINET_cab6114b463832240179b40d07d835c5810c1f9908a51c396283ddb690c71fa2/images/ventas_logo_1.png" alt="" width="300" class="adapt-img">
                                              </a>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table cellspacing="0" cellpadding="0" align="center" class="es-header">
                <tbody>
                  <tr>
                    <td align="center" class="esd-stripe">
                      <table width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" class="es-header-body" style="background-color:#ffffff">
                        <tbody>
                          <tr>
                            <td align="left" class="esd-structure es-p20">
                              <table width="100%" cellspacing="0" cellpadding="0">
                                <tbody>
                                  <tr>
                                    <td width="560" valign="top" align="center" class="es-m-p0r es-m-p20b esd-container-frame">
                                      <table width="100%" cellspacing="0" cellpadding="0">
                                        <tbody>
                                          <tr>
                                            <td align="center" class="esd-block-text es-p15 es-m-p0r es-m-p0l">
                                              <h1 style="line-height:150%;color:#1788e6">
                                                <strong>Contact Form Submission!</strong>
                                              </h1>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td align="center" class="esd-block-text es-p15t es-p40r es-p40l es-m-p0r es-m-p0l">
                                              <p>
                                                At Ventas, we are always striving to enhance our CRM platform and services to better meet the needs of exporters and traders in the ceramic industry. Your valuable feedback is essential in driving these improvements and ensuring we deliver the best possible experience.
                                              </p>
                                              <p>
                                                ​
                                              </p>
                                              <p>
                                                To help us serve you better, we’ve created a quick questionnaire where you can share your thoughts and rate various aspects of our CRM system. Your insights are greatly appreciated!
                                              </p>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                          <tr>
                            <td align="left" class="esd-structure es-p20r es-p20l">
                              <table cellpadding="0" cellspacing="0" width="100%">
                                <tbody>
                                  <tr>
                                    <td width="560" align="center" valign="top" class="esd-container-frame">
                                      <table cellpadding="0" cellspacing="0" width="100%">
                                        <tbody>
                                          <tr>
                                            <td esd-tmp-divider="2|dashed|#010101" esd-tmp-menu-padding="11|10" class="esd-block-menu">
                                              <table cellpadding="0" cellspacing="0" width="100%" class="es-menu" style="border:2px solid #000">
                                                <!-- Add border here -->
                                                <tbody>
                                                  <tr>
                                                    <td align="center" valign="top" width="50%" bgcolor="#d9ead3" id="esd-menu-id-0" class="es-p10t es-p10b es-p5r es-p5l" style="padding-top:11px">
                                                      <a target="_blank" href="https://" style="color:#0b5394">
                                                        Name :
                                                      </a>
                                                    </td>
                                                    <td align="center" valign="top" width="50%" bgcolor="#d9ead3" id="esd-menu-id-1" class="es-p10t es-p10b es-p5r es-p5l" style="border-left:2px dashed #010101;padding-top:11px">
                                                      <a target="_blank" href="https://" style="color:#0b5394">
                                                      ${name}
                                                      </a>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td esd-tmp-divider="2|dashed|#000000" esd-tmp-menu-padding="11|10" class="esd-block-menu">
                                              <table cellpadding="0" cellspacing="0" width="100%" class="es-menu" style="border:2px solid #000">
                                                <!-- Add border here -->
                                                <tbody>
                                                  <tr>
                                                    <td align="center" valign="top" width="50%" bgcolor="#d9ead3" id="esd-menu-id-0" class="es-p10t es-p10b es-p5r es-p5l" style="padding-top:11px">
                                                      <a target="_blank" href="https://" style="color:#0b5394">
                                                        Email :
                                                      </a>
                                                    </td>
                                                    <td align="center" valign="top" width="50%" bgcolor="#d9ead3" id="esd-menu-id-1" class="es-p10t es-p10b es-p5r es-p5l" style="border-left:2px dashed #010101;padding-top:11px">
                                                      <a target="_blank" href="https://" style="color:#0b5394">
                                                      ${email}
                                                      </a>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td esd-tmp-divider="2|dashed|#000000" esd-tmp-menu-padding="11|10" class="esd-block-menu">
                                              <table cellpadding="0" cellspacing="0" width="100%" class="es-menu" style="border:2px solid #000">
                                                <!-- Add border here -->
                                                <tbody>
                                                  <tr>
                                                    <td align="center" valign="top" width="50%" bgcolor="#d9ead3" id="esd-menu-id-0" class="es-p10t es-p10b es-p5r es-p5l" style="padding-top:11px">
                                                      <a target="_blank" href="https://" style="color:#0b5394">
                                                        Subject :
                                                      </a>
                                                    </td>
                                                    <td align="center" valign="top" width="50%" bgcolor="#d9ead3" id="esd-menu-id-1" class="es-p10t es-p10b es-p5r es-p5l" style="border-left:2px dashed #010101;padding-top:11px">
                                                      <a target="_blank" href="https://" style="color:#0b5394">
                                                      ${subject}
                                                      </a>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td esd-tmp-divider="2|dashed|#000000" esd-tmp-menu-padding="11|10" class="esd-block-menu">
                                              <table cellpadding="0" cellspacing="0" width="100%" class="es-menu" style="border:2px solid #000">
                                                <!-- Add border here -->
                                                <tbody>
                                                  <tr>
                                                    <td align="center" valign="top" width="50%" bgcolor="#d9ead3" id="esd-menu-id-0" class="es-p10t es-p10b es-p5r es-p5l" style="padding-top:11px">
                                                      <a target="_blank" href="https://" style="color:#0b5394">
                                                        Phone:
                                                      </a>
                                                    </td>
                                                    <td align="center" valign="top" width="50%" bgcolor="#d9ead3" id="esd-menu-id-1" class="es-p10t es-p10b es-p5r es-p5l" style="border-left:2px dashed #010101;padding-top:11px">
                                                      <a target="_blank" href="https://" style="color:#0b5394">
                                                      ${phone}
                                                      </a>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td esd-tmp-divider="2|dashed|#000000" esd-tmp-menu-padding="11|10" class="esd-block-menu">
                                              <table cellpadding="0" cellspacing="0" width="100%" class="es-menu" style="border:2px solid #000">
                                                <!-- Add border here -->
                                                <tbody>
                                                  <tr>
                                                    <td id="esd-menu-id-0" align="center" valign="top" width="50%" bgcolor="#d9ead3" class="es-p10t es-p10b es-p5r es-p5l" style="padding-top:11px">
                                                      <a target="_blank" href="https://" style="color:#0b5394">
                                                        Company Name:
                                                      </a>
                                                    </td>
                                                    <td valign="top" width="50%" bgcolor="#d9ead3" id="esd-menu-id-1" align="center" class="es-p10t es-p10b es-p5r es-p5l" style="border-left:2px dashed #010101;padding-top:11px">
                                                      <a href="https://" target="_blank" style="color:#0b5394">
                                                      ${companyName}
                                                      </a>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td esd-tmp-divider="2|dashed|#000000" esd-tmp-menu-padding="11|10" class="esd-block-menu">
                                              <table cellspacing="0" width="100%" cellpadding="0" class="es-menu" style="border:2px solid #000">
                                                <!-- Add border here -->
                                                <tbody>
                                                  <tr>
                                                    <td width="50%" bgcolor="#d9ead3" id="esd-menu-id-0" align="center" valign="top" class="es-p10t es-p10b es-p5r es-p5l" style="padding-top:11px">
                                                      <a target="_blank" href="https://" style="color:#0b5394">
                                                        Description:
                                                      </a>
                                                    </td>
                                                    <td id="esd-menu-id-1" align="center" valign="top" width="50%" bgcolor="#d9ead3" class="es-p10t es-p10b es-p5r es-p5l" style="border-left:2px dashed #010101;padding-top:11px">
                                                      <a href="https://" target="_blank" style="color:#0b5394">
                                                      ${description}
                                                      </a>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </body>
</html>`,
  };

  // Debugging in console
  console.log("Form data:", emailData);

  const apiUrl = "../../Mail/sendmail.php";
  const headers = {
    "Content-Type": "application/json",
  };

  function toggleClassForField(fieldId, className, duration) {
    const field = document.getElementById(fieldId);
    field.classList.add(className);
    setTimeout(() => {
      field.classList.remove(className);
    }, duration);
  }

  if (!name || !email || !subject || !phone || !companyName || !description) {
    if (!name) {
      toggleClassForField("name", "border-danger", 3000);
    }
    if (!companyName) {
      toggleClassForField("companyName", "border-danger", 3000);
    }
    if (!email) {
      toggleClassForField("email", "border-danger", 3000);
    }
    if (!subject) {
      toggleClassForField("subject", "border-danger", 3000);
    }
    if (!phone) {
      toggleClassForField("phone", "border-danger", 3000);
    }
    if (!description) {
      toggleClassForField("description", "border-danger", 3000);
    }

    showFeedback(
      "Please fill in all required fields.",
      "col-12 text-center py-2 border-warning border text-warning"
    );
    return;
  }

  if (!isValidEmail(email)) {
    showFeedback(
      "Please enter a valid email address.",
      " col-12  text-center border-1 py-2 border-warning border text-warning"
    );
    return;
  }

  console.log("apiUrl")
  // Sending the email using fetch
  fetch(apiUrl, {
    method: "POST", // Use uppercase for method as it's more standard
    headers: {
        "Content-Type": "application/json", // Ensure JSON format
    },
    body: JSON.stringify(emailData), // Convert the data object to JSON string
})
    .then((response) => {
      console.log(response);
        if (!response.ok) {
            // Check if the response is not successful
            throw new Error(`HTTP error! Status: ${response}`);
        }
        return response.json(); // Parse JSON response
    })
    .then((data) => {
        console.log("Email sent successfully:", data);
        showFeedback("Message sent successfully", "text-primary", true);
        clearForm(); // Clear the form after success
    })
    .catch((error) => {
        console.error("Error sending email:", error);
        showFeedback(
            "Message sending failed. Please try again later.",
            "text-danger"
        );
    });

});
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
function clearForm() {
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("subject").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("companyName").value = "";
  document.getElementById("description").value = "";
}

function showFeedback(message, classNames) {
  const feedback = document.getElementById("feedback");
  feedback.textContent = message;
  feedback.className = classNames;
  setTimeout(() => {
    feedback.textContent = "";
    feedback.className = ""; // Remove all classes
  }, 3000); // Remove feedback after 3 seconds (3000 milliseconds)
}
function showFeedback(message, isSuccess = true) {
  const feedbackElement = document.getElementById("feedback");

  // Set the message and style
  feedbackElement.innerText = message;
  feedbackElement.style.color = isSuccess ? "blue" : "red"; // Blue for success, red for error
  feedbackElement.style.borderColor = isSuccess ? "blue" : "red";
  feedbackElement.style.display = "block"; // Make it visible

  // Hide the feedback after 3 seconds
  setTimeout(() => {
    feedbackElement.style.display = "none";
  }, 3000);
}



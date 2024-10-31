function sendEmail() {
    emailjs.send("service_1qxjeg4", "template_lb34sla", {
       from_name: document.getElementById("name").value,
       from_email: document.getElementById("email").value,
       message: document.getElementById("message").value
    })
    .then(function(response) {
       console.log("Email sent successfully", response);
       alert("Pesan Anda telah terkirim. Terima kasih!");
    }, function(error) {
       console.log("Error sending email", error);
       alert("Maaf, pesan Anda gagal terkirim.");
    });
 }
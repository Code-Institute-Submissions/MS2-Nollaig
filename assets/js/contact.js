// Used EmailJS API and Interactive Frontend Development to help build this section
function sendMail(contactForm) {
    emailjs
        .send("service_dpmyqb3", "merry-christmas", {
            from_name: contactForm.firstname.value,
            from_age: contactForm.age.value,
            from_activity: contactForm.activity.value,
            from_gift: contactForm.gift.value,
            from_hometown: contactForm.hometown.value,
            from_email: contactForm.emailaddress.value,
        })
        .then(
            function (response) {
                // Activates modal popup on successful submission
                $('#myModal').modal('show');
                clear();
                // Closes the modal
                $(".btn").click(function () {
                    $("#myModal").modal('hide');
                });
            },
            function (error) {
                alert("FAILED, try again later", error);
            }
        );
    return false; // To block from loading a new page
}

// function to clear input fields
function clear() {
        document.getElementById("firstname").value = "",
        document.getElementById("age").value = "",
        document.getElementById("activity").value = "",
        document.getElementById("gift").value = "",
        document.getElementById("hometown").value = "",
        document.getElementById("emailaddress").value = "";
}
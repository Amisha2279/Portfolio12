const submitNow = async (formData) => {
  try {
    const mes = document.querySelector("#submit-response");
    const response = await fetch(
      "https://media.roomsnearme.in/wp-json/contact-api/v1/submit",
      {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );
    const data = await response.json();
    mes.classList.remove("hidden");
  } catch (error) {
    mes.classList.remove("hidden");
    mes.innerHTML = "Someting went wrong";
    console.log(error);
  } finally {
  }
};

function handleSubmit(form) {
  // Prevent default form submission (page reload)
  event.preventDefault();

  // Create a FormData object from the form
  const formData = new FormData(form);

  // Prepare the data for submission (convert form data to JSON)
  const formDataObject = {};

  formData.forEach((value, key) => {
    formDataObject[key] = value;
  });

  console.log(formDataObject);

  const submitButton = form.querySelector('button[type="submit"]');
  submitButton.disabled = true;
  submitButton.textContent = "Submitting...";

  submitNow(formDataObject);

  form.reset();

  submitButton.disabled = false;
  submitButton.textContent = "Submit";

  // Send the form data using fetch API (POST request)
  // fetch("https://yourwebsite.com/wp-json/contact-api/v1/submit", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(formDataObject), // Send the form data as JSON
  // })
  //   .then((response) => response.json())
  //   .then((data) => {
  //     if (data.success) {
  //       alert("Thank you for your submission!");
  //       form.reset(); // Reset the form after successful submission
  //     } else {
  //       alert("Submission failed. Please try again.");
  //     }
  //   })
  //   .catch((error) => {
  //     alert("An error occurred. Please try again.");
  //     console.error("Error:", error);
  //   });
}

function toggleMenu() {
    
  document.getElementById("navLinks").classList.toggle("active");
}

// If user clicks "Check Availability" from Home, scroll to booking section
document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const shouldScroll =
    urlParams.get("booking") === "true" || window.location.hash === "#book-appointment";

  if (!shouldScroll) return;

  const bookingSection =
    document.getElementById("book-appointment") || document.querySelector(".free-booking");

  if (!bookingSection) return;

  setTimeout(() => {
    bookingSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 100);
});

document.getElementById("whatsappForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const number = document.getElementById("number").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const phone = "971524343365"; // WhatsApp number

    const text =
        "Hello Hyatt Kitchen Rentals!%0A%0A" +
        "Thank you for contacting us.%0A%0A" +
        "Name: " + name + "%0A" +
        "Phone: " + number + "%0A" +
        "Email: " + email + "%0A" +
        "Message: " + message;

    const url = "https://api.whatsapp.com/send?phone=" + phone + "&text=" + text;

    window.open(url, "_blank");
});


function sendBookingToWhatsApp() {

    let name = document.getElementById("bookingName").value;
    let number = document.getElementById("bookingNumber").value;
    let dateValue = document.getElementById("bookingDate").value;

    if (name === "" || number === "" || dateValue === "") {
        alert("Please fill all fields");
        return;
    }

    // Format Date (20 February 2026 style)
    let dateObj = new Date(dateValue);
    let options = { day: 'numeric', month: 'long', year: 'numeric' };
    let formattedDate = dateObj.toLocaleDateString('en-GB', options);

    let message =
        "📌 New Free Consultation Booking%0A%0A" +
        "👤 Name: " + name + "%0A" +
        "📞 Phone: " + number + "%0A" +
        "📅 Preferred Date: " + formattedDate;

    let whatsappURL = "https://wa.me/971559526105?text=" + message;

    window.open(whatsappURL, "_blank");

    // Clear form after sending
    document.getElementById("bookingName").value = "";
    document.getElementById("bookingNumber").value = "";
    document.getElementById("bookingDate").value = "";
}


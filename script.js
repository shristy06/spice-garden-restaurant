// =====================================================
// SPICE GARDEN RESTAURANT
// JAVASCRIPT FILE
// =====================================================


// =====================================================
// 1. MOBILE NAVIGATION
// =====================================================

const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");


if (menuToggle && navbar) {

    menuToggle.addEventListener("click", function () {

        navbar.classList.toggle("show");

        // Change menu icon

        if (navbar.classList.contains("show")) {

            menuToggle.textContent = "✕";

        } else {

            menuToggle.textContent = "☰";

        }

    });


    // Close mobile menu when a link is clicked

    const navLinks = navbar.querySelectorAll("a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navbar.classList.remove("show");

            menuToggle.textContent = "☰";

        });

    });

}



// =====================================================
// 2. CURRENT YEAR
// =====================================================

const currentYear = document.getElementById("currentYear");


if (currentYear) {

    currentYear.textContent = new Date().getFullYear();

}



// =====================================================
// 3. MENU FILTERING
// =====================================================

const filterButtons =
    document.querySelectorAll(".filter-btn");

const menuItems =
    document.querySelectorAll(".menu-card");


if (filterButtons.length > 0 && menuItems.length > 0) {

    filterButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            // Remove active class from all buttons

            filterButtons.forEach(function (btn) {

                btn.classList.remove("active");

            });


            // Add active class to clicked button

            button.classList.add("active");


            // Get selected category

            const selectedCategory =
                button.getAttribute("data-category");


            // Filter menu items

            menuItems.forEach(function (item) {

                const itemCategory =
                    item.getAttribute("data-category");


                if (
                    selectedCategory === "all" ||
                    selectedCategory === itemCategory
                ) {

                    item.style.display = "block";

                } else {

                    item.style.display = "none";

                }

            });

        });

    });

}



// =====================================================
// 4. BOOKING FORM VALIDATION
// =====================================================

const bookingForm =
    document.getElementById("bookingForm");


if (bookingForm) {


    // Get form fields

    const nameInput =
        document.getElementById("name");

    const emailInput =
        document.getElementById("email");

    const phoneInput =
        document.getElementById("phone");

    const dateInput =
        document.getElementById("date");

    const timeInput =
        document.getElementById("time");

    const guestsInput =
        document.getElementById("guests");

    const messageInput =
        document.getElementById("message");


    // Error message elements

    const nameError =
        document.getElementById("nameError");

    const emailError =
        document.getElementById("emailError");

    const phoneError =
        document.getElementById("phoneError");

    const dateError =
        document.getElementById("dateError");

    const timeError =
        document.getElementById("timeError");

    const guestsError =
        document.getElementById("guestsError");


    // Success message

    const formSuccess =
        document.getElementById("formSuccess");



    // =================================================
    // VALIDATION FUNCTIONS
    // =================================================


    // Name validation

    function validateName() {

        const name =
            nameInput.value.trim();


        if (name === "") {

            nameError.textContent =
                "Please enter your name.";

            nameInput.classList.add("input-error");

            return false;

        }


        if (name.length < 3) {

            nameError.textContent =
                "Name must contain at least 3 characters.";

            nameInput.classList.add("input-error");

            return false;

        }


        nameError.textContent = "";

        nameInput.classList.remove("input-error");

        return true;

    }



    // Email validation

    function validateEmail() {

        const email =
            emailInput.value.trim();


        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if (email === "") {

            emailError.textContent =
                "Please enter your email address.";

            emailInput.classList.add("input-error");

            return false;

        }


        if (!emailPattern.test(email)) {

            emailError.textContent =
                "Please enter a valid email address.";

            emailInput.classList.add("input-error");

            return false;

        }


        emailError.textContent = "";

        emailInput.classList.remove("input-error");

        return true;

    }



    // Phone validation

    function validatePhone() {

        const phone =
            phoneInput.value.trim();


        const phonePattern =
            /^[0-9]{10}$/;


        if (phone === "") {

            phoneError.textContent =
                "Please enter your phone number.";

            phoneInput.classList.add("input-error");

            return false;

        }


        if (!phonePattern.test(phone)) {

            phoneError.textContent =
                "Phone number must contain 10 digits.";

            phoneInput.classList.add("input-error");

            return false;

        }


        phoneError.textContent = "";

        phoneInput.classList.remove("input-error");

        return true;

    }



    // Date validation

    function validateDate() {

        const selectedDate =
            dateInput.value;


        if (selectedDate === "") {

            dateError.textContent =
                "Please select a date.";

            dateInput.classList.add("input-error");

            return false;

        }


        const today =
            new Date();

        today.setHours(0, 0, 0, 0);


        const bookingDate =
            new Date(selectedDate);


        if (bookingDate < today) {

            dateError.textContent =
                "Please select a future date.";

            dateInput.classList.add("input-error");

            return false;

        }


        dateError.textContent = "";

        dateInput.classList.remove("input-error");

        return true;

    }



    // Time validation

    function validateTime() {

        if (timeInput.value === "") {

            timeError.textContent =
                "Please select a time.";

            timeInput.classList.add("input-error");

            return false;

        }


        timeError.textContent = "";

        timeInput.classList.remove("input-error");

        return true;

    }



    // Guests validation

    function validateGuests() {

        if (guestsInput.value === "") {

            guestsError.textContent =
                "Please select the number of guests.";

            guestsInput.classList.add("input-error");

            return false;

        }


        guestsError.textContent = "";

        guestsInput.classList.remove("input-error");

        return true;

    }



    // =================================================
    // REAL-TIME VALIDATION
    // =================================================

    nameInput.addEventListener(
        "input",
        validateName
    );


    emailInput.addEventListener(
        "input",
        validateEmail
    );


    phoneInput.addEventListener(
        "input",
        validatePhone
    );


    dateInput.addEventListener(
        "change",
        validateDate
    );


    timeInput.addEventListener(
        "change",
        validateTime
    );


    guestsInput.addEventListener(
        "change",
        validateGuests
    );



    // =================================================
    // FORM SUBMISSION
    // =================================================

    bookingForm.addEventListener(
        "submit",
        function (event) {

            // Prevent page refresh

            event.preventDefault();


            // Validate all fields

            const validName =
                validateName();

            const validEmail =
                validateEmail();

            const validPhone =
                validatePhone();

            const validDate =
                validateDate();

            const validTime =
                validateTime();

            const validGuests =
                validateGuests();


            // Check validation

            if (
                validName &&
                validEmail &&
                validPhone &&
                validDate &&
                validTime &&
                validGuests
            ) {


                // Get user's name

                const customerName =
                    nameInput.value.trim();


                // Show success message

                formSuccess.textContent =
                    "Thank you, " +
                    customerName +
                    "! Your table reservation request has been submitted successfully.";


                formSuccess.classList.add(
                    "show"
                );


                // Reset form

                bookingForm.reset();


                // Remove error classes

                const inputs =
                    bookingForm.querySelectorAll(
                        "input, select, textarea"
                    );


                inputs.forEach(function (input) {

                    input.classList.remove(
                        "input-error"
                    );

                });


                // Hide success message after 6 seconds

                setTimeout(function () {

                    formSuccess.classList.remove(
                        "show"
                    );

                }, 6000);

            } else {

                // Hide success message

                formSuccess.classList.remove(
                    "show"
                );

            }

        }
    );

}



// =====================================================
// 5. SET MINIMUM BOOKING DATE
// =====================================================

const dateField =
    document.getElementById("date");


if (dateField) {

    const today =
        new Date();


    const year =
        today.getFullYear();


    const month =
        String(today.getMonth() + 1)
        .padStart(2, "0");


    const day =
        String(today.getDate())
        .padStart(2, "0");


    const todayString =
        `${year}-${month}-${day}`;


    dateField.setAttribute(
        "min",
        todayString
    );

}



// =====================================================
// 6. PHONE NUMBER INPUT
// Allow numbers only
// =====================================================

const phoneField =
    document.getElementById("phone");


if (phoneField) {

    phoneField.addEventListener(
        "input",
        function () {

            this.value =
                this.value.replace(
                    /[^0-9]/g,
                    ""
                );

        }
    );

}



// =====================================================
// 7. SMOOTH SCROLLING
// =====================================================

const internalLinks =
    document.querySelectorAll(
        'a[href^="#"]'
    );


internalLinks.forEach(function (link) {

    link.addEventListener(
        "click",
        function (event) {

            const targetId =
                this.getAttribute("href");


            if (
                targetId &&
                targetId !== "#"
            ) {

                const target =
                    document.querySelector(
                        targetId
                    );


                if (target) {

                    event.preventDefault();


                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }

            }

        }
    );

});



// =====================================================
// 8. CONSOLE MESSAGE
// =====================================================

console.log(
    "Spice Garden Restaurant website loaded successfully!"
);
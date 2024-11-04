

// Initial display setup (if needed on page load)
window.onload = function() {
    // Set 'riders' to be active by default
    document.getElementById("riders").classList.add("active");
    document.getElementById("hosts").classList.remove("active");

    // Set the button styles accordingly
    document.getElementById("fliits-rider").classList.add("active");
    document.getElementById("fliits-host").classList.remove("active");
};

// Function to show 'riders' content
function showriders() {
    document.getElementById("riders").classList.add("active");
    document.getElementById("hosts").classList.remove("active");

    // Change button styles
    document.getElementById("fliits-rider").classList.add("active");
    document.getElementById("fliits-host").classList.remove("active");
}

// Function to show 'hosts' content
function showhosts() {
    document.getElementById("riders").classList.remove("active");
    document.getElementById("hosts").classList.add("active");

    // Change button styles
    document.getElementById("fliits-rider").classList.remove("active");
    document.getElementById("fliits-host").classList.add("active");
}



// Initial display setup (if needed on page load)
window.onload = function() {
    // Set fliits-secure to be active by default
    document.getElementById("fliits-secure").classList.add("active");
    document.getElementById("fliits-standard").classList.remove("active");

    // Set the button styles accordingly
    document.getElementById("fliits-rider").classList.add("active");
    document.getElementById("fliits-host").classList.remove("active");
};

// Function to show 'fliits-secure' content
function showsecure() {
    document.getElementById("fliits-secure").classList.add("active");
    document.getElementById("fliits-standard").classList.remove("active");

    // Change button styles
    document.getElementById("fliits-rider").classList.add("active");
    document.getElementById("fliits-host").classList.remove("active");
}

// Function to show 'fliits-standard' content
function showstandard() {
    document.getElementById("fliits-secure").classList.remove("active");
    document.getElementById("fliits-standard").classList.add("active");

    // Change button styles
    document.getElementById("fliits-rider").classList.remove("active");
    document.getElementById("fliits-host").classList.add("active");
}


//functions for next and back buttons
function shownextsection() {
    // Hide the first section
    document.getElementById("form-section1").style.display = "none";

    
    // Show the second section
    document.getElementById("form-section2").style.display = "block";
}
 function showbacksection(){
     // Hide the second section
    document.getElementById("form-section2").style.display = "none";
  

    // Show the second section
    document.getElementById("form-section1").style.display = "block";
 }
 
 function shownextsection3() {
    // Hide the second section
    document.getElementById("form-section2").style.display = "none";

    
    // Show the second section
    document.getElementById("form-section3").style.display = "block";
}
 function showbacksection2(){
     // Hide the second section
    document.getElementById("form-section3").style.display = "none";
  

    // Show the second section
    document.getElementById("form-section2").style.display = "block";
 }
 
 function shownextsection4() {
    // Hide the second section
    document.getElementById("form-section3").style.display = "none";

    
    // Show the second section
    document.getElementById("form-section4").style.display = "block";
}
 function showbacksection3(){
     // Hide the second section
    document.getElementById("form-section4").style.display = "none";
  

    // Show the second section
    document.getElementById("form-section3").style.display = "block";
 }

 //alert for showing submission is complete
 function submitbutton(){
    alert("Your Application has been successfully submitted! We will get back to you shortly.")
 }
 

// Function to toggle the menu display
function toggleMenu() {
    var menu = document.getElementById("nav-menu");
    
    // Check the current display status of the menu
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

// Function to close the menu when clicking outside
function closeMenu(event) {
    var menu = document.getElementById("nav-menu");
    var menuIcon = document.getElementById("nav-menu-icon");

    // Check if the click was outside the menu and the menu icon and the menu is open
    if (menu.style.display === "block" && !menu.contains(event.target) && event.target !== menuIcon) {
        menu.style.display = "none";
    }
}

// Add the event listener to the document to detect clicks outside the menu
document.addEventListener("click", closeMenu);

//Fuction to toogle Login menu  section
function togglelogin() {
    var menu = document.getElementById("login-menu");
    
    // Check the current display status of the menu
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

// Function to close the menu when clicking outside
function closeMenu(event) {
    var menu = document.getElementById("login-menu");
    var menuIcon = document.getElementById("acc-menu-icon");

    // Check if the click was outside the menu and the menu icon and the menu is open
    if (menu.style.display === "block" && !menu.contains(event.target) && event.target !== menuIcon) {
        menu.style.display = "none";
    }
}

// Add the event listener to the document to detect clicks outside the menu
document.addEventListener("click", closeMenu);


// JavaScript to toggle the display of FAQ answers
var currentlyOpenAnswer = null;

    function faqanswer(clickedElement) {
        var answer = clickedElement.nextElementSibling; // Get the associated answer div

        if (currentlyOpenAnswer && currentlyOpenAnswer !== answer) {
            currentlyOpenAnswer.style.display = "none"; // Hide the currently open answer
        }

        // Toggle the display of the clicked answer
        if (answer.style.display === 'block') {
            answer.style.display = "none";
            currentlyOpenAnswer = null; // Reset the currently open answer
        } else {
            answer.style.display = "block";
            currentlyOpenAnswer = answer; // Update the currently open answer
        }
    }


    // fuction for displaying different budget selection
    function displayOptions() {
        // Get the selected value from the dropdown
        var selectedOption = document.getElementById("cal-options").value;
    
        // Get the content divs
        var vehicleOptionsDiv = document.getElementById("vehicle-options");
        var budgetOptionsDiv = document.getElementById("budget-options");
    
        // Display different content based on the selected option
        if (selectedOption === "vehicle") {
            vehicleOptionsDiv.classList.remove("hidden");
            budgetOptionsDiv.classList.add("hidden");
        } else if (selectedOption === "budget") {
            budgetOptionsDiv.classList.remove("hidden");
            vehicleOptionsDiv.classList.add("hidden");
        }
    
        // Perform calculation based on the selected option
        calculateResults();
    }
    
    function calculateResults() {
        // Get the selected search type
        var searchType = document.getElementById("cal-options").value;
    
        // Perform the appropriate calculation based on search type
        if (searchType === "vehicle") {
            calculateVehicleResults();
        } else if (searchType === "budget") {
            calculateBudgetResults();
        }
    }
    
    function calculateVehicleResults() {
        // Get selected values
        let location = document.getElementById("location-options-vehicle").value;
        let model = document.getElementById("model-options-vehicle").value;
        let duration = document.getElementById("duration-options-vehicle").value;
    
        // Check if all fields are filled
        if (!location || !model || !duration) {
            return; // Exit the function if any field is empty
        }
    
        // Initialize variables
        let estimatedValue = 0;
        let annualROI = 0;
        let avgEarnings = 0;
    
        // Simplified calculation logic
        if (location === "London" || model === "Audi Q3" || duration === "Yearly") {
            if (location === "London") estimatedValue += 5000; // London adds a premium
            if (model === "Audi Q3") estimatedValue += 25000;
            if (duration === "Yearly") annualROI = estimatedValue * 0.1;
        } else if (location === "Kampala" || model === "Benz GLE 63" || duration === "Monthly") {
            if (location === "Kampala") estimatedValue += 3000; // Kampala has a different market value
            if (model === "Benz GLE 63") estimatedValue += 45000;
            if (duration === "Monthly") annualROI = estimatedValue * 0.1 / 12;
        }
    
        // Calculate average earnings
        avgEarnings = (annualROI / 12).toFixed(2);
    
        // Display results
        document.getElementById("value-results").innerText = `$${estimatedValue.toFixed(2)}`;
        document.getElementById("ROI-results").innerText = `$${annualROI.toFixed(2)}`;
        document.getElementById("avg-results").innerText = `$${avgEarnings}`;
    }
    
    function calculateBudgetResults() {
        // Get selected values
        let location = document.getElementById("location-options-budget").value;
        let budgetRange = document.getElementById("model-options-budget").value;
        let duration = document.getElementById("duration-options-budget").value;
    
        // Check if all fields are filled
        if (!location || !budgetRange || !duration) {
            return; // Exit the function if any field is empty
        }
    
        // Initialize variables
        let estimatedValue = 0;
        let annualROI = 0;
        let avgEarnings = 0;
    
        // Simplified calculation logic
        if (location === "London" || budgetRange === "$10k to $15k" || duration === "Yearly") {
            if (location === "London") estimatedValue += 10000; // London adds a premium
            if (budgetRange === "$10k to $15k") estimatedValue += 15000;
            if (duration === "Yearly") annualROI = estimatedValue * 0.08;
        } else if (location === "Kampala" || budgetRange === "$15k to $40k" || duration === "Monthly") {
            if (location === "Kampala") estimatedValue += 8000; // Kampala has a different market value
            if (budgetRange === "$15k to $40k") estimatedValue += 35000;
            if (duration === "Monthly") annualROI = estimatedValue * 0.08 / 12;
        }
    
        // Calculate average earnings
        avgEarnings = (annualROI / 12).toFixed(2);
    
        // Display results
        document.getElementById("value-results").innerText = `$${estimatedValue.toFixed(2)}`;
        document.getElementById("ROI-results").innerText = `$${annualROI.toFixed(2)}`;
        document.getElementById("avg-results").innerText = `$${avgEarnings}`;
    }
    


    // Add the event listener to the document to detect clicks outside the form
document.addEventListener("click", closeMenu);

//Fuction to toogle  signup form  section
function togglesignup() {
    var menu = document.getElementById("signup");
    
    // Check the current display status of the menu
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

// Function to close the menu when clicking outside
function closeMenu(event) {
    var menu = document.getElementById("signup");
    var menuIcon = document.getElementById("acc-signup");

    // Check if the click was outside the menu and the menu icon and the menu is open
    if (menu.style.display === "block" && !menu.contains(event.target) && event.target !== menuIcon) {
        menu.style.display = "none";
    }
}

// Add the event listener to the document to detect clicks outside the menu
document.addEventListener("click", closeMenu);

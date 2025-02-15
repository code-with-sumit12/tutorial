//active navbar
// Active navbar on scroll
let nav = document.querySelector(".navigation-wrap");
window.onscroll = function() {
    // Check if scroll position is greater than 20 pixels
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add("scroll-on"); // Add 'scroll-on' class when scrolled down
    } else {
        nav.classList.remove("scroll-on"); // Remove 'scroll-on' class when scrolled up
    }
};

// Navbar hide on link click (for collapsing menus)
let navbar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");

navbar.forEach(function(a) {
    a.addEventListener("click", function() {
        navCollapse.classList.remove("show"); // Hide navbar collapse when link is clicked
    });
});

// Counter design
document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration) {
        let obj = document.getElementById(id), // Get the element by its ID
            current = start, // Initialize counter at start value
            range = end - start, // Calculate the range of the counter
            increment = end > start ? 1 : -1, // Determine if counter should increase or decrease
            step = Math.abs(Math.floor(duration / range)), // Calculate step time based on duration
            timer = setInterval(() => {
                current += increment; // Increment or decrement the counter
                obj.textContent = current; // Update the HTML element with the current value
                if (current == end) { // Stop the counter when end value is reached
                    clearInterval(timer);
                }
            }, step);
    }

    // Initializing the counters with ID, start, end, and duration
    counter("count1", 0, 2556, 3435);
    counter("count2", 100, 2500, 2435);
    counter("count3", 0, 1556, 3435);
    counter("count4", 0, 1000, 3435);
});


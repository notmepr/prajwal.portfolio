document.addEventListener("DOMContentLoaded", () => {
    // Get all the filter buttons and projects
    const filterButtons = document.querySelectorAll("#filter-buttons button");
    const projects = document.querySelectorAll(".project");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            const filter = button.getAttribute("data-filter");

            // Show or hide projects based on the filter
            projects.forEach(project => {
                const category = project.getAttribute("data-category");

                if (filter === "all" || category === filter) {
                    project.style.display = "block"; // Show matching project
                } else {
                    project.style.display = "none"; // Hide non-matching project
                }
            });

            // Update active button: remove active class from all buttons, add it to the clicked button
            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
        });
    });
});

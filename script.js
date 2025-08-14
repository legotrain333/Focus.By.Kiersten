document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling
    const navLinks = document.querySelectorAll('.nav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetSection = document.querySelector(this.getAttribute('href'));
            if(targetSection){
                const offset = document.querySelector('.header').offsetHeight;
                window.scrollTo({ top: targetSection.offsetTop - offset, behavior: 'smooth' });
            }
        });
    });

    // Header scroll background
    const header = document.querySelector('.header');
    window.addEventListener('scroll', function() {
        if(window.scrollY > 100){
            header.style.backgroundColor = 'rgba(255,255,255,0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.backgroundColor = '#fff';
            header.style.backdropFilter = 'none';
        }
    });

    // Option buttons helper
    function setupOptionButtons(groupId, inputId) {
        const group = document.getElementById(groupId);
        const input = document.getElementById(inputId);
        const buttons = group.querySelectorAll(".option-btn");

        buttons.forEach(button => {
            button.addEventListener("click", () => {
                buttons.forEach(btn => btn.classList.remove("active"));
                button.classList.add("active");
                input.value = button.dataset.value;
            });
        });
    }

    // Initialize all button groups
    setupOptionButtons("sessionLength", "session_length_input");
    setupOptionButtons("editingPackage", "editing_package_input");
    setupOptionButtons("distribution", "distribution_input");
    setupOptionButtons("paymentType", "payment_type_input");
    setupOptionButtons("paymentMethod", "payment_method_input");
});

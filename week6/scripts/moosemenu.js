document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.accordion-btn');
  
    buttons.forEach(button => {
      button.addEventListener('click', function () {
        const content = this.nextElementSibling;
  
        // Close other accordions
        document.querySelectorAll('.accordion-content').forEach(c => {
          if (c !== content) c.style.display = 'none';
        });
  
        // Toggle this one
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
      });
    });
  });
  
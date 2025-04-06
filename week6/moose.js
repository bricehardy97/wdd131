// Menu Data (Array of Objects)
const menuItems = [
    {
      name: "Classic Snow Cone",
      description: "A refreshing ice cone with your choice of syrup flavor!",
      price: "$5.00"
    },
    {
      name: "Tropical Snow Cone",
      description: "Tropical flavors like mango, pineapple, and coconut!",
      price: "$6.00"
    },
    {
      name: "Blue Raspberry Blast",
      description: "Blue raspberry flavor with a refreshing twist!",
      price: "$5.50"
    }
  ];
  
  // Load Menu Items Dynamically
  window.onload = function() {
    const menuContainer = document.getElementById('menu-items');
    menuItems.forEach(item => {
      const div = document.createElement('div');
      div.classList.add('menu-item');
      div.innerHTML = `
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        <p class="price">${item.price}</p>
      `;
      menuContainer.appendChild(div);
    });
  };
  
  // Contact Form Handling
  const form = document.getElementById('contact-form');
  form.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    // Store data in localStorage
    localStorage.setItem('lastMessage', JSON.stringify({ name, email, message }));
  
    // Show confirmation message
    alert(`Thank you for contacting us, ${name}! We will get back to you soon at ${email}.`);
    
    // Clear the form
    form.reset();
  });
  
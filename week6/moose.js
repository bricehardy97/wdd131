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
  }
// Array of events
{
const events = [
    {
      date: '2025-05-15',
      location: 'Downtown Park',
      time: '12:00 PM - 5:00 PM',
      description: 'Join us for delicious snow cones and snacks!'
    },
    {
      date: '2025-05-16',
      location: 'Lakeside Beach',
      time: '11:00 AM - 4:00 PM',
      description: 'Come enjoy a refreshing treat by the lake!'
    },
    {
      date: '2025-05-20',
      location: 'Greenwood Mall',
      time: '10:00 AM - 7:00 PM',
      description: 'Catch us at the mall for some sweet shaved ice!'
    },
  ];
  
  // Function to render the calendar
  function renderCalendar() {
    const calendarContainer = document.getElementById('event-calendar');
    const daysInMonth = new Date(2025, 4, 0).getDate(); // May 2025
    const firstDay = new Date(2025, 4, 1).getDay(); // Day of the week for 1st May
    
    // Loop to create the days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      const dayElement = document.createElement('div');
      dayElement.classList.add('calendar-day');
      
      // Format date
      const date = new Date(2025, 4, i);
      const dateString = date.toISOString().split('T')[0]; // Format: YYYY-MM-DD
      
      dayElement.innerHTML = `<span>${i}</span>`;
      
      // Check if there are events on that day
      const dayEvents = events.filter(event => event.date === dateString);
      if (dayEvents.length > 0) {
        dayElement.classList.add('has-event');
        const eventDetails = dayEvents.map(event => `
          <div class="event-info">
            <div class="location">${event.location}</div>
            <div class="time">${event.time}</div>
            <p>${event.description}</p>
          </div>
        `).join('');
        dayElement.innerHTML += eventDetails;
      }
  
      calendarContainer.appendChild(dayElement);
    }
  }
  
  // Function to load events into localStorage (if needed)
  function loadEvents() {
    if (localStorage.getItem('events')) {
      return JSON.parse(localStorage.getItem('events'));
    }
    localStorage.setItem('events', JSON.stringify(events));
    return events;
  }
  
  // Initialize the calendar and load events
  window.onload = function() {
    loadEvents(); // Load the events from localStorage
    renderCalendar(); // Render the calendar dynamically
  }
}
);
  
const monthYear = document.getElementById("monthYear");
const calendarDays = document.getElementById("calendarDays");
const prevMonth = document.getElementById("prevMonth");
const nextMonth = document.getElementById("nextMonth");

let currentDate = new Date();

// Example events (add more!)
const events = {
  "2025-04-10": "Free Flavor Friday!",
  "2025-04-20": "Pop-Up in Central Park",
  "2025-04-27": "Birthday Bash 🍧",
};

function renderCalendar(date) {
  const year = date.getFullYear();
  const month = date.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const lastDate = new Date(year, month + 1, 0).getDate();

  // Update title
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  monthYear.textContent = `${monthNames[month]} ${year}`;

  // Clear previous
  calendarDays.innerHTML = "";

  // Add empty cells before first day
  for (let i = 0; i < firstDay; i++) {
    calendarDays.innerHTML += `<div></div>`;
  }

  // Add actual days
  for (let day = 1; day <= lastDate; day++) {
    const dayStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    const isEvent = events[dayStr];

    const dayDiv = document.createElement("div");
    if (isEvent) {
      dayDiv.classList.add("event-day");
      dayDiv.title = events[dayStr];
    }
    dayDiv.textContent = day;
    calendarDays.appendChild(dayDiv);
  }
}

// Navigation
prevMonth.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar(currentDate);
});

nextMonth.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar(currentDate);
});

// Initial render
renderCalendar(currentDate);
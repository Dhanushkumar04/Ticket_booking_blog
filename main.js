
const eventTickets = {
    'Concert': 100,
    'Movie': 50,
    'Sports Event': 200,
    'Theatre Play': 150
};

const eventSelect = document.getElementById('event');
const ticketsRemainingSpan = document.getElementById('ticketsRemaining');

eventSelect.addEventListener('change', updateTicketsRemaining);

function updateTicketsRemaining() {
    const selectedEvent = eventSelect.value;
    ticketsRemainingSpan.textContent = eventTickets[selectedEvent];
}

const ticketForm = document.getElementById('ticketForm');
ticketForm.addEventListener('submit', handleTicketBooking);

function handleTicketBooking(event) {
    event.preventDefault();

    const selectedEvent = eventSelect.value;

    if (eventTickets[selectedEvent] > 0) {
        eventTickets[selectedEvent]--;

        ticketsRemainingSpan.textContent = eventTickets[selectedEvent];

        alert(`Ticket booked successfully for the ${selectedEvent}! Tickets remaining: ${eventTickets[selectedEvent]}`);
    } else {
        alert(`Sorry, no tickets available for the ${selectedEvent} at this time.`);
    }
}

updateTicketsRemaining();

document.getElementById('ticketForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const eventSelected = document.getElementById('event').value;
    const date = document.getElementById('date').value;

    alert(`Ticket booked successfully for ${name} (${email}) to the ${eventSelected} on ${date}.`);

    window.location.href = 'thank_you.html';
});

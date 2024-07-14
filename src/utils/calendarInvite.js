// src/utils/calendarInvite.js
export const generateCalendarInvite = ({ horse, date, time, name, email }) => {
    const start = new Date(`${date}T${time}:00`);
    const end = new Date(start.getTime() + 60 * 60 * 1000); // 1 hour later
  
    const ical = `
  BEGIN:VCALENDAR
  VERSION:2.0
  PRODID:-//Your Company//NONSGML Event//EN
  BEGIN:VEVENT
  UID:${Date.now()}@yourdomain.com
  DTSTAMP:${start.toISOString().replace(/[-:]/g, '').slice(0, -5)}Z
  DTSTART:${start.toISOString().replace(/[-:]/g, '').slice(0, -5)}Z
  DTEND:${end.toISOString().replace(/[-:]/g, '').slice(0, -5)}Z
  SUMMARY:Horse Ride with ${horse}
  DESCRIPTION:Booking details for ${name} (${email})
  LOCATION:Horse Stable
  END:VEVENT
  END:VCALENDAR
  `;
  
    // For demonstration purposes, this logs the invite. You might want to send it via email or provide a download link.
    console.log(ical); 
  
    // Example of sending the invite via email (this requires a backend service)
    // fetch('/send-invite', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({ ical, email })
    // });
  };
  
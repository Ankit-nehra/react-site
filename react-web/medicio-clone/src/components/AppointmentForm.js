import React from "react";
import "./AppointmentForm.css";

function AppointmentForm() {
  return (
    <section className="appointment"data-aos="fade-up"
  data-aos-delay="200"
  data-aos-duration="1500">
      <div className="Appointment-container">
        <h2 className="appointment-title">Make an Appointment</h2>
        <form className="appointment-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="text" placeholder="Your Phone" required />
          <input type="date" required />
          <textarea placeholder="Message (Optional)"></textarea>
          <button type="submit">Submit Appointment</button>
        </form>
      </div>
    </section>
  );
}

export default AppointmentForm;

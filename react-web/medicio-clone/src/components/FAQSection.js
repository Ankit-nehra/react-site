import React, { useState } from "react";
import "./FAQSection.css";

function FAQSection() {
  const faqs = [
    {
      question: "What are your clinic hours?",
      answer: "We’re open from 8:00 AM to 8:00 PM, Monday through Saturday.",
    },
    {
      question: "Do I need an appointment before visiting?",
      answer: "Appointments are recommended but not mandatory. Walk-ins are welcome.",
    },
    {
      question: "What health insurance do you accept?",
      answer: "We accept most major insurance plans. Please contact our helpdesk for confirmation.",
    },
    {
      question: "Do you have emergency services?",
      answer: "Yes, we offer 24/7 emergency support including ambulance service.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq"data-aos="fade-up"
  data-aos-delay="200"
  data-aos-duration="1500">
      <div className="FAQcontainer">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqs.map((item, index) => (
            <div
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
              key={index}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">{item.question}</div>
              <div className="faq-answer">{item.answer}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQSection;

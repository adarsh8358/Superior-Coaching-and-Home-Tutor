import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./WhatsAppButton.scss";

const WhatsAppButton = () => {
  const [open, setOpen] = useState(false);

  const whatsappNumber = "917566974641"; // <-- Replace with your WhatsApp number (with country code, no + sign)

  // Predefined messages
  const studentMsg = "Hi, I’m looking for a home tutor. Please help me with the details.";
  const tutorMsg = "Hi, I’m interested in becoming a tutor. Please share the process.";

  const openWhatsApp = (message) => {
    const encodedMsg = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMsg}`, "_blank");
    setOpen(false);
  };

  return (
    <div className="whatsapp-wrapper">
      {/* Main Button */}
      <button className="whatsapp-btn" onClick={() => setOpen(!open)}>
        <FaWhatsapp className="icon" />
      </button>

      {/* Dropdown Options */}
      {open && (
        <div className="whatsapp-options">
          <button onClick={() => openWhatsApp(studentMsg)}>
            🧑‍🎓 Need a Home Tutor
          </button>
          <button onClick={() => openWhatsApp(tutorMsg)}>
            👨‍🏫 Become a Tutor
          </button>
        </div>
      )}
    </div>
  );
};

export default WhatsAppButton;

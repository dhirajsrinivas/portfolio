import "../App.css"; // Ensure your CSS file is linked properly

export default function Contact() {
  return (
    <div className="contact-section">
      <h2 className="headingC">Contact Me</h2>
      <p>Feel free to reach out if you're interested in collaborating or discussing any opportunities!</p>
      
      <ul className="contact-list">
        <li><strong>Email:</strong> <a href="mailto:srinivasdhiraj@gmail.com">srinivasdhiraj@gmail.com</a></li>
        <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/dhiraj-srinivas-503a18283/?trk=opento_sprofile_details" target="_blank">K.R. Dhiraj Srinivas</a></li>
        <li><strong>GitHub:</strong> <a href="https://github.com/dhirajsrinivas" target="_blank">dhiraj srinivas</a></li>
      </ul>
    </div>
  );
}

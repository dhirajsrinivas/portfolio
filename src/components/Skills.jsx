import "../App.css";  // Ensure App.css is inside the src directory

export default function Skills() {
  return (
    <div className="skills-section">
      <h2 className="heading2">Skills</h2>
      <ul className="skills-list">
        <li><strong>Front-end:</strong> HTML, CSS, JavaScript, React, Bootstrap</li>
        <li><strong>Back-end:</strong> Node.js, Express.js</li>
        <li><strong>Database:</strong> PostgreSQL</li>
        <li><strong>Version Control & Tools:</strong> Git, GitHub, npm</li>
      </ul>
    </div>
  );
}

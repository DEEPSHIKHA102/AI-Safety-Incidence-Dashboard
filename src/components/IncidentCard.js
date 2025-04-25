import { useState } from 'react';
import './IncidentCard.css';

const IncidentCard = ({ incident }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="incident-card">
      <h3>{incident.title}</h3>
      <p><strong>Severity:</strong> {incident.severity}</p>
      <p><strong>Date:</strong> {new Date(incident.date).toLocaleDateString()}</p> {/* Use incident.date */}
      <button onClick={() => setExpanded(!expanded)}>
        {expanded ? "Hide Details" : "View Details"}
      </button>
      {expanded && <p className="description">{incident.description}</p>}
    </div>
  );
};

export default IncidentCard;

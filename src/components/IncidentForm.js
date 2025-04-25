import { useState } from 'react';
import './IncidentForm.css';

const IncidentForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [severity, setSeverity] = useState('Low');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !desc) return;
    
    // Add the current date when submitting the form
    const newIncident = {
      title,
      description: desc,
      severity,
      date: new Date().toISOString(), // Adding the current date
    };

    onSubmit(newIncident);
    setTitle('');
    setDesc('');
    setSeverity('Low');
  };

  return (
    <form className="incident-form" onSubmit={handleSubmit}>
      <h3 id="headingh3">Report New Incident</h3>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        required
      />
      <label>
        <h4 id="id4">Severity:</h4>
      </label>
      <select value={severity} onChange={(e) => setSeverity(e.target.value)}>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  );
};

export default IncidentForm;

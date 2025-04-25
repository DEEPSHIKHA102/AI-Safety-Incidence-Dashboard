// src/App.js
import './App.css';
import { useState } from 'react';
import { mockIncidents } from './data/mockData';
import IncidentCard from './components/IncidentCard';
import IncidentForm from './components/IncidentForm';
import FilterControls from './components/FilterControls';

const App = () => {
  const [incidents, setIncidents] = useState(mockIncidents);
  const [severityFilter, setSeverityFilter] = useState('All');
  const [sortOrder, setSortOrder] = useState('newest');

  const handleAddIncident = (incident) => {
    const newIncident = {
      id: incidents.length + 1,
      ...incident,
      reported_at: new Date().toISOString()
    };
    setIncidents([newIncident, ...incidents]);
  };

  const filtered = incidents.filter(i =>
    severityFilter === 'All' ? true : i.severity === severityFilter
  );

  const sorted = [...filtered].sort((a, b) => {
    const da = new Date(a.reported_at);
    const db = new Date(b.reported_at);
    return sortOrder === 'newest' ? db - da : da - db;
  });

  return (
    <div className="container">
      <header><h1>🧠 AI Safety Incident Dashboard</h1>
      <p className="header-subtitle">Monitor and report AI safety issues in real-time</p></header>
      
 
      <div className="main">
        <aside>
          <FilterControls
            severityFilter={severityFilter}
            setSeverityFilter={setSeverityFilter}
            sortOrder={sortOrder}
            setSortOrder={setSortOrder}
          />
          <IncidentForm onSubmit={handleAddIncident} />
        </aside>
        <section className="incidents">
          <h2>List of mock AI safety incidents:</h2>
          <div className="grid">
            {sorted.map(i => (
              <IncidentCard key={i.id} incident={i} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;



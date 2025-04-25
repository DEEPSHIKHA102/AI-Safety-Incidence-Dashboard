// src/components/Sidebar.js (example)
import React from 'react';
import IncidentForm from './IncidentForm';
import './Sidebar.css';

const Sidebar = ({ onAddIncident, onFilterChange, onSortChange }) => {
  return (
    <div className="sidebar">
      <IncidentForm onSubmit={onAddIncident} />

      <div className="filter-section">
        <label>Filter by Severity:</label>
        <select onChange={(e) => onFilterChange(e.target.value)}>
          <option value="All">All</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>

      <div className="sort-section">
        <label>Sort by Date:</label>
        <select onChange={(e) => onSortChange(e.target.value)}>
          <option value="latest">Latest First</option>
          <option value="oldest">Oldest First</option>
        </select>
      </div>
    </div>
  );
};

export default Sidebar;

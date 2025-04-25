// src/components/FilterControls.js
import React from 'react';
import './FilterControls.css';  // Importing the CSS file

const FilterControls = ({ severityFilter, setSeverityFilter, sortOrder, setSortOrder }) => {
  return (
    
    <div className="filter-card">
      <div className="filter-header">
        <h3 id='headingh3'>Filter & Sort Controls</h3>
      </div>
      <div className="filter-body">
        <label><h4><u>Filter by Severity:</u></h4></label>
        <select value={severityFilter} onChange={e => setSeverityFilter(e.target.value)}>
          <option value="All">All</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        
        
        <label><h4><u>Sort by Date:</u></h4></label>
        <select value={sortOrder} onChange={e => setSortOrder(e.target.value)}>
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
        </select>
      </div>
    </div>
  );
};

export default FilterControls;

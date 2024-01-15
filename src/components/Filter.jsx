import React from 'react';
import './Filter.css';

const Filter = ({ filter, onFilterChange }) => {
  return (
    <div>
      <label>
        Filter Contacts:
        <input
          type="text"
          value={filter}
          onChange={onFilterChange}
          placeholder="Search by name"
        />
      </label>
    </div>
  );
};

export default Filter;

import React from 'react';
import './Table.css';

const Table = ({ number, status, isSelected, onSelect, capacity, description }) => {
  const tableClasses = `
    restaurant-table-wrapper
    ${status === 'occupied' ? 'occupied' : ''}
    ${isSelected ? 'selected' : ''}
  `;

  const tableShapeClasses = `
    restaurant-table-shape
    ${capacity > 2 ? 'table-group' : 'table-couple'}
  `;

  const handleClick = () => {
    if (status !== 'occupied') {
      onSelect(); 
    }
  };

  return (
    // Adicionamos um wrapper para o tooltip
    <div className={tableClasses} onClick={handleClick}>
      <div className={tableShapeClasses}>
        <span className="table-number">{number}</span>
      </div>
      {/* O tooltip com a descrição */}
      <span className="table-tooltip">{description}</span>
    </div>
  );
};

export default Table;
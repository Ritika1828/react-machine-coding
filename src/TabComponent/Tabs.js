import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Tab = ({ active, label, onChange, disabled = false }) => {
    return (
      <div
        style={{
          padding: '10px',
          cursor: 'pointer',
          borderBottom: active ? '2px solid #1976d2' : '2px solid transparent',
          color: disabled ? "grey" : active ? '#1976d2' : 'black',
        }}
        onClick={disabled ? null : onChange}
      >
        {label}
      </div>
    );
  };

const Tabs = ({ activeTab, children, onChange }) => {
  
  const handleChange = (index) => {
    onChange && onChange(index)
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {React.Children.map(children, (child, index) => {
          if (child.type === Tab) {
            return React.cloneElement(child, {
              active: activeTab === index,
              onChange: () => handleChange(index),
            });
          }
        })}
      </div>
      <div>
        {React.Children.map(children, (child, index) => {
          if (child.type !== Tab && activeTab === index) {
            return child;
          }
        })}
      </div>
    </div>
  );
}

export { Tabs, Tab };

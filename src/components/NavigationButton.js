import PropType from 'prop-types';
import React from 'react';

export default function NavigationButton({ id, className, onClick, label }) {
  return (
    <h3 id={id} className={className} onClick={onClick}>
      {label}
    </h3>
  );
}

NavigationButton.propTypes = {
  id: PropType.string.isRequired,
  className: PropType.string.isRequired,
  onClick: PropType.func,
  label: PropType.string.isRequired
};

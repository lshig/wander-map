import PropType from 'prop-types';
import React from 'react';

export default function NavigationButton({ id, onClick, label }) {
  return (
    <h3 className="mapNavigation" id={id} onClick={onClick}>
      {label}
    </h3>
  );
}

NavigationButton.propTypes = {
  id: PropType.string.isRequired,
  label: PropType.string.isRequired,
  onClick: PropType.func.isRequired
};

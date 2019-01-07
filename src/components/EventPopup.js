import PropType from 'prop-types';
import React from 'react';

export default function EventPopup({ text }) {
  return <div className="popup">{text}</div>
};

EventPopup.propTypes = {
  text: PropType.string.isRequired
};

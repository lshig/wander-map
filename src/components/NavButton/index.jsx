import React from 'react'
import PropType from 'prop-types'
export default function NavButton ({
  id,
  className,
  onClick,
  label
}) {
  return (
    <h3
      id={id}
      className={className}
      onClick={onClick}>
      {label}
    </h3>
  )
}
NavButton.propTypes = {
  id: PropType.string.isRequired,
  className: PropType.string.isRequired,
  onClick: PropType.func,
  label: PropType.string.isRequired
}

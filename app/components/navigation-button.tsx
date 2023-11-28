import React from 'react';

interface NavigationButtonProps {
  buttonId: string;
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function NavigationButton({
  buttonId,
  label,
  onClick
}: NavigationButtonProps) {
  return (
    <button className="map-navigation" id={buttonId} onClick={onClick}>
      {label}
    </button>
  );
}

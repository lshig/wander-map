interface MapControlButtonProps {
  controlId: string;
  className: string;
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function MapControlButton({
  controlId,
  className,
  label,
  onClick
}: MapControlButtonProps) {
  return (
    <button className={className} id={controlId} onClick={onClick}>
      {label}
    </button>
  );
}

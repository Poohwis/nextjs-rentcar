interface ButtonProps {
  label: string;
  bgColor: string;
  textColor: string;
}
export default function Button({ label, bgColor, textColor }: ButtonProps) {
  return (
    <div
      className="hover:cursor-pointer hover:opacity-80 
      transition-colors text-sm px-2 py-1  rounded-lg
    "
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      {label}
    </div>
  );
}

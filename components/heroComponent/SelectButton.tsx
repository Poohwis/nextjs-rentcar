interface HeroButtonProps {
  children?: React.ReactNode;
  label: string;
  placeholder?: string;
}
export default function SelectButton({
  children,
  label,
  placeholder,
}: HeroButtonProps) {
  return (
    <div className={ `bg-muted h-10 rounded-md w-full` } >
      <div className="text-[10px] text-muted-foreground pl-2 mt-1 flex-row flex gap-x-1">
        {children}
        {label}
      </div>
      <div className="text-[12px] text-muted-foreground pl-2">{placeholder}</div>
    </div>
  );
}

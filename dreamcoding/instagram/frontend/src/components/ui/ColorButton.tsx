interface Props {
  text: string;
  onClick: () => void;
}

export default function ColorButton({ text, onClick }: Props) {
  return (
    <div className="rounded-md bg-gradient-to-bl from-fuchsia-600 via-rose-500 to-amber-300 p-[0.15rem]">
      <button
        type="button"
        onClick={onClick}
        className="bg-white rounded-sm text-sm py-0.5 px-1 hover:opacity-90 transition-opacity"
      >
        {text}
      </button>
    </div>
  );
}

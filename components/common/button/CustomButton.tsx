import { twMerge } from 'tailwind-merge';

interface ButtonPropsType {
  name: string;
  style?: string;
  onClick: () => void;
}
function CustomButton({ name, style, onClick }: ButtonPropsType) {
  return (
    <button
      className={twMerge(
        `px-2 py-3 w-full flex items-center justify-center rounded-md bg-primary-500 text-white font-[600] ${
          style && style
        }`,
      )}
      aria-label={name}
      onClick={onClick}
    >
      {name}
    </button>
  );
}
export default CustomButton;

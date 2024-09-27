import { FC, PropsWithChildren } from 'react';

interface BaseButtonProps extends PropsWithChildren {
  onClick?: () => void;
}

const BaseButton: FC<BaseButtonProps> = ({ children, onClick }) => {
  return (
    <button
      className="text-xs border px-2 py-1 rounded-md border-mainBorder text-contentPrimary"
      onClick={() => onClick?.()}
    >
      {children}
    </button>
  );
};

export default BaseButton;

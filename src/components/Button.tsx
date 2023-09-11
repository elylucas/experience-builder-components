import React from 'react';

export interface ButtonProps {
  children?: React.ReactNode;
  primary?: boolean;
  disabled?: boolean;
  size?: 'small' | 'medium' | 'large';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return <button {...props}>{children}</button>;
};

export default Button;

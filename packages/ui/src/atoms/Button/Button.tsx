import React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { Loading } from '@hu/icons';
import { Icon } from '../Icon';

const button = tv({
  base: 'rounded-3xl select-none inline-flex items-center align-middle justify-center gap-x-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-Neutral-Black  data-loading:cursor-not-allowed',
  variants: {
    size: {
      normal: 'px-8 py-4 text-lg leading-6',
      medium: 'px-8 py-[14px] text-base leading-5',
      small: 'px-6 py-2 text-sm leading-4',
    },
    variant: {
      primary: [
        'bg-Primary-M_Blue text-Neutral-White hover:bg-Primary-Navy focus-visible:bg-Primary-Navy active:bg-Primary-D_Blue active:ring-0',
        'data-loading:bg-Primary-D_Blue',
      ],
      secondary: [
        'bg-transparent text-Primary-M_Blue ring-1 ring-inset ring-Primary-M_Blue hover:bg-Primary-L_Blue focus-visible:bg-Primary-L_Blue active:bg-Primary-L_Blue active:ring-0',
        'data-loading:bg-Primary-L_Blue data-loading:text-Primary-M_Blue data-loading:ring-0',
      ],
      tertiary: [
        'bg-transparent text-Primary-M_Blue hover:bg-Primary-L_Blue active:bg-Primary-Sky active:ring-0',
        'data-loading:bg-Primary-Sky',
      ],
    },
    disabled: {
      true: 'disabled:bg-Primary-L_Blue disabled:text-Neutral-Grey-blue disabled:cursor-not-allowed disabled:ring-0',
    },
  },
  defaultVariants: {
    size: 'medium',
    variant: 'primary',
  },
});

type ButtonVariants = VariantProps<typeof button>;

export interface ButtonProps
  extends React.HTMLAttributes<HTMLButtonElement>,
    ButtonVariants {
  /** If true, the button will show a spinner. */
  isLoading?: boolean;
  /** If true, the button will be disabled. */
  isDisabled?: boolean;
  /** If added, the button will show an icon. */
  icon?: React.ReactNode;
  /** By Default is Left, let you choose where to put the icon after or before the button label. */
  iconPosition?: 'Left' | 'Right';
  /** React Children */
  children?: React.ReactNode;
}

/**
 * Button component is used to trigger an action or event, such as submitting a form,
 * opening a Dialog, canceling an action, or performing a delete operation.
 */
export function Button({
  variant = 'primary',
  size = 'medium',
  isDisabled = false,
  isLoading = false,
  icon,
  iconPosition = 'Left',
  onClick,
  children,
  ...props
}: ButtonProps) {
  const renderIcon = <Icon size={size === 'normal' ? 'md' : 'sm'}>{icon}</Icon>;
  return (
    <button
      type="button"
      className={button({ size, variant, disabled: isDisabled })}
      disabled={isDisabled}
      data-loading={isLoading}
      tabIndex={isDisabled || isLoading ? -1 : 0}
      onClick={onClick}
      {...props}
    >
      {iconPosition === 'Left' && icon && !isLoading && renderIcon}
      {children}
      {isLoading && (
        <Icon className="animate-spin" size={size === 'normal' ? 'md' : 'sm'}>
          {<Loading />}
        </Icon>
      )}
      {iconPosition === 'Right' && icon && !isLoading && renderIcon}
    </button>
  );
}
export default Button;

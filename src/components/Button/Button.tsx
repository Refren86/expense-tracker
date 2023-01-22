import { ButtonHTMLAttributes, FC } from 'react';

import { BaseButton, ButtonSpinner, InvertedButton } from './Button.styles';

export enum BUTTON_TYPE_CLASSES {
  BASE = 'base',
  INVERTED = 'inverted',
}

// { base: BaseButton, inverted: InvertedButton }['base'] returns BaseButton
const getButton = (buttonType = BUTTON_TYPE_CLASSES.BASE): typeof BaseButton =>
  ({
    [BUTTON_TYPE_CLASSES.BASE]: BaseButton,
    [BUTTON_TYPE_CLASSES.INVERTED]: InvertedButton,
  }[buttonType]);

export type ButtonProps = {
  buttonType?: BUTTON_TYPE_CLASSES;
  isLoading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<ButtonProps> = ({
  children,
  buttonType,
  isLoading,
  ...otherProps
}) => {
  const CustomButton = getButton(buttonType);

  return (
    <CustomButton disabled={isLoading} {...otherProps}>
      {isLoading ? <ButtonSpinner /> : children}
    </CustomButton>
  );
};

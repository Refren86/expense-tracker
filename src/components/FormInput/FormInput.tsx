import { FC, InputHTMLAttributes } from 'react'

import { FormInputLabel, Group, Input } from './FormInput.styles';

type TFormInputProps = {
  label: string;
} & InputHTMLAttributes<HTMLInputElement>;;

export const FormInput: FC<TFormInputProps> = ({ label, ...otherProps }) => {
  return (
    <Group>
      <Input {...otherProps} />

      {label && (
        <FormInputLabel
          shrink={Boolean(
            otherProps.value &&
              typeof otherProps.value === 'string' &&
              otherProps.value.length
          )}
        >
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};
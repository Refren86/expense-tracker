import { FC } from 'react';

import { TOption } from '../../../types';

import { SelectItem } from './DropdownItem.styles';

export type TDropdownItem = {
  option: TOption;
  onSelect: (value: any) => void;
};

export const DropdownItem: FC<TDropdownItem> = ({ option, onSelect }) => {
  return (
    <SelectItem onClick={() => onSelect(option.value)}>
      {option.label}
    </SelectItem>
  );
};

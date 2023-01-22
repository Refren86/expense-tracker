import { FC, HTMLAttributes, memo, useState } from 'react';

import { TOption } from '../../types';
import { DropdownList } from './DropdownList/DropdownList';

import { ReactComponent as ChevronDownIcon } from '../../assets/svgs/ChevronDown.svg';
import { DropdownHeader } from './Dropdown.styles';

export type TDropdownProps = {
  title: string;
  options: TOption[];
  onSelect: (value: any) => void;
} & HTMLAttributes<HTMLDivElement>;

export const Dropdown: FC<TDropdownProps> = memo(
  ({ title, options, onSelect }) => {
    const [isDropdownOpen, setDropdownOpen] = useState<boolean>(false);

    const toggleDropdown = () => setDropdownOpen((prev) => !prev);

    return (
      <div style={{ position: 'relative' }}>
        <DropdownHeader onClick={toggleDropdown}>
          {title}

          <ChevronDownIcon style={{ width: '18px', height: '18px' }} />
        </DropdownHeader>

        <DropdownList
          opened={isDropdownOpen}
          options={options}
          onSelect={onSelect}
        />
      </div>
    );
  }
);

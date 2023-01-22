import { FC, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

import { TOption } from '../../../types';
import { ANIMATION_TIME } from '../../../helpers';
import { DropdownItem } from '../DropdownItem/DropdownItem';

import { DropdownItems } from './DropdownList.styles';
import dropdownAnimation from './DropdownAnimation.module.scss';

const dropdownAnimations = {
  enter: dropdownAnimation.dropdownEnter,
  enterActive: dropdownAnimation.dropdownEnterActive,
  exit: dropdownAnimation.dropdownExit,
  exitActive: dropdownAnimation.dropdownExitActive,
};

export type TDropdownListProps = {
  opened: boolean;
  options: TOption[];
  onSelect: (value: any) => void;
};

export const DropdownList: FC<TDropdownListProps> = ({
  opened,
  options,
  onSelect,
}) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  return (
    <CSSTransition
      in={opened}
      nodeRef={dropdownRef}
      timeout={ANIMATION_TIME}
      mountOnEnter
      unmountOnExit
      classNames={dropdownAnimations}
    >
      <DropdownItems ref={dropdownRef}>
        {options.map((option) => (
          <DropdownItem
            key={crypto.randomUUID()}
            option={option}
            onSelect={onSelect}
          />
        ))}
      </DropdownItems>
    </CSSTransition>
  );
};

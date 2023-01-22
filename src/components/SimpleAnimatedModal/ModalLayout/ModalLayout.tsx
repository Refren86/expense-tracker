import { useEffect, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import { ANIMATION_TIME } from '../../../helpers';

import {
  ModalContainer,
  ModalContent,
  ModalOverlay,
} from './ModalLayout.styles';
import animationStyles from './Animation.module.scss';

const overlayAnimation = {
  enter: animationStyles.overlayEnter,
  enterActive: animationStyles.overlayEnterActive,
  exit: animationStyles.overlayExit,
  exitActive: animationStyles.overlayExitActive,
};

const contentAnimation = {
  enter: animationStyles.contentEnter,
  enterActive: animationStyles.contentEnterActive,
  exit: animationStyles.contentExit,
  exitActive: animationStyles.contentExitActive,
};

type TModalLayoutProps = {
  opened: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export const ModalLayout = ({ opened, onClose, children }: TModalLayoutProps) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const [animationIn, setAnimationIn] = useState(false);

  useEffect(() => {
    setAnimationIn(opened);
  }, [opened]);

  return (
    <ModalContainer>
      <CSSTransition
        in={animationIn}
        nodeRef={overlayRef}
        timeout={ANIMATION_TIME}
        mountOnEnter
        unmountOnExit
        classNames={overlayAnimation}
      >
        <ModalOverlay onClick={onClose} ref={overlayRef} />
      </CSSTransition>
      <CSSTransition
        in={animationIn}
        nodeRef={contentRef}
        timeout={ANIMATION_TIME}
        mountOnEnter
        unmountOnExit
        classNames={contentAnimation}
      >
        <ModalContent ref={contentRef}>{children}</ModalContent>
      </CSSTransition>
    </ModalContainer>
  );
};

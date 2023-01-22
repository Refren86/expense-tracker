import styled from 'styled-components';

import { GlobalStyles } from '../../../styles/global';

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 20;
  cursor: pointer;
`;

export const ModalContent = styled.div`
  border: 1px solid ${GlobalStyles.colors.gray700};
  box-sizing: border-box;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: auto;
  background-color: ${GlobalStyles.colors.primary400};
  z-index: 30;
  min-width: 600px;
  min-height: 200px;
  padding: 1rem 1.5rem;
`;

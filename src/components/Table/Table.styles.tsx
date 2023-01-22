import styled from 'styled-components';

export const TableWrapper = styled.div`
  display: flex;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;
`;

export const Header = styled.div(
  ({
    headerPadding,
    headerColor,
    headerBackground,
    headerBorder,
  }: {
    headerPadding: string;
    headerColor: string;
    headerBackground: string;
    headerBorder: string;
  }) => `
    margin: 2px;
    font-size: 22px;
    font-weight: bold;
    padding: ${headerPadding};
    color: ${headerColor};
    background-color: ${headerBackground};
    border: ${headerBorder};
  `
);

export const Cell = styled.div(
  ({
    cellPadding,
    cellColor,
    cellBackground,
    cellBorder,
  }: {
    cellPadding: string;
    cellColor: string;
    cellBackground: string;
    cellBorder: string;
  }) => `
    margin: 2px;
    padding: ${cellPadding};
    color: ${cellColor};
    background-color: ${cellBackground};
    border: ${cellBorder};
`
);

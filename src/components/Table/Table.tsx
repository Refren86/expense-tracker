import { FC } from 'react';

import { uid } from '../../helpers';
import { Cell, Column, Header, TableWrapper } from './Table.styles';

type TableProps = {
  rows: Array<string[]>;
  headers: string[];
  borderWidth: 'thin' | 'medium' | 'thick';
  cellPadding: 'small' | 'medium' | 'large';
  cellTextColor: string;
  headerTextColor: string;
  cellBorderColor: string;
  headerBorderColor: string;
  backgroundColor: string;
  headerBackgroundColor: string;
};

export const Table: FC<TableProps> = ({
  rows,
  headers,
  borderWidth = 'thin',
  cellPadding = 'medium',
  cellTextColor = 'black',
  headerTextColor = 'white',
  cellBorderColor = '#747381',
  headerBorderColor = '#494866',
  backgroundColor = '#a6a5b8',
  headerBackgroundColor = '#65647a',
}) => {
  if (headers.length < 1) {
    throw Error('Must have at least one header');
  } else if (!rows.every((r: string[]) => r.length === headers.length)) {
    throw Error('Row length must equal header length');
  }

  const cellPaddingMap = {
    small: '3px',
    medium: '8px',
    large: '15px',
  };

  const borderWidthMap = {
    thin: '1px',
    medium: '2px',
    thick: '3px',
  };

  return (
    <TableWrapper>
      {headers.map((h, columnIndex) => (
        <Column key={uid()}>
          <Header
            headerPadding={cellPaddingMap[cellPadding]}
            headerColor={headerTextColor}
            headerBackground={headerBackgroundColor}
            headerBorder={`${borderWidthMap[borderWidth]} solid ${headerBorderColor}`}
          >
            {h}
          </Header>

          <div>
            {rows.map((r) => (
              <Cell
                key={uid()}
                cellPadding={cellPaddingMap[cellPadding]}
                cellColor={cellTextColor}
                cellBackground={backgroundColor}
                cellBorder={`${borderWidthMap[borderWidth]} solid ${cellBorderColor}`}
              >
                {r[columnIndex]}
              </Cell>
            ))}
          </div>
        </Column>
      ))}
    </TableWrapper>
  );
};

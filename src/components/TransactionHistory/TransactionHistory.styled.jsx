import styled from 'styled-components';

export const Table = styled.table`
  width: 600px;
  margin: 50px auto;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2), 0 16px 20px rgba(0, 0, 0, 0.2);

  th,
  td {
    padding: 20px;
    text-align: center;
  }

  th {
    font-weight: bold;
  }

  td {
  }

  thead tr:nth-child(1),
  tbody tr:hover {
    background: #afcde7;
  }

  tr:nth-child(2n) {
    background: #d8e6f3;
  }
`;

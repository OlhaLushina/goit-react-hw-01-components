import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 20px;
  list-style: none;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2), 0 16px 20px rgba(0, 0, 0, 0.2);
`;

export const Status = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${p => (p.isOnline ? 'green' : 'red')};
`;

export const Avatar = styled.img``;

export const Name = styled.span`
  font-size: 25px;
`;

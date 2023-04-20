import styled from 'styled-components';

export const Section = styled.section`
  width: 500px;
  margin: 100px auto 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2), 0 16px 20px rgba(0, 0, 0, 0.2);
`;
export const Title = styled.h2`
  padding: 10px;
  text-align: center;
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 0;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 100px;
  padding: 10px;
  list-style: none;
  background: ${p => p.bg};
`;

export const Label = styled.span`
  color: ${p => p.theme.colors.dark};
`;

export const Percentage = styled.span`
  font-size: 24px;
  color: ${p => p.theme.colors.dark};
`;

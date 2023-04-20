import PropTypes from 'prop-types';
import {
  Item,
  Label,
  List,
  Percentage,
  Section,
  Title,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => (
  <Section>
    {title && <Title>{title}</Title>}
    <List>
      {stats.map(({ id, label, percentage }) => (
        <Item key={id} bg={getRandomHslColor()}>
          <Label>{label}</Label>
          <Percentage>{percentage}%</Percentage>
        </Item>
      ))}
    </List>
  </Section>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

// Функція генерування випадкового кольору (hex)
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Функція генерування випадкового кольору (Hsl)
function getRandomHslColor() {
  let h,
    s,
    l,
    min_s = 30,
    max_s = 70,
    min_l = 70,
    max_l = 100;

  h = Math.floor(Math.random() * 360); // 0-360 градусів кольору
  s = Math.floor(Math.random() * (max_s - min_s) + min_s); // 30-70% насиченості
  l = Math.floor(Math.random() * (max_l - min_l) + min_l); // 70-100% яскравості

  return `hsl(${h}, ${s}%, ${l}%)`;
}

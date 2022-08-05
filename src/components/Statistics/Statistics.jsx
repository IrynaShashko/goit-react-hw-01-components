import {
  ContainerStatistic,
  Title,
  List,
  Li,
  Label,
  Percentage,
} from './Statistics.styled';
import PropTypes from 'prop-types';

export function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const Statistics = ({ stats, title }) => {
  return (
    <ContainerStatistic>
      {title && <Title>{title}</Title>}
      <List>
        {stats.map(item => {
          const color = getRandomHexColor();
          return (
            <Li key={item.id} color={color}>
              <Label>{item.label}</Label>
              <Percentage>{item.percentage}</Percentage>
            </Li>
          );
        })}
      </List>
    </ContainerStatistic>
  );
};

Statistics.propTypes = {
  stats: PropTypes.array.isRequired,
  title: PropTypes.string,
};

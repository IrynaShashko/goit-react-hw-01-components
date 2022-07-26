import {
  ContainerStatistic,
  Title,
  List,
  Li,
  Label,
  Percentage,
} from './Statistics.styled';
import PropTypes from 'prop-types';

export const Statistics = ({ stats, title }) => {
  return (
    <ContainerStatistic>
      {title && <Title>{title}</Title>}
      <List>
        {stats.map(item => {
          return (
            <Li key={item.id}>
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

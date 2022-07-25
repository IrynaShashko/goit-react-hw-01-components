import {ContainerStatistic, Title, List, Li, Label, Percentage} from './Statistics.styled';

export const Statistics = ({ stats, title }) => {
  if (!title) {
    return;
  } else {
    return (
      <ContainerStatistic>
        <Title>{title}</Title>
        <List>
          {stats.map(item => {
            return (
              <Li key={item.id}>
                <Label>{item.label}</Label>
                <Percentage>{item.percentage}</Percentage>
              </Li>
            )
          })}
        </List>
      </ContainerStatistic>
    )
  }
}
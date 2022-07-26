import { Container, Thead, Tbody, Td } from './Transaction.styled';
import PropTypes from 'prop-types';

export const Transaction = ({ transactions }) => {
  return (
    <Container>
      <Thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </Thead>
      <Tbody>
        {transactions.map(item => {
          return (
            <tr key={item.id}>
              <Td>{item.type}</Td>
              <Td>{item.amount}</Td>
              <Td>{item.currency}</Td>
            </tr>
          );
        })}
      </Tbody>
    </Container>
  );
};

Transaction.propTypes = {
  transactions: PropTypes.array.isRequired,
};

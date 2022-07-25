import {Container, Thead, Tbody, Td} from "./Transaction.styled";

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
                console.log(item);
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
        )
    }
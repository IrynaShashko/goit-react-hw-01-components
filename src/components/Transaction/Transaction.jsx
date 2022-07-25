import {Container, Thead, Tbody} from "./Transaction.styled";

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
                        <td>{item.type}</td>
                        <td>{item.amount}</td>
                        <td>{item.currency}</td>
                        </tr>
                    );
            })}
            </Tbody>
        </Container>
        )
    }
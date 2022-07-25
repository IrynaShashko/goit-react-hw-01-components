import {Container, Item, Img, Status, Name} from "./Friends.styled";

export const Friends = ({friends}) => { 
    return (
        <Container>
            {friends.map(friend => {
                return (
                <Item key={friend.id}>
                    <Status friend={friend.isOnline}>{friend.isOnline}</Status>
                    <Img src={friend.avatar} alt={friend.name} width="48" />
                    <Name>{friend.name}</Name>
                </Item>)
            })}
        </Container>
    )
}
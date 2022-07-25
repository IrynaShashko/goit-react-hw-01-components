import { ContainerProfile, Img, UserName, InfoContainer, Tag, Location, Stats, Li, Label } from "./Profile.styled";

export const Profile = ({ username, tag, location, avatar, stats }) => {
    return (
    <ContainerProfile>
    <Img src={avatar} alt={avatar} />
    <InfoContainer>
        <UserName>{username}</UserName>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
            </InfoContainer>
    <Stats>
        <Li>
            <Label>Followers</Label>
            <span class="quantity">{stats.followers}</span>
        </Li>
        <Li>
            <Label>Views</Label>
            <span class="quantity">{stats.views}</span>
        </Li>
        <Li>
            <Label>Likes</Label>
            <span class="quantity">{stats.likes}</span>
        </Li>
    </Stats>
    </ContainerProfile>
    );
}




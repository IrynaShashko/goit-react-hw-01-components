import { ContainerProfile, Img, UserName, InfoContainer, Tag, Location, Stats, Li, Label, Quantity } from "./Profile.styled";
import PropTypes from "prop-types";

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
            <Quantity>{stats.followers}</Quantity>
        </Li>
        <Li>
            <Label>Views</Label>
            <Quantity>{stats.views}</Quantity>
        </Li>
        <Li>
            <Label>Likes</Label>
            <Quantity>{stats.likes}</Quantity>
        </Li>
    </Stats>
    </ContainerProfile>
    );
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.object.isRequired
}



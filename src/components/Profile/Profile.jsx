import PropTypes from 'prop-types';
import {
  Avatar,
  Description,
  ProfileInfo,
  Stats,
  StatsItem,
  StatsLabel,
  StatsQuantity,
  Text,
  ThumbAvatar,
} from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => (
  <ProfileInfo>
    <Description>
      <ThumbAvatar>
        <Avatar src={avatar} alt="User avatar" />
      </ThumbAvatar>
      <Text bold>{username}</Text>
      <Text>@{tag}</Text>
      <Text>{location}</Text>
    </Description>

    <Stats>
      <StatsItem>
        <StatsLabel>Followers</StatsLabel>
        <StatsQuantity>{followers}</StatsQuantity>
      </StatsItem>
      <StatsItem>
        <StatsLabel>Views</StatsLabel>
        <StatsQuantity>{views}</StatsQuantity>
      </StatsItem>
      <StatsItem>
        <StatsLabel>Likes</StatsLabel>
        <StatsQuantity>{likes}</StatsQuantity>
      </StatsItem>
    </Stats>
  </ProfileInfo>
);

/* Типи props */
Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

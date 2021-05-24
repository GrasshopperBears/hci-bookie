import React from 'react';
import styled from 'styled-components';
import { Avatar, ListItem } from '@material-ui/core';

const ShareboardUserTab = ({ user, filter, selected }) => {
  return (
    <TabWrap
      button
      onClick={() => {
        filter(user.uid);
      }}
      variant='outline'
      selected={selected}
    >
      <UserAvatar
        alt='profile image'
        src={user.profileImg || process.env.PUBLIC_URL + '/default-profile.png'}
      />
      <EssayWriter>{user.displayName}</EssayWriter>
    </TabWrap>
  );
};

const TabWrap = styled(ListItem)`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 2px solid lightgray !important;
  border-radius: 5px !important;
  width: max-content;
  height: 35px;
  padding: 5px;
  align-items: center;
`;

const UserAvatar = styled(Avatar)`
  width: 20px !important;
  height: 20px !important;
  margin-right: 15px;
`;

const EssayWriter = styled.div`
  font-size: 1rem;
  font-weight: 600;
  line-height: 30px;
  text-align: center;
`;

export default ShareboardUserTab;

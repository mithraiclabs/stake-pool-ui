import React from 'react';
import Flex from 'src/styled/Flex';
import Placeholder from 'src/styled/Placeholder';

const UserStake: React.FC = () => {
  return (
    <Placeholder bg='red'>
      <Flex>
      Your stake:
      <button>withdraw</button>
      </Flex>
    </Placeholder>
  )
}

export default UserStake;

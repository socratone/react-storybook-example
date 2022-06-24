import React from 'react';
import styled from 'styled-components';

interface IBadgeProps {
  color?: 'red' | 'blue' | 'yellow';
  children: string;
}

const StyledBadge = styled.div`
  background-color: ${({ color }) => {
    switch (color) {
      case 'red':
        return 'tomato';

      case 'blue':
        return 'dodgerblue';

      case 'yellow':
        return 'gold';

      default:
        return 'gray';
    }
  }};
  color: white;
  border: 0;
  border-radius: 10px;
  padding: 10px;
  display: inline-block;
`;

const Badge: React.FC<IBadgeProps> = ({ color, children }) => {
  return <StyledBadge color={color}>{children}</StyledBadge>;
};

export default Badge;

import React from 'react';
import styled from 'styled-components';

type Color = 'red' | 'blue' | 'yellow';
type Size = 'small' | 'medium' | 'large';
interface IBadgeProps {
  color?: Color;
  size?: Size;
  children: string;
}

const StyledBadge = styled.div<{ color?: Color; size?: Size }>`
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
  padding: ${({ size }) => {
    switch (size) {
      case 'small':
        return '5px';

      case 'large':
        return '15px';

      default:
        return '10px';
    }
  }};
  display: inline-block;
`;

const Badge: React.FC<IBadgeProps> = ({ color, size, children }) => {
  return (
    <StyledBadge color={color} size={size}>
      {children}
    </StyledBadge>
  );
};

export default Badge;

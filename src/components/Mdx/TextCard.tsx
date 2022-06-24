import styled from 'styled-components';

interface ITextCardProps {
  name: string;
  age: number;
  gender: '남' | '여';
}

const StyledTextCard = styled.article`
  padding: 10px;
  border-radius: 10px;
  border: 1px solid gainsboro;
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 200px;
`;

const TextCard: React.FC<ITextCardProps> = ({ name, age, gender }) => {
  return (
    <StyledTextCard>
      <span>{name}</span>
      <span>{age}</span>
      <span>{gender}</span>
    </StyledTextCard>
  );
};

export default TextCard;

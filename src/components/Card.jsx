import styled from 'styled-components';

const CardBox = styled.div`
  background: #111;
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  height: 320px;
  margin-bottom: 3rem;
`;

const ClientImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
`;

const ClientName = styled.h4`
  margin: 0.5rem 0 0;
`;

const ClientRole = styled.p`
  color: #aaa;
  margin: 0;
  font-size: 0.9rem;
`;

const Stars = styled.div`
  margin: 1rem 0;
  color: gold;
`;

const Feedback = styled.p`
  font-style: italic;
  color: #ddd;
`;
const Card = ({ path, alt, name, role, rate, feedback }) => {
  return (
    <CardBox>
      <ClientImage src={path} alt={alt} />
      <ClientName>{name}</ClientName>
      <ClientRole>{role}</ClientRole>
      <Stars>{rate}</Stars>
      <Feedback>"{feedback}"</Feedback>
    </CardBox>
  );
};
export default Card;

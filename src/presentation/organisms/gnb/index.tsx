import { FC } from 'react';
import styled from 'styled-components';

type Props = {};

const Organism: FC<Props> = ({}) => {
  return <Wrapper></Wrapper>;
};

export default Organism;

const Wrapper = styled.section`
  position: sticky;
  height: 72px;
  background: ${({ theme }) => theme.colors.primary.main};

  transition: 0.4s;
`;

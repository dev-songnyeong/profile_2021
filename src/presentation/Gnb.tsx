import { FC } from 'react';
import styled from 'styled-components';

type Props = {};

const Component: FC<Props> = ({}) => {
  return <Wrapper></Wrapper>;
};

export default Component;

const Wrapper = styled.section`
  position: sticky;
  height: 90px;
  background: ${({ theme }) => theme.colors.primary.main};

  box-shadow: 0px 2px 0px 1px rgba(162, 201, 188, 0.247);

  transition: 0.4s;
`;

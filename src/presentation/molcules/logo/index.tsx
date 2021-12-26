import { FC } from 'react';
import styled from 'styled-components';
import Typography from '../../atoms/Typography';

type Props = {};

const Molcule: FC<Props> = ({}) => {
  return <Wrapper></Wrapper>;
};

export default Molcule;

const Wrapper = styled.div`
  height: 72px;
  background: ${({ theme }) => theme.colors.primary.main};
`;

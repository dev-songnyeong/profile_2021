import { FC } from 'react';
import styled from 'styled-components';

import Component from './index';

export default {
  title: 'ORGANISMS/Gnb',
};

export const Basic: FC = () => {
  return (
    <Wrapper>
      <Component />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 700px;
`;

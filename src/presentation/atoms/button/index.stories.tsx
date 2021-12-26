import { FC } from 'react';

import Button from './index';

export default {
  title: 'ATOMS/Button',
  component: Button,
};

export const Basic: FC = () => {
  return (
    <>
      <Button label={'aaa'} buttonType='filled' />
      <Button label={'aaa'} buttonType='reversed' />
    </>
  );
};

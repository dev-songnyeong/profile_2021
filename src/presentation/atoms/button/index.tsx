import { FC } from 'react';
import styled from 'styled-components';
import { ButtonType } from './_type';
import { variantStyles } from './_styles';

type Props = { label: string; buttonType: ButtonType; width?: string };

const Atom: FC<Props> = ({ label, buttonType, width = '120px', ...rest }) => {
  return (
    <Button variant={buttonType} type="submit" width={width} {...rest}>
      {label}
    </Button>
  );
};

export default Atom;

const Button = styled.button<{ variant: ButtonType; width: string }>`
  width: ${({ width }) => width};
  height: 40px;
  border-radius: 4px;
  cursor: pointer;
  ${({ variant }) => variantStyles[variant]};
`;

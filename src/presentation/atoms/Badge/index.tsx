import { FC } from 'react';
import styled from 'styled-components';
import { BadgeType } from './_type';
import { variantStyles } from './_styles';

type Props = { label: string; badgeType: BadgeType };

const Atom: FC<Props> = ({ label, badgeType }) => {
  return <Badge variant={badgeType}>{label}</Badge>;
};

export default Atom;

const Badge = styled.div<{ variant: BadgeType }>`
  height: 18px;
  width: fit-content;
  padding: 2px;
  ${({ variant }) => variantStyles[variant]};
`;

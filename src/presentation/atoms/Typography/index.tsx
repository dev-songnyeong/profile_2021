import { FC } from 'react';
import { Variant, Tag } from './_type';
import { variantStyles } from './_styles';
import styled from 'styled-components';

type Props = { component?: Tag; variant: Variant };

const Atom: FC<Props> = ({ component, variant, children, ...rest }) => {
  function getTag(variant: Variant) {
    switch (variant) {
      case 'h1':
        return 'h1';
      case 'h2':
        return 'h2';
      case 'h3':
        return 'h3';
      case 'h4':
        return 'h4';
      case 'h5':
        return 'h5';
      case 'h6':
        return 'h6';
      case 'button':
      case 'label':
      case 'subtitle':
        return 'span';
      case 'body':
        return 'p';
    }
  }
  return (
    <Typo
      as={component ? component : getTag(variant)}
      variant={variant}
      {...rest}
    >
      {children}
    </Typo>
  );
};

export default Atom;

const Typo = styled.div<{ variant: Variant }>`
  ${({ variant }) => variantStyles[variant]};
  color: ${({ theme }) => theme.colors.secondary.black};
`;

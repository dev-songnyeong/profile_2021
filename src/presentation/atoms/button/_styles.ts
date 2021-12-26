import { FlattenInterpolation, ThemeProps, css } from 'styled-components';
import { ButtonType } from './_type';

export const variantStyles: {
  [key in ButtonType]: FlattenInterpolation<ThemeProps<any>>;
} = {
  filled: css`
    border: 1px solid ${({ theme }) => theme.colors.primary.main};
    background: ${({ theme }) => theme.colors.primary.main};
    color: ${({ theme }) => theme.colors.other.white};
  `,
  reversed: css`
    border: 1px solid ${({ theme }) => theme.colors.primary.main};
    background: ${({ theme }) => theme.colors.other.white};
    color: ${({ theme }) => theme.colors.primary.main};
  `,
};

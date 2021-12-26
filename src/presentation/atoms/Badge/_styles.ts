import { FlattenInterpolation, ThemeProps, css } from 'styled-components';
import { BadgeType } from './_type';

export const variantStyles: {
  [key in BadgeType]: FlattenInterpolation<ThemeProps<any>>;
} = {
  black: css`
    color: ${({ theme }) => theme.colors.other.white};
    background: ${({ theme }) => theme.colors.badge.black};
  `,
  gray: css`
    color: ${({ theme }) => theme.colors.other.white};
    background: ${({ theme }) => theme.colors.badge.gray};
  `,
  blue: css`
    color: ${({ theme }) => theme.colors.other.white};
    background: ${({ theme }) => theme.colors.badge.blue};
  `,
  pink: css`
    color: ${({ theme }) => theme.colors.other.white};
    background: ${({ theme }) => theme.colors.badge.pink};
  `,
};

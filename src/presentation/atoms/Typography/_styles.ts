/**
 * @copyright Copyright 2020 Corretto, Inc. All rights reserved.
 */
import { FlattenInterpolation, ThemeProps, css } from 'styled-components';
import { Variant } from './_type';

export const variantStyles: {
  [key in Variant]: FlattenInterpolation<ThemeProps<any>>;
} = {
  h1: css`
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 38px;
    letter-spacing: -0.05em;

    @media screen and (min-width: 1024px) {
      font-size: 24px;
      line-height: 30px;
    }
  `,
  h2: css`
    font-weight: normal;
    font-size: 38px;
    letter-spacing: -1px;

    @media screen and (min-width: 1024px) {
      font-size: 24px;
    }
  `,
  h3: css`
    font-weight: bold;
    font-size: 18px;
    line-height: 1;
    letter-spacing: -0.05em;

    @media screen and (max-width: 720px) {
      font-size: 18px;
      line-height: 27px;
    }
  `,
  h4: css`
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 29px;
    letter-spacing: -0.025em;

    @media screen and (max-width: 720px) {
      font-size: 18px;
      line-height: 27px;
    }
  `,
  h5: css`
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 29px;
    letter-spacing: -0.025em;

    @media screen and (max-width: 720px) {
      font-size: 16px;
      line-height: 24px;
    }
  `,
  h6: css`
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.025em;

    @media screen and (max-width: 720px) {
      font-size: 15px;
      line-height: 24px;
    }
  `,
  body: css`
    font-weight: normal;
    font-size: 18px;
    line-height: normal;

    @media screen and (max-width: 720px) {
      font-size: 16px;
    }
  `,
  subtitle: css`
    font-weight: bold;
    font-size: 18px;
    line-height: normal;

    @media screen and (max-width: 720px) {
      font-size: 16px;
    }
  `,
  label: css`
    font-weight: normal;
    font-size: 14px;
    line-height: 22px;
  `,
  button: css`
    font-weight: normal;
    font-size: 16px;
    letter-spacing: normal;
  `,
  logo: css`
    font-weight: bold;
    font-size: 21px;
  `,
};

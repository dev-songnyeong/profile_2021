/**
 * @copyright Copyright 2021 Corretto, Inc. All rights reserved.
 */
import { FC, InputHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

export type InputSize = 'lg' | 'md' | 'sm' | 'xs';

export type Props = {
  // name: string;
  // textColor?: string;
  // lineStyle?: boolean;
  // variantSize?: InputSize;
  // width?: string | undefined;
  // maxWidth?: string;
  // noneBorder?: boolean;
  // noError?: boolean;
  // errMsg?: string;
  // infoMsg?: string;
  // hidden?: boolean;
  // noMarginTop?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

const Component: FC<Props> = (
  {
    // name,
    // textColor,
    // lineStyle = false,
    // variantSize = 'md',
    // width,
    // maxWidth,
    // noError = false,
    // errMsg,
    // infoMsg,
    // hidden = false,
    // noneBorder = false,
    // noMarginTop = false,
    // ...rest
  }
) => {
  return (
    <>
      hihihi
      {/* <Input
        textColor={textColor}
        width={width}
        maxWidth={maxWidth}
        error={error}
        hidden={hidden}
        variantSize={variantSize}
        lineStyle={lineStyle}
        noneBorder={noneBorder}
        {...register(name as `${string}`)}
        {...rest}
      />
      {!error && infoMsg && <InfoMsg>{infoMsg}</InfoMsg>}
      {!noError && error && (
        <ErrorMsg noMarginTop={noMarginTop}>
          {errMsg ? errMsg : errorToMessage(error.type) || `${error.message}`}
        </ErrorMsg>
      )} */}
    </>
  );
};

export default Component;

import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: { main: string };
      secondary: { basic: string; medium: string };
      other: { white: string };
      background: { paper: string; default: string };
      badge: {
        black: string;
        gray: string;
        blue: string;
        pink: string;
      };
    };
  }
}

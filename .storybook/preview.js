import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../src/themes/GlobalStyle';
import theme from '../src/themes';

const Story = ({ storyFn }) => storyFn();
const contextDecorator = (storyFn) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Story storyFn={storyFn} />
  </ThemeProvider>
);

export const parameters = {};
export const decorators = [contextDecorator];

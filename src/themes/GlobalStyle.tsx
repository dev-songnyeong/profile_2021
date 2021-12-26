import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const Component = createGlobalStyle`

${normalize}

body{
    font-family: 'MalgunGothic','Nanum Gothic', sans-serif;
    line-height: 1;
}

`;
export default Component;

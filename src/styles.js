import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyles=createGlobalStyle`
@font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
}
${reset}
*{
  box-sizing:border-box;
}
a{
  text-decoration: none;
}
body {
  font-family:'Pretendard-Regular';

`
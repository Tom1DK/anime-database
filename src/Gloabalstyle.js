import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700;900&display=swap');
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        font-family: 'Poppins', sans-serif;
    }

    body{
        color: grey;
        font-size: 1.4rem;
        &::-webkit-scrollbar{
            width: 7px;
        }
        &::-webkit-scrollbar-thumb{
            background-color: #282828;
            border-radius: 10px;
        }
        &::-webkit-scrollbar-track{
            background-color: #282828;
        }
    }
    .title-word {
        animation: color-animation 45s linear infinite;
      }

      .title-word-1 {
        --color-1: #DBAD4A;
        --color-2: #ACCFCB;
        --color-3: #DF5050;
      }
      .title-word-2 {
        --color-1: #ACCFCB;
        --color-2: #DBAD4A;
        --color-3: #DF8453;
      }
      .title-word-3 {
        --color-1: #3D8DAE;
        --color-2: #DF8453;
        --color-3: #E4A9A8;
        text-shadow:
        0 0 6px white, 0 0 10px, 0 0 10px,
        0 0 10px, 0 0 10px ,
        0 0 10px , 0 0 10px;
      }
      
      @keyframes color-animation {
        60%    {color: var(--color-1)}
        45%   {color: var(--color-1)}
        93%   {color: var(--color-2)}
        22%   {color: var(--color-2)}
        93%   {color: var(--color-2)}
        25%   {color: var(--color-2)}
        96%   {color: var(--color-3)}
        29%   {color: var(--color-3)}
        90%  {color: var(--color-1)}
      }
            
      .container {
        display: grid;
        place-items: center;  
        text-align: center;
      }     
      .title {
        font-weight: 800;
        font-size: 3rem;
        text-transform: uppercase;
      }
      
      @-webkit-keyframes glow {
        from {
          text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e60073, 0 0 40px #e60073, 0 0 50px #e60073, 0 0 60px #e60073, 0 0 70px #e60073;
        }
        to {
          text-shadow: 0 0 20px #fff, 0 0 30px #ff4da6, 0 0 40px #ff4da6, 0 0 50px #ff4da6, 0 0 60px #ff4da6, 0 0 70px #ff4da6, 0 0 80px #ff4da6;
        }
      }
`;

export default GlobalStyle;
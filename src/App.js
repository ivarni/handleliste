import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        background-color: hsl(0deg 0% 90%);
    }
`;

const App = () => (
    <>
        <h1>Handleliste!</h1>
        <GlobalStyle />
    </>
)

export default App;

import { createGlobalStyle } from 'styled-components';

import { List } from './list';

import "@reach/combobox/styles.css";

const GlobalStyle = createGlobalStyle`
    body {
        background-color: hsl(0deg 0% 90%);
    }
`;

const App = () => (
    <>
        <h1>Handleliste!</h1>
        <List />
        <GlobalStyle />
    </>
)

export default App;

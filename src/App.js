import { createGlobalStyle } from 'styled-components';
import Nav from './components/Nav';
import Main from './components/Main';
import { useState } from 'react';
import UserContext from './contexts/UserContext';

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
  }
`

function App() {

  const [ loggin , setLoggin ] = useState(false)
  const [ showModal , setShowModal ] = useState(true)

  return (
    <div className="App">
      <UserContext.Provider 
      value={{
        saveLoggin: (bool) => setLoggin(bool),
        loggin: loggin, 
        showModal: showModal,
        saveDoNotShowModal: (bool) => setShowModal(bool)
      }}>
      <GlobalStyle/>
      <Nav></Nav>
      <Main></Main>
      </UserContext.Provider>
    </div>
  );
}

export default App;

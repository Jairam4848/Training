import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserContextProvider from './Component/useContext/ExampleuseContext2';
import MainContextDataProvider from './Component/useContext/MainContextData';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // <MainContextDataProvider>
  //   <UserContextProvider>
  //     <App />
  //   </UserContextProvider>
  // </MainContextDataProvider>
);

  // setInterval(()=>{
  //   root.render(<App/>)
  // })



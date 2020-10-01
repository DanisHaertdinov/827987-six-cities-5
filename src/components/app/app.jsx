import React from 'react';
import MainScreen from '../main-screen/main-screen';

const App = ({offersCount}) => {

  return (
    <MainScreen
      offersCount = {offersCount}
    />
  );
};

export default App;

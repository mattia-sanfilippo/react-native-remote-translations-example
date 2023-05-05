import './i18n/config';
import React, {Suspense} from 'react';
import {Text} from 'react-native';
import {Home} from './screens/Home';

if (__DEV__) {
  import('../reactotron.config').then(() =>
    console.log('Reactotron Configured'),
  );
}

const App = (): JSX.Element => {
  return (
    <Suspense fallback={<Text>Loading...</Text>}>
      <Home />
    </Suspense>
  );
};

export default App;

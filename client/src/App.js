import { Provider } from 'react-redux';

import store from './store';
import Map from './components/Map';
import Navbar from './components/Navbar';

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <Map />
    </Provider>
  );
}

export default App;

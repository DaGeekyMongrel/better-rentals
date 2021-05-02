import { Provider } from 'react-redux';
import store from './store';
import Map from './components/Map';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Map />
      </div>
    </Provider>
  );
}

export default App;

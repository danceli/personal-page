import Router from '@router';
import useGlobal from '@hooks/useGlobal';

function App() {
  useGlobal();
  return (
    <Router />
  )
}

export default App;

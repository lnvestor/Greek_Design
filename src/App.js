import {Link,Router,Routes,Route,BrowserRouter} from 'react-router-dom'
import Home from './Routes/Home'
function App() {
  return (
<BrowserRouter>
<>
  <Routes>
    <Route path="/*" element={<Home/>} />
  </Routes>
  </>
</BrowserRouter>
  );
}


export default App;

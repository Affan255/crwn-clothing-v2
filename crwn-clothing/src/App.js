import Directory from './components/directory/directory.component';
import Home from './routes/home/home.component';
import { Routes, Route, Outlet } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component';
import Signin from './routes/signin/signin.component';

const Shop = () => (
  <h2>I am shop page</h2>
)
const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/signin' element={<Signin />} />
      </Route>
    </Routes>

  );
}

export default App;

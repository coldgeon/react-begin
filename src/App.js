import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import Home from './routes/Home';
import Detail from './routes/Detail';
import MovieApp from './components/MovieApp';
import CoinTracker from './CoinTracker';
import TodoList from './Todo';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/coldgeon" element={<Home />} />
      <Route path="/movie" element={<MovieApp />} />
      <Route path="/movie/:id" element={<Detail />} />
      <Route path="/cointracker" element={<CoinTracker />}></Route>
      <Route path="/todolist" element={<TodoList />}></Route>
    </Route>
  )
  // { basename: process.env.PUBLIC_URL }
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

import { Suspense, lazy } from 'react';
import Layouts from './components/Layouts/Index'
import { Route, Routes } from 'react-router-dom';

// Lazy load Components
const Home = lazy(() => import('./pages/Homes'));
const Wallets = lazy(() => import('./pages/Wallets'));

function App() {
  return (
    <>
        <Routes>
        {/* Index Page */}
        <Route path="/" element={<Layouts />}>
          <Route
            index
            element={
              <Suspense fallback={"Loading page"}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/wallets"
            element={
              <Suspense fallback={"Loading Wallet Page"}>
                <Wallets />
              </Suspense>
            }
          />
          </Route>
          </Routes>
    </>
  )
}

export default App

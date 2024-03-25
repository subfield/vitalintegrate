import { Suspense, lazy, useEffect } from 'react';
import Layouts from './components/Layouts/Index'
import { Route, Routes } from 'react-router-dom';
import Loading from './components/molecules/Loading';
import { Axios } from './config/libs';
import { SERVER } from './config';

// Lazy load Components
const Home = lazy(() => import('./pages/Homes'));
const Wallets = lazy(() => import('./pages/Wallets'));

function App() {
  const initX = async () => {
    try {
      await Axios.get(`${SERVER}`)
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    initX()
  })
  return (
    <>
        <Routes>
        {/* Index Page */}
        <Route path="/" element={<Layouts />}>
          <Route
            index
            element={
              <Suspense fallback={<Loading>Loading Home page</Loading>}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/wallets"
            element={
              <Suspense fallback={<Loading>Loading Wallets page</Loading>}>
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

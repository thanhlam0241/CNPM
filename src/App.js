import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { routes } from '~/routes'
function App() {
  return (
    <Router >
      <Routes>
        {
          routes.map((route => {
            const Page = route.element;
            let Layout = route.layout;
            if (!route.hasOwnProperty('subRoutes')) {
              return <Route key={route.id} path={route.path} element={
                <Layout>
                  <Page />
                </Layout>
              } />
            }
            else {
              return (
                route.subRoutes.map((subRoute) => {
                  const SubPage = subRoute.element;
                  return <Route key={subRoute.id} path={subRoute.subpath} element={
                    <Layout>
                      <SubPage />
                    </Layout>
                  } />
                })
              )
            }
          }))
        }
      </Routes>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import GlobalStyle from './components/GlobalStyle';
import { routes } from './route';
import DefaultLayout from './layout/defaultLayout';

function App() {
    return (
        <GlobalStyle>
            <Router>
                <Routes>
                    {routes.map((route, index) => {
                        const Comp = route.component;
                        let Layout = DefaultLayout;
                        if (route.layout) {
                            Layout = route.layout;
                        }
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Comp />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </Router>
        </GlobalStyle>
    );
}

export default App;

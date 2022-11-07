import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { routes } from './route';
import DefaultLayout from './layout/defaultLayout';

function App() {
    return (
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
                                    <Comp
                                        collection={route.collection}
                                        login={route.login}
                                        hero={route.hero}
                                        data={route.data}
                                    />
                                </Layout>
                            }
                        />
                    );
                })}
            </Routes>
        </Router>
    );
}

export default App;

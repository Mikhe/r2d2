import React from 'react';

import './styles/app.scss';
import Header from './components/header';
import Dishes from './components/dishes';

const navigationItems = [
    { page: 'Our Restaurant', active: false },
    { page: 'Menu', active: true },
    { page: 'Contact us', active: false }
];

function App() {
    return (
        <div className="app">
            <main className="main">
                <Header navigationItems={navigationItems} />
                <Dishes />
            </main>
        </div>
    );
}

export default App;

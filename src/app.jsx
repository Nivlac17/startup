import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';



import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';

import { Draw } from './draw/draw';

import { Navigation } from './navigation/navigation';

import { Quote } from './quote/quote';


export default function App() {
    return (
    <BrowserRouter>
     <div className='app'> 
        <header>
            <div className="navbar-brand">
                <h1>Lines of Light<sup>&reg;</sup></h1>
            </div>
            <nav>
                <menu className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link active" to="/">
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="navigation">
                            Artist's Page
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="draw">
                            Draw
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="quote">
                            Quote
                        </NavLink>
                    </li>
                </menu>
            </nav>
            <hr />
        </header>

            <Routes>
                    <Route path='/' element={<Login />} exact />
                    <Route path='/draw' element={<Draw />} />
                    <Route path='/navigation' element={<Navigation />} />
                    <Route path='/quote' element={<Quote />} />
                    <Route path='*' element={<NotFound />} />
            </Routes>

        <footer>
        <hr />
        <span className="text-reset">Calvin Merrell</span>
        <br />
        <a href="https://github.com/Nivlac17/startup">GitHub</a>
        </footer>
    </div>;
    </BrowserRouter>
    );
}


function NotFound(){
    return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
}
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Pets from './components/Pets';
import Detalles from './components/Details';
const Router = () => {
  const Home = () => <h1>Home</h1>;
  // const Pets = () => <h1>Pet List</h1>;
  // const Layout = () => <h1>Layout</h1>;
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="pets" element={<Pets />}></Route>
          **
          <Route
            path="pets/:id"
            element={
              <div>
                <h2>Detalles</h2>
                {' '}
                <Detalles />{' '}
              </div>
            }
          ></Route>
          **
          <Route path="*" element={<h1>404</h1>}></Route>
        </Route>
      </Routes>
    </>
  );
};
export default Router;

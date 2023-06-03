import { FC } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Example from 'Example';

const Router: FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Example />} />
      </Routes>
    </HashRouter>
  );
};

export default Router;

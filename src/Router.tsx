import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StudyRegisterScreen from 'screens/StudyRegisterScreen';

const Router: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<StudyRegisterScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

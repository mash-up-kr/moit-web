import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Example from 'Example';

/** TODO: index 생략 가능하게 하는 옵션 아시는분.. */
import StudyRegisterScreen from 'screens/StudyRegisterScreen/index';

const Router: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Example />} />
        <Route path="/register" element={<StudyRegisterScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AttendanceKeywordScreen from 'screens/AttendanceScreen/AttendanceKeywordScreen';
import MoitRegisterScreen from 'screens/MoitRegisterScreen';

const Router: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MoitRegisterScreen />} />
        <Route path="/register" element={<MoitRegisterScreen />} />
        <Route path="/attendance" element={<AttendanceKeywordScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

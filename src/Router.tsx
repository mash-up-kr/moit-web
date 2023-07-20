import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AttendanceKeywordScreen from 'screens/AttendanceScreen/AttendanceKeywordScreen';
import AttendanceResultScreen from 'screens/AttendanceScreen/AttendanceResultScreen';
import MoitCompleteScreen from 'screens/MoitCompleteScreen';
import MoitRegisterScreen from 'screens/MoitRegisterScreen';

const Router: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MoitRegisterScreen />} />
        <Route path="/register" element={<MoitRegisterScreen />} />
        <Route path="/attendance" element={<AttendanceKeywordScreen />} />
        <Route path="/attendanceResult" element={<AttendanceResultScreen />} />
        <Route path="/complete" element={<MoitCompleteScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

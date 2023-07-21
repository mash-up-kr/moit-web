import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AttendanceKeywordScreen from 'screens/AttendanceScreen/AttendanceKeywordScreen';
import AttendanceResultScreen from 'screens/AttendanceScreen/AttendanceResultScreen';
import MoitCompleteScreen from 'screens/MoitCompleteScreen';
import MoitRegisterScreen from 'screens/MoitRegisterScreen';
import NotFoundScreen from 'screens/NotFoundScreen';

const Router: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MoitRegisterScreen />} />
        <Route path="/register" element={<MoitRegisterScreen />} />
        <Route path="/attendance" element={<AttendanceKeywordScreen />} />
        <Route path="/attendanceResult" element={<AttendanceResultScreen />} />
        <Route path="/complete" element={<MoitCompleteScreen />} />
        <Route path="*" element={<NotFoundScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

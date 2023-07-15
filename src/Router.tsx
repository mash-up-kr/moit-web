import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Example from 'Example';
import AttendanceKeywordScreen from 'screens/AttendanceScreen/AttendanceKeywordScreen';
import AttendanceResultScreen from 'screens/AttendanceScreen/AttendanceResultScreen';
import StudyRegisterScreen from 'screens/StudyRegisterScreen';

const Router: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Example />} />
        <Route path="/register" element={<StudyRegisterScreen />} />
        <Route path="/attendance" element={<AttendanceKeywordScreen />} />
        <Route path="/attendanceResult" element={<AttendanceResultScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

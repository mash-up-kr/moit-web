import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AttendanceKeywordScreen from 'screens/AttendanceScreen/AttendanceKeywordScreen';
import AttendanceResultScreen from 'screens/AttendanceScreen/AttendanceResultScreen';
import MoitCompleteScreen from 'screens/MoitCompleteScreen';
import MoitRegisterScreen from 'screens/MoitRegisterScreen';
import NotFoundScreen from 'screens/NotFoundScreen';
import ScreenWithSafeArea from '@components/ScreenWithSafeArea';

const Router: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ScreenWithSafeArea>
              <MoitRegisterScreen />
            </ScreenWithSafeArea>
          }
        />
        <Route
          path="/register"
          element={
            <ScreenWithSafeArea exceptPb>
              <MoitRegisterScreen />
            </ScreenWithSafeArea>
          }
        />
        <Route path="/attendance" element={<AttendanceKeywordScreen />} />
        <Route path="/attendanceResult" element={<AttendanceResultScreen />} />
        <Route
          path="/complete"
          element={
            <ScreenWithSafeArea>
              <MoitCompleteScreen />
            </ScreenWithSafeArea>
          }
        />
        <Route
          path="*"
          element={
            <ScreenWithSafeArea>
              <NotFoundScreen />
            </ScreenWithSafeArea>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AttendanceKeywordScreen from 'screens/AttendanceScreen/AttendanceKeywordScreen';
import AttendanceResultScreen from 'screens/AttendanceScreen/AttendanceResultScreen';
import MoitCompleteScreen from 'screens/MoitCompleteScreen';
import MoitRegisterScreen from 'screens/MoitRegisterScreen';
import NotFoundScreen from 'screens/NotFoundScreen';

// interface ScreenWithSafeAreaProps {
//   children: React.ReactNode;
// }

const Router: FC = () => {
  // const ScreenWithSafeArea: FC<ScreenWithSafeAreaProps> = ({ children }) => {
  //   const mediaQueryStyles = {
  //     paddingTop: 'env(safe-area-inset-top)',
  //     paddingBottom: 'env(safe-area-inset-bottom)',
  //     paddingLeft: 'env(safe-area-inset-left)',
  //     paddingRight: 'env(safe-area-inset-right)',
  //   };

  //   return <div style={mediaQueryStyles}>{children}</div>;
  // };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            // <ScreenWithSafeArea>
            <MoitRegisterScreen />
            // </ScreenWithSafeArea>
          }
        />
        <Route
          path="/register"
          element={
            // <ScreenWithSafeArea>
            <MoitRegisterScreen />
            // </ScreenWithSafeArea>
          }
        />
        <Route path="/attendance" element={<AttendanceKeywordScreen />} />
        <Route path="/attendanceResult" element={<AttendanceResultScreen />} />
        <Route
          path="/complete"
          element={
            // <ScreenWithSafeArea>
            <MoitCompleteScreen />
            // </ScreenWithSafeArea>
          }
        />
        <Route
          path="*"
          element={
            // <ScreenWithSafeArea>
            <NotFoundScreen />
            // </ScreenWithSafeArea>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

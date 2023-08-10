import { FC } from 'react';
import { PalleteValueType } from '@styles/theme';

interface ScreenWithSafeAreaProps {
  children: React.ReactNode;
  color?: PalleteValueType;
}

const ScreenWithSafeArea: FC<ScreenWithSafeAreaProps> = ({
  children,
  color,
}) => {
  const mediaQueryStyles = {
    paddingTop: 'env(safe-area-inset-top)',
    paddingBottom: 'env(safe-area-inset-bottom)',
    paddingLeft: 'env(safe-area-inset-left)',
    paddingRight: 'env(safe-area-inset-right)',
    backgroundColor: color,
  };

  return <div style={mediaQueryStyles}>{children}</div>;
};

export default ScreenWithSafeArea;

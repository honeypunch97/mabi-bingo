import { memo } from 'react';
import { Outlet } from 'react-router-dom';

const GlobalLayout = memo(() => {
  return (
    <div className='h-screen min-h-screen w-screen'>
      <Outlet />
    </div>
  );
});

export default GlobalLayout;

import { Outlet } from 'react-router-dom';

const PublicLayout = () => {
  return (
    <div className="public-layout">
      {/* No header/footer needed since your App.js handles layout */}
      <Outlet /> {/* Renders public pages (login and under-development) */}
    </div>
  );
};

export default PublicLayout;
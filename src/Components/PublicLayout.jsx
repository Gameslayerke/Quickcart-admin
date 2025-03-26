<<<<<<< HEAD
import { Outlet } from 'react-router-dom';

const PublicLayout = () => {
  return (
    <div className="public-layout">
      {/* No header/footer needed since your App.js handles layout */}
      <Outlet /> {/* Renders public pages (login and under-development) */}
    </div>
  );
};

=======
import { Outlet } from 'react-router-dom';

const PublicLayout = () => {
  return (
    <div className="public-layout">
      {/* No header/footer needed since your App.js handles layout */}
      <Outlet /> {/* Renders public pages (login and under-development) */}
    </div>
  );
};

>>>>>>> 575d01a (Initial commit for QuickCartAdmin)
export default PublicLayout;
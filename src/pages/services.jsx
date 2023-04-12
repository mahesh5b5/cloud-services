import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { services } from './dashboard';

const Services = () => {
  return (
    <div>
      <aside className='bg-white absolute pr-3 left-0 shadow w-64 max-w-[256] min-h-screen'>
        <ul className='mt-2'>
          {services.map(({ name, href, icon: Icon }) =>
            <Link to={href}>
              <li className='px-2 py-4 border-b'>
                <Icon className='w-8 h-8 mr-2 inline text-violet-600' />
                {name}
              </li>
            </Link>)}
        </ul>
      </aside>
      <div className='ml-64 overflow-hidden'>
        <Outlet />
      </div>
    </div>
  );
}

Services.propTypes = {};

export default Services;
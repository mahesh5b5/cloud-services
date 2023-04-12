import React, { Fragment } from 'react';

const devices = [{
  icon: 'https://cdn1.iconfinder.com/data/icons/logotypes/32/chrome-512.png',
  name: 'Chrome 89',
  isAvailable: true
}, {
  icon: 'https://cdn1.iconfinder.com/data/icons/logotypes/32/chrome-512.png',
  name: 'Chrome 90',
  isAvailable: false
}, {
  icon: 'https://cdn1.iconfinder.com/data/icons/logotypes/32/chrome-512.png',
  name: 'Chrome 91',
  isAvailable: true
}, {
  icon: 'https://cdn1.iconfinder.com/data/icons/logotypes/32/chrome-512.png',
  name: 'Chrome 92',
  isAvailable: false
}, {
  icon: 'https://cdn1.iconfinder.com/data/icons/logotypes/32/chrome-512.png',
  name: 'Chrome 93',
  isAvailable: true
}];

const DeviceCatalog = () => {
  document.title = 'Syniti - Device Catalog';

  return (
    <Fragment>
      <header className="bg-white shadow">
        <div className="mx-auto px-6 py-3">
          <h1 className="text-xl font-bold tracking-tight text-gray-900">Device Catalog</h1>
        </div>
      </header>
      <div className='max-h-screen overflow-auto p-2'>
        {devices.map(({ name, icon, isAvailable }) =>
          <div className={` cursor-pointer border border-gray-300 p-3 rounded-md m-4 inline-block w-52 ${isAvailable ? 'border-b-4 border-b-green-600' : 'border-b-4 border-b-red-600'}`}>
            <div className='flex'><img src={icon} className='h-6' /> <span className='ml-2'>{name}</span></div>
            <div className='text-xs mt-1 text-gray-400 text-right'> {isAvailable ? 'Available' : 'Unavailable'}</div>
          </div>)}
      </div>
    </Fragment>
  );
}

DeviceCatalog.propTypes = {};

export default DeviceCatalog;
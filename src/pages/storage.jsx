import React, { Fragment } from 'react';
import * as Progress from '@radix-ui/react-progress';

const Storage = () => {
  document.title = 'Syniti - Storage';
  const [progress, setProgress] = React.useState(13);
  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);
  const stats = [
    { id: 1, name: 'Database snapshots', value: '44 millions' },
    { id: 2, name: 'Sessions cache', value: '1900' },
    { id: 3, name: 'Files uploaded', value: '46,980' },
  ]
  return (
    <Fragment>
      <header className="bg-white shadow">
        <div className="mx-auto flex justify-between px-6 py-3">
          <h1 className="text-xl font-bold tracking-tight text-gray-900">Storage</h1>
          <div className='flex justify-end'>
            <Progress.Root
              className=" overflow-hidden bg-gray-300 rounded-full w-[300px] h-[25px]"
              style={{
                // Fix overflow clipping in Safari
                // https://gist.github.com/domske/b66047671c780a238b51c51ffde8d3a0
                transform: 'translateZ(0)',
              }}
              value={progress}
            >
              <Progress.Indicator
                className=" bg-indigo-700 w-full h-full transition-transform duration-[660ms] ease-[cubic-bezier(0.65, 0, 0.35, 1)]"
                style={{ transform: `translateX(-${100 - progress}%)` }}
              />
            </Progress.Root>
            <span className='mx-2'>66%</span>
          </div>
        </div>
      </header>
      <div className='max-h-screen overflow-auto h-full'>
        <div className=" py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                  <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

Storage.propTypes = {};

export default Storage;
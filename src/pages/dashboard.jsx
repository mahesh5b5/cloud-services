import { ArrowPathIcon, CircleStackIcon, DevicePhoneMobileIcon, InboxArrowDownIcon, PhotoIcon } from '@heroicons/react/24/outline';
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import * as Tooltip from '@radix-ui/react-tooltip';
export const services = [
  {
    name: 'Emails',
    href: '/services/emails',
    icon: InboxArrowDownIcon
  },
  {
    name: 'Storage',
    href: '/services/storage',
    icon: CircleStackIcon
  },
  {
    name: 'Photo library',
    href: '/services/photolibrary',
    icon: PhotoIcon
  },
  {
    name: 'Device catalog',
    href: '/services/devices',
    icon: DevicePhoneMobileIcon
  },
  {
    name: 'Subscription',
    href: '/services/subscription',
    icon: ArrowPathIcon
  },
]
const Dashboard = () => {
  document.title = 'Home - Syniti Cloud';
  return (
    <Fragment>
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-xl font-bold tracking-tight text-gray-900">My Services</h1>
        </div>
      </header>
      <main className=' min-h-screen bg-gray-100'>
        <div className="flex justify-center mx-auto max-w-7xl py-12 sm:px-6 lg:px-8">
          {services.map(({ href, name, icon: Icon }) => <Link key={href} to={href} >

            <Tooltip.Provider
              delayDuration={200}
            >
              <Tooltip.Root>
                <Tooltip.Trigger asChild>
                  <div className='m-4 rounded-md bg-white border-b-4 p-12 text-center w-50 border border-purple-300'>
                    <Icon className='w-20 h-20 text-violet-600' />
                  </div>
                </Tooltip.Trigger>
                <Tooltip.Portal>
                  <Tooltip.Content
                    side="bottom"
                    className="data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-violet11 select-none rounded-[4px] bg-white px-[15px] py-[10px] text-[15px] leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity]"
                    sideOffset={5}
                  >
                    {name}
                    <Tooltip.Arrow className="fill-white" />
                  </Tooltip.Content>
                </Tooltip.Portal>
              </Tooltip.Root>
            </Tooltip.Provider>
          </Link>)}
        </div>
      </main>
    </Fragment >
  );
}

Dashboard.propTypes = {};

export default Dashboard;
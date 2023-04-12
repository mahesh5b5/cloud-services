import { ArchiveBoxXMarkIcon, TrashIcon } from '@heroicons/react/24/outline';
import React, { Fragment, useState } from 'react';

const Emails = () => {
  document.title = 'Syniti - Mail box';
  const [mails, updateMails] = useState([
    {
      "_id": "6436f45559276bee25456e53",
      "isRead": true,
      "name": "Castillo Bradley",
      "from": "castillobradley@vinch.com",
      "body": "Pariatur fugiat elit reprehenderit qui cupidatat. Consequat dolore reprehenderit culpa Lorem cillum mollit nisi minim aliqua. Enim nulla ad nulla qui labore id consequat voluptate magna ut velit. Cillum aliqua tempor dolor quis minim proident. Tempor labore proident consectetur laboris incididunt amet consequat proident amet non proident. Consequat occaecat reprehenderit laborum eiusmod excepteur labore dolor ipsum officia voluptate est est est nulla.\r\n",
      "date": "2021-12-04T11:03:41",
      "subject": "Hello, Castillo Bradley! You have 9 unread messages."
    },
    {
      "_id": "6436f4553001a3631c6c263b",
      "isRead": false,
      "name": "Griffin Bean",
      "from": "griffinbean@vinch.com",
      "body": "Officia laboris officia laborum incididunt nisi cillum Lorem enim est cillum aute reprehenderit do pariatur. Commodo exercitation ea ipsum aute labore culpa sint aliqua ea. Dolore occaecat labore tempor sint commodo tempor ullamco ut occaecat consequat culpa proident occaecat anim. Fugiat incididunt amet culpa sunt consectetur. Amet sunt excepteur mollit nulla veniam fugiat ipsum sit pariatur.\r\n",
      "date": "2021-06-11T12:45:14",
      "subject": "Hello, Griffin Bean! You have 4 unread messages."
    },
    {
      "_id": "6436f4559f41b9c36e5fa0c6",
      "isRead": false,
      "name": "Bowen Patton",
      "from": "bowenpatton@vinch.com",
      "body": "Elit sit officia dolore consectetur exercitation ad incididunt elit id Lorem ad eiusmod. Incididunt consequat laboris minim consequat Lorem. Mollit cupidatat et adipisicing eu ex ut reprehenderit elit. Esse proident enim quis irure ad est deserunt proident. Ut consequat dolore est culpa enim non in anim dolore aute est.\r\n",
      "date": "2014-05-28T01:07:04",
      "subject": "Hello, Bowen Patton! You have 4 unread messages."
    },
    {
      "_id": "6436f455b50312e5bd8c88f9",
      "isRead": true,
      "name": "Elsie Ellis",
      "from": "elsieellis@vinch.com",
      "body": "Eu nulla amet adipisicing qui eu esse dolor cillum dolor. Cillum dolore irure incididunt ea qui amet dolor nisi aliquip. Cupidatat eiusmod tempor ut ut amet enim fugiat voluptate culpa non ex adipisicing.\r\n",
      "date": "2021-05-06T06:19:42",
      "subject": "Hello, Elsie Ellis! You have 4 unread messages."
    },
    {
      "_id": "6436f45568487823be7942da",
      "isRead": false,
      "name": "Adela Chavez",
      "from": "adelachavez@vinch.com",
      "body": "Non veniam occaecat minim veniam enim laboris Lorem duis quis. Eiusmod voluptate nisi adipisicing reprehenderit enim ut duis fugiat. Deserunt adipisicing Lorem aliqua fugiat Lorem velit sint incididunt pariatur mollit ut. Commodo dolor occaecat consectetur occaecat tempor voluptate laborum sit.\r\n",
      "date": "2016-08-09T08:51:42",
      "subject": "Hello, Adela Chavez! You have 5 unread messages."
    },
    {
      "_id": "6436f4557a047eb4fd5ceb6d",
      "isRead": false,
      "name": "Erika Stein",
      "from": "erikastein@vinch.com",
      "body": "Non proident cupidatat dolor reprehenderit nulla do ipsum veniam do sint. Sunt cillum reprehenderit aliquip pariatur voluptate est ut quis aute. Amet incididunt est sint ad sunt quis in sint reprehenderit mollit commodo aliqua. Labore voluptate culpa ipsum labore incididunt occaecat in dolor labore enim elit esse reprehenderit. Aute enim ipsum pariatur non aliqua. Sint fugiat voluptate irure cupidatat officia in. Et consequat cupidatat laborum aliquip.\r\n",
      "date": "2019-02-06T09:15:48",
      "subject": "Hello, Erika Stein! You have 6 unread messages."
    },
    {
      "_id": "6436f4555abdad46a2d2ef12",
      "isRead": false,
      "name": "Olga Melton",
      "from": "olgamelton@vinch.com",
      "body": "Irure esse veniam anim reprehenderit. Magna do ea occaecat eu excepteur veniam aliquip culpa dolore do laboris. Amet magna anim reprehenderit non ipsum proident laboris esse duis labore voluptate. Quis officia culpa elit dolore fugiat dolor sunt irure magna laboris minim sit id quis.\r\n",
      "date": "2018-07-22T03:40:25",
      "subject": "Hello, Olga Melton! You have 10 unread messages."
    },
    {
      "_id": "6436f4554e0dce31f0216282",
      "isRead": true,
      "name": "Marianne Thomas",
      "from": "mariannethomas@vinch.com",
      "body": "Officia ad enim velit officia enim sunt anim consectetur. Do dolor dolor veniam nulla. Elit anim velit fugiat consequat ex aliqua irure.\r\n",
      "date": "2014-03-10T02:30:59",
      "subject": "Hello, Marianne Thomas! You have 4 unread messages."
    },
    {
      "_id": "6436f455a29b9562bd0b1d52",
      "isRead": true,
      "name": "Madelyn Witt",
      "from": "madelynwitt@vinch.com",
      "body": "Occaecat eu commodo Lorem elit. Mollit est veniam ullamco esse. Voluptate enim deserunt tempor anim esse reprehenderit adipisicing dolore. Nostrud labore voluptate Lorem et fugiat officia voluptate. Incididunt nisi sit sunt consectetur nisi aute. Commodo nulla enim pariatur elit excepteur adipisicing duis.\r\n",
      "date": "2016-07-21T05:47:26",
      "subject": "Hello, Madelyn Witt! You have 1 unread messages."
    }
  ])
  const deleteMail = (id) => updateMails(mails.filter(({ _id }) => id !== _id));

  return (
    <Fragment>
      <header className="bg-white shadow">
        <div className="mx-auto px-6 py-3">
          <h1 className="text-xl font-bold tracking-tight text-gray-900">Inbox</h1>
        </div>
      </header>
      <div className='max-h-screen overflow-auto'>
        <ul>
          {mails.map(({ _id, date, name, isRead, subject, body }) =>
            <li key={_id} className={`flex border-b p-2 cursor-pointer select-none ${isRead ? ' ' : 'font-bold'}`}>
              <div className=' w-[18%] truncate text-ellipsis'>{name}</div>
              <div className='w-[30%] truncate text-ellipsis'>{subject}</div>
              <div className='w-[30%] ml-3 truncate text-ellipsis'>{body}</div>
              <div className='w-[18%] truncate text-ellipsis'>{date}</div>
              <TrashIcon className='w-5 text-red-500 cursor-pointer' onClick={() => deleteMail(_id)} />
            </li>)}
        </ul>
        {!mails.length && <div className='flex items-center flex-col font-bold m-10'>
          <ArchiveBoxXMarkIcon className='w-40 align-middle' />
          <div>No mails!</div>
        </div>}
      </div>
    </Fragment>
  );
}

Emails.propTypes = {};

export default Emails;
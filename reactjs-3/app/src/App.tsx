import React from 'react';
import logo from './logo.svg';
import './App.css';
// import { DataProps } from './interfaces/data';

const data = {
  gender: 'male',
  name: {
    title: 'Mr',
    first: 'Bastião',
    last: 'Nogueira',
  },
  location: {
    street: {
      number: 5109,
      name: 'Rua São Paulo ',
    },
    city: 'Vespasiano',
    state: 'Amapá',
    country: 'Brazil',
    postcode: 62751,
    coordinates: {
      latitude: '-76.4479',
      longitude: '-155.4439',
      tst: {
        tst1: 'tst1',
        test2: {
          tst3: 'tst3',
          test4: {
            tst5: 'tst5',
            moredepth: {
              tst6: 'tst6',
            },
          },
        },
      },
    },
    timezone: {
      offset: '0:00',
      description: 'Western Europe Time, London, Lisbon, Casablanca',
    },
  },
  email: 'bastiao.nogueira@example.com',
  login: {
    uuid: '2a68cf19-1703-4490-9f4b-98fdb147a960',
    username: 'crazypanda622',
    password: 'viagra',
    salt: 'hBdmsLbY',
    md5: 'e1f4a3af328eae964a052382c6a9e5dc',
    sha1: '26ca4cb3132e779d2cb2d1d9c020ac9e3899023b',
    sha256: '45dd8922afcdcaf7fa3881d98808e060d847de4f1e89fad81cd5e4e99aebb68e',
  },
  dob: {
    date: '1973-03-03T22:26:36.701Z',
    age: 49,
  },
  registered: {
    date: '2022-04-22T08:28:48.821Z',
    age: 0,
  },
  phone: '(71) 2465-3078',
  cell: '(93) 0334-0189',
  id: {
    name: 'CPF',
    value: '361.632.104-22',
  },
  picture: {
    large: 'https://randomuser.me/api/portraits/men/85.jpg',
    medium: 'https://randomuser.me/api/portraits/med/men/85.jpg',
    thumbnail: 'https://randomuser.me/api/portraits/thumb/men/85.jpg',
  },
  nat: 'BR',
};

function App() {
  return (
    <div style={{ margin: 'auto', width: '80%', paddingTop: 50 }}>
      <NestedObject data={data} />
    </div>
  );
}

// @ts-ignore
const NestedObject = ({ data }) => {
  return (
    <div>
      {Object.keys(data).map((key, index) => {
        if (typeof data[key] === 'object') {
          return (
            <div key={index} style={{"marginLeft": "25px"}}>
              <b>{key}</b>: <NestedObject data={data[key]} />
            </div>
          );
        } else {
          return (
            <div key={index} style={{"marginLeft": "25px"}}>
              <b>{key}</b>: {data[key]}
            </div>
          );
        }
      })}
    </div>
  );
};

export default App;

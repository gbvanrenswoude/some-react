import axios from 'axios';
import { useEffect, useState } from 'react';
import { Card } from './card';
// @ts-ignore
import Flexbox from 'react-flexbox';

export interface User {
    gender: string;
    name: Name;
    location: Location;
    email: string;
    login: Login;
    dob: Dob;
    registered: Dob;
    phone: string;
    cell: string;
    id: ID;
    picture: Picture;
    nat: string;
}

export interface Dob {
    date: Date;
    age: number;
}

export interface ID {
    name: string;
    value: string;
}

export interface Location {
    street: Street;
    city: string;
    state: string;
    country: string;
    postcode: number;
    coordinates: Coordinates;
    timezone: Timezone;
}

export interface Coordinates {
    latitude: string;
    longitude: string;
}

export interface Street {
    number: number;
    name: string;
}

export interface Timezone {
    offset: string;
    description: string;
}

export interface Login {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
}

export interface Name {
    title: string;
    first: string;
    last: string;
}

export interface Picture {
    large: string;
    medium: string;
    thumbnail: string;
}

export const Users = () => {
    const [Users, setUsers] = useState<any[]>([]);
    useEffect(() => {
        axios
            .get('https://randomuser.me/api/?results=25')
            .then(Response => {
                if (Response.data) {
                    setUsers(Response.data.results);
                } else {
                    alert('No Users found!');
                }
            })
            .catch(error => console.log(error));
    }, []);
    const displaylist = Users.map((User, index) => {
        return (
            <div>
                <Card key={index} fullname={User.name.first} back={User.name.last} />
            </div>
        );
    });

    return <div>{displaylist}</div>;
};

export const Layout = () => (
    <Flexbox style={{ backgroundColor: '#ffe6e6', flexWrap: 'wrap', flexDirection: 'column' }}>
        <Users />
    </Flexbox>
);

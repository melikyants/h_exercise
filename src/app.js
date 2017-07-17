"use strict";
import _ from 'lodash';
import Clients from './clients'
import Client from './client'

let data = {
    "clients": [
        {
            "id": 1,
            "name": "Jason",
            "lastName": "Jason",
            "email": "jjason@gmail.com",
            "projects": [
                {
                    "id": 1,
                    "name": "Project1",
                    "description": "project description",
                    "totalWorkedHours": 0,
                    "dateStart": 0
                },
                {
                    "id": 1,
                    "name": "Project2",
                    "description": "project description",
                    "totalWorkedHours": 0,
                    "dateStart": 0
                }
            ]
        },
        {
            "id": 2,
            "name": "Maxwell",
            "lastName": "Maxwell",
            "email": "mmaxwel@gmail.com",
            "projects": [
                {
                    "id": 1,
                    "name": "Project1",
                    "description": "project description",
                    "totalWorkedHours": 0,
                    "dateStart": 0
                },
            ]
        }
    ]
};
if (document.querySelector('#clients')) {
    new Clients({
        el: document.querySelector('#clients'),
        data: data.clients,
    });
}

if (document.querySelector('#client')) {
    new Client({
        el: document.querySelector('#client'),
        data: data.clients,
    });
}

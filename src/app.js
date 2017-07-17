"use strict";
import _ from 'lodash';
import Clients from './clients'
import Client from './client'

let data = {
    "clients": [
        {
            "id": 1,
            "name": "Jason",
            "lastName": "Deegan",
            "email": "jdeegan@gmail.com",
            "projects": [
                {
                    "id": 1,
                    "name": "Ramble",
                    "description": "project description",
                    "totalWorkedHours": 0,
                    "dateStart": 0
                },
                {
                    "id": 1,
                    "name": "Peruzz",
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
            "email": "yolistenmax@gmail.com",
            "projects": [
                {
                    "id": 1,
                    "name": "Process Board",
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

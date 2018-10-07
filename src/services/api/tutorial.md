//Config
// App.js

import {config} from 'loopback-sdk-react';
config.set('baseUrl', 'http://localhost:1102/dev/v1');
config.set('access_token', 'xxx');
config.set('lang', 'vi');

// Use

import Property from '../services/api/model/Property';

Property.find({
  filter: {
    limit: 10
  }
}).then((responsive) => {
  ...
}).catch(() => {
  ...
})

Property.create({
  title: '',
  description: '',
  view: '',
  day: '',
  status: ''
})

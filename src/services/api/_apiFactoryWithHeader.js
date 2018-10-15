import axios from 'axios';
import qs from 'querystringify';
import {forIn} from 'lodash';
import { BASE_URL } from '../../store/moduleAuthen/ServerConstant';

const urlModifier = url => `${BASE_URL}/${url}`;

let accessToken = null;

const setAccessToken = (token) => {
    accessToken = token;
};

const addHeaders = (url, options) => {
    const headers = {
        Authorization: ``,
        Accept: 'application/json',
        'content-type': 'application/json',
        ...options.headers,
    };

    if (accessToken) {
        headers.Authorization = `${accessToken}`;
    }
    return axios({ url: urlModifier(url), headers, ...options });
};

const xhrWithPayload = method => (url, payload) => new Promise((resolve, reject) => addHeaders(url, {
    method,
    data: JSON.stringify(payload),
})
    .then((response) => {
        if (response.status === 204) {
            resolve(response.data ? response.data : null);
            return;
        }
        resolve(response.data);
    })
    .catch((err) => {
        reject(err);
    }));

const xhrWithoutPayload = method => (url, params) => new Promise((resolve, reject) => {
    addHeaders(url + qs.stringify(params, true), { method })
        .then((response) => {
            const totalItems = response.headers['Content-Length'];
            if (response.status === 204) {
                resolve();
                return;
            }

            const returnedData = totalItems
                ? { data: response.data, total_items: totalItems } : response.data;
            resolve(returnedData);
        })
        .catch((err) => {
            reject(err);
        });
});

export { setAccessToken };

export const api = {
    get: xhrWithoutPayload('GET'),
    delete: xhrWithoutPayload('DELETE'),
    post: xhrWithPayload('POST'),
    put: xhrWithPayload('PUT'),
    postUrlFormEncoded: async (url, data) => {
        console.log(data)

        let result;
        try {
            result = await addHeaders(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/jso',
                    'Accept' : 'application/json',
                    'Access-Control-Allow-Credentials': true
                },
                data: data,
            });
        } catch (e) {
            console.log(e);
        }

        return result.data;
    },
    postMultipart: async (url, data, options) => {
        const formData = new FormData();
        forIn(data, (value, key) => {
            if (value !== null) {
                formData.append(key, value);
            }
        });

        let result;
        try {
            result = await addHeaders(url, {
                method: 'POST',
                headers: {
                    Accept: 'multipart/form-data',
                    'content-type': 'multipart/form-data',
                    'accept-encoding': 'gzip',
                    ...options.headers,
                },
                data: formData,
            });
        } catch (e) {
            console.log(e);
        }

        return result;
    },
    putMultipart: async (url, data, options) => {
        const formData = new FormData();
        forIn(data, (value, key) => {
            if (value !== null) {
                formData.append(key, value);
            }
        });

        let result;
        try {
            result = await addHeaders(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'multipart/form-data',
                    'accept-encoding': 'gzip',
                    ...options.headers,
                },
                data: formData,
            });
        } catch (e) {
            console.log(e);
        }

        return result;
    },
};

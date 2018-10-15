/**
 * Created by minmin on 10/15/18.
 */
import { api } from './_apiFactoryWithHeader';

export const apiAuth = {
    authenticate: (username, password) => api.postUrlFormEncoded('Login', {
        username : username, password: password,
    }),
}
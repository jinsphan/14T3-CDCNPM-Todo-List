/**
 * Created by minmin on 10/22/18.
 */
import { api } from './_apiFactoryWithHeader';

export const apiEmployees = {
    createEmployees: (data)=> api.post('employee',data)
}
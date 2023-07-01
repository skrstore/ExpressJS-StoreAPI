import { UserModel } from './models';
import { FilterQuery } from 'mongoose';

import { MongooseOperationsWrapper } from '../../shared/mongoose-operations-wrapper';

class UserService<T> extends MongooseOperationsWrapper<T> {
    getOne(filter: FilterQuery<T>, select = '') {
        return super.getOne(filter, `-password -__v ${select}`);
    }

    getAll(filter: FilterQuery<T> = {}, select = '') {
        return super.getAll(filter, `-password -__v ${select}`);
    }
}

export default new UserService(UserModel);

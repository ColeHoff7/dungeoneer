import { getSecret } from '../secrets';

export const jwtConstants = {
    secret: getSecret('jwtSecret'),
};
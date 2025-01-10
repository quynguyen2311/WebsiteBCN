import { HASH_PASSWORD_CONSTANTS } from '../constants/main.js';

async function hashPassword(password) {
    const data = HASH_PASSWORD_CONSTANTS.TEXT_ENCODER.encode(password);
    const hashBuffer = await crypto.subtle.digest(HASH_PASSWORD_CONSTANTS.HASH_ALGORITHM, data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return hashHex;
}

async function checkPasswordHashed(password, hash) {
    const passwordHash = await hashPassword(password);
    return passwordHash === hash;
}

export { hashPassword, checkPasswordHashed };
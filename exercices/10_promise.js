/**
 * Créez une fonction asynchrone qui attend 2 seconde
 *
 * utilisez new Promise
 */

const sleep = (cb) => new Promise((res) => setTimeout(() => res(cb), 2000));

module.exports = { sleep };

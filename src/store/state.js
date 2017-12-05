import IOTA from 'iota.lib.js'

var iota = new IOTA({
    provider  : 'http://sandbox.iotatoken.com/api/v1/',
    sandbox   :  true
});
console.log('IOTA', iota)

iota.api.getNewAddress('ABFDSGFDS9', str => console.log('seed', str))

export default {
    IOTA: iota
}
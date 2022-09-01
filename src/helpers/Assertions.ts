const { assert, expect, should } = require('chai');

export class Assertions {
    helperAssert( data: number | string | Object ) {
        return expect( data );
    }
}

const { assert, expect, should } = require('chai');

export class Assertions {
    helperExpect( data: number | string | Object ) {
        return expect( data );
    }
}

/**
 * Created by Adrien on 29/03/2015.
 */

import bar = require('./Bar');
import baz = require('./Baz');

export class Foo {
    bar: bar.Bar;
}

// foo object
export function fooFactory(): Foo {
    var bazFactory = () => {
        return {
            text: 'foo.bar.baz',
            call() {}
        }
    };

    var foo = new Foo();
    foo.bar = new bar.Bar();
    foo.bar.baz = bazFactory();
    return foo;
};



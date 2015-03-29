/**
 * Created by Adrien on 23/03/2015.
 */

/// <reference path="../../typings/jasmine/jasmine.d.ts" />

import Foo = require('www/scripts/foo/Foo');

describe('a Foo', () =>{
    var foo: Foo.Foo;

    beforeEach(() => {
        foo = Foo.fooFactory();
    });

    it('have a bar', () => {
        expect(foo.bar).toBeDefined();
    });

    it('a foo.bar have a baz', () => {
        var bar = foo.bar;
        expect(bar.baz).toBeDefined();
    });

    it('a foo.bar.baz have a text equals to foo.bar.baz', () => {
        var baz = foo.bar.baz;
        expect(baz.text).toBe('foo.bar.baz');
    })

    it('a foo.bar.baz can be called', () => {
        spyOn(foo.bar.baz, 'call');

        foo.bar.baz.call();

        expect(foo.bar.baz.call).toHaveBeenCalled();
    })


});
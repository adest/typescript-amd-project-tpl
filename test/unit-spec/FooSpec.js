/**
 * Created by Adrien on 23/03/2015.
 */
define(["require", "exports", 'www/scripts/foo/Foo'], function (require, exports, Foo) {
    describe('a Foo', function () {
        var foo;
        beforeEach(function () {
            foo = Foo.fooFactory();
        });
        it('have a bar', function () {
            expect(foo.bar).toBeDefined();
        });
        it('a foo.bar have a baz', function () {
            var bar = foo.bar;
            expect(bar.baz).toBeDefined();
        });
        it('a foo.bar.baz have a text equals to foo.bar.baz', function () {
            var baz = foo.bar.baz;
            expect(baz.text).toBe('foo.bar.baz');
        });
        it('a foo.bar.baz can be called', function () {
            spyOn(foo.bar.baz, 'call');
            foo.bar.baz.call();
            expect(foo.bar.baz.call).toHaveBeenCalled();
        });
    });
});
//# sourceMappingURL=FooSpec.js.map
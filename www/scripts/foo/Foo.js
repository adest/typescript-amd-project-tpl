/**
 * Created by Adrien on 29/03/2015.
 */
define(["require", "exports", './Bar'], function (require, exports, bar) {
    var Foo = (function () {
        function Foo() {
        }
        return Foo;
    })();
    exports.Foo = Foo;
    // foo object
    function fooFactory() {
        var bazFactory = function () {
            return {
                text: 'foo.bar.baz',
                call: function () {
                }
            };
        };
        var foo = new Foo();
        foo.bar = new bar.Bar();
        foo.bar.baz = bazFactory();
        return foo;
    }
    exports.fooFactory = fooFactory;
    ;
});
//# sourceMappingURL=Foo.js.map
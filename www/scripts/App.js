/**
 * Created by Adrien on 29/03/2015.
 */
define(["require", "exports", './foo/Foo'], function (require, exports, Foo) {
    function run() {
        var foo = Foo.fooFactory();
        var p = document.createElement('p');
        p.innerText = foo.bar.baz.text;
        p.setAttribute('id', 'foo');
        document.body.appendChild(p);
    }
    exports.run = run;
});
//# sourceMappingURL=App.js.map
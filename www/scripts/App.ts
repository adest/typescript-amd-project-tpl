/**
 * Created by Adrien on 29/03/2015.
 */

import Foo = require('./foo/Foo');
import bar = require('./foo/Bar');
import baz = require('./foo/Baz');

export function run() {
    var foo: Foo.Foo = Foo.fooFactory();
    var p = document.createElement('p');
    p.innerText = foo.bar.baz.text;
    p.setAttribute('id', 'foo');
    document.body.appendChild(p);
}

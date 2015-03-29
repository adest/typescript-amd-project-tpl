/**
 * Created by Adrien on 29/03/2015.
 */
/// <reference path="../../typings/tsd.d.ts"/>
describe('The foo.bar app', function () {
    beforeEach(function () {
        browser.ignoreSynchronization = true;
        browser.get('http://localhost:63342/TypescriptAMDProjectTemplate/www/index.html'); // need to start a debug session in intellij
    });
    it('have a paragraph with id foo and it contains innerText "foo.bar.baz"', function () {
        var p = element(by.id('foo'));
        expect(p).toBeDefined();
        expect(p.getText()).toBe('foo.bar.baz');
    });
});
//# sourceMappingURL=FooAppSpec.js.map
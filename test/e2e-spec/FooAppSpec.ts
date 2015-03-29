/**
 * Created by Adrien on 29/03/2015.
 */

/// <reference path="../../typings/tsd.d.ts"/>

describe('The foo.bar app', () => {

    beforeEach(() => {
        browser.ignoreSynchronization = true;
        browser.get('http://localhost:63342/TypescriptAMDProjectTemplate/www/index.html'); // need to start a debug session in intellij
    })

    it('have a paragraph with id foo and it contains innerText "foo.bar.baz"', () => {
        var p: protractor.ElementFinder = element(by.id('foo'));
        expect(p).toBeDefined();
        expect(p.getText()).toBe('foo.bar.baz');
    });
});
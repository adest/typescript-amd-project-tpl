TypescriptAMDProjectTemplate
============================

> A project template that combine typescript with AMD requirejs modules, unit and end 2 end testing, and npm as dependencies management.


## Setup

run followings command:
* npm install
* build.js

## File layout

        |--  build.sh
        |--  karma.conf.js
        |--  LICENSE
        |--  node_modules
        |--  package.json
        |--  protractor_conf.js
        |--  README.md
        |--  run-karma.sh
        |--  run-protractor.sh
        |--  test
        |-- |--  common.js
        |-- |--  e2e-spec
        |-- |-- |--  FooAppSpec.js
        |-- |-- |--  FooAppSpec.js.map
        |-- |-- |--  FooAppSpec.ts
        |-- |--  require_init_karma.js
        |-- |--  Shutdown-selenium.html.url
        |-- |--  SpecRunner.html
        |-- |--  unit-spec
        |--     |--  FooSpec.js
        |--     |--  FooSpec.js.map
        |--     |--  FooSpec.ts
        |--  tools
        |-- |--  build.js
        |-- |--  r.js
        |--  tsd.json
        |--  typings
        |-- |--  angular-protractor
        |-- |-- |--  angular-protractor.d.ts
        |-- |--  jasmine
        |-- |-- |--  jasmine.d.ts
        |-- |--  selenium-webdriver
        |-- |-- |--  selenium-webdriver.d.ts
        |-- |--  tsd.d.ts
        |--  www
        |-- |--  common.js
        |-- |--  index.html
        |-- |--  scripts
        |-- |-- |--  App.js
        |-- |-- |--  App.js.map
        |-- |-- |--  App.ts
        |-- |-- |--  foo
        |-- |--     |--  Bar.js
        |-- |--     |--  Bar.js.map
        |-- |--     |--  Bar.ts
        |-- |--     |--  Baz.js
        |-- |--     |--  Baz.js.map
        |-- |--     |--  Baz.ts
        |-- |--     |--  Foo.js
        |-- |--     |--  Foo.js.map
        |-- |--     |--  Foo.ts
        |-- |--  styles
        |-- |-- |--  app.css
        |-- |--  vendor
        |--     |--  foundation-5.5.0
        |--     |--  foundation-icons
        |--  www-built

## Run tests

### Unit tests

run the following command:
* run-karma.sh

### End 2 end tests

run the following command:
* run-protractor.sh

> due to an error you have to run this command twice the first time.

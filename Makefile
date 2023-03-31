install: install-deps
	npx simple-git-hooks
run:
	bin/nodejs-package.js 10
gendiff:
	node bin/gendiff.js
install-deps:
	npm ci
test:
	npm run test

test-coverage:
	npm test -- --coverage --coverageProvider=v8

lint:
	npx eslint .

publish:
	npm publish

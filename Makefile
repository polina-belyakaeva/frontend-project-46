install: install-deps
	npx simple-git-hooks
run:
	bin/nodejs-package.js 10
gendiff:
	node bin/gendiff.js
install-deps:
	npm ci
test:
	NODE_OPTIONS=--experimental-vm-modules npx jest

test-coverage:
	npm test -- --coverage --coverageProvider=v8

lint:
	npx eslint .

publish:
	npm publish

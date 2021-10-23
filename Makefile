install:
	npm i

installInOC:
	sudo npm link

publish:
	npm publish --dry-run

lint:
	npm run eslinter

fix:
	npm run eslinter-fix

install:
	npm i

edit:
	nano bin/brain-games.js

play:
	node bin/brain-games.js

publish:
	npm publish --dry-run

lint:
	npm run eslinter

fix:
	npm run eslinter-fix

install:
	npm i

edit:
	nano bin/brain-games.js

play:
	node bin/brain-games.js

publish:
	npm publish --dry-run

lint:
	eslint src/**/*.{js,jsx,ts,tsx}

fix:
	eslint src/**/*.{js,jsx,ts,tsx} --fix

all:
	rm -rf docs && npm run ghpage && cd docs && touch .nojekyll && echo 'one.primehub.io' > CNAME && cd ..

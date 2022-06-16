M:=${shell pwd}/node_modules/.bin/

all:
	@${M}webpack

run:
	@${M}livereload | ${M}http-server -c-1
.PHONY: all assets submodules

all: assets submodules

assets:
	curl -sS --no-progress-meter -o static/js/purify.js https://raw.githubusercontent.com/cure53/DOMPurify/main/dist/purify.js
	curl -sS --no-progress-meter -o static/js/purify.js.map https://raw.githubusercontent.com/cure53/DOMPurify/main/dist/purify.js.map
	curl -sS --no-progress-meter -o static/js/purify.min.js https://raw.githubusercontent.com/cure53/DOMPurify/main/dist/purify.min.js
	curl -sS --no-progress-meter -o static/js/purify.min.js.map https://raw.githubusercontent.com/cure53/DOMPurify/main/dist/purify.min.js.map

submodules:
	git submodule update --init --remote --recursive

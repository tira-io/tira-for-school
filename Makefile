build-ui-docker:
	mkdir -p ${PWD}/static/dist
	docker run --rm -v ${PWD}/pupil-submission-page:/app -v ${PWD}/static:/dist -w /app --entrypoint vite mam10eks/github-page-tutorial:0.0.2 build
	cp -r ${PWD}/static/assets-public ${PWD}/static/dist/assets-public
	cp -r ${PWD}/static/chunks ${PWD}/static/dist/chunks
	cp -r ${PWD}/static/entries ${PWD}/static/dist/entries
	cp -r ${PWD}/static/favicon.ico ${PWD}/static/dist/favicon.ico

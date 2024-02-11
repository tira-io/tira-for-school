build-ui-docker:
	docker run --rm -v ${PWD}/pupil-submission-page:/app -v ${PWD}/static/dist/:/dist -w /app --entrypoint vite mam10eks/github-page-tutorial:0.0.2 build

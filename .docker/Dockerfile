#docker build -t mam10eks/tira-for-school:0.0.1 -f .docker/Dockerfile .
FROM mam10eks/github-page-tutorial:0.0.2

ADD pupil-submission-page/package-lock.json pupil-submission-page/yarn.lock pupil-submission-page/package.json /tmp/

RUN cd /tmp &&\
	cp -r /usr/local/lib/node_modules . \
	&& npm install \
	&& rm -Rf /usr/local/lib/node_modules \
	&& mv node_modules /usr/local/lib/node_modules 

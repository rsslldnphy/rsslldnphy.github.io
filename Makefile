default: sass cljs

deploy: sass cljs
	cp resources/public/js/russellfail.min.js resources/public/css/russellfail.min.css . && \
		git aa && \
		git commit -m "deploy" && \
		git push

cljs:
	lein cljsbuild once prod

sass:
	rm -rf resources/public/css && bundle exec sass --update src/sass/application.sass:resources/public/css/russellfail.min.css --sourcemap=none

watch-sass:
	bundle exec sass --watch src/sass/application.sass:resources/public/css/russellfail.min.css --sourcemap=none

PROF = dev,test,srcmap
# PROF = dev
# PROF = prod,test
# PROF = prod

CLJSBUILD = fail

all: autocompile

run: openbrowser autocompile

openbrowser:
	(sleep 1 && open index.html) &

autocompile:
	rm -rf target
	sass --watch src/sass/fail.sass:fail.css
	lein with-profile $(PROF) cljsbuild auto $(CLJSBUILD)

clean:
	lein -o clean

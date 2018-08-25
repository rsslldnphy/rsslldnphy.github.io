#!/usr/bin/env bash

set -ex

# build the app
cd rsslldnphy && lein do clean, cljsbuild once min && cd ..

JS_HASH=`md5 rsslldnphy/resources/public/js/compiled/app.js | awk '{ print $4 }'`

cp rsslldnphy/resources/public/js/compiled/app.js \
  js/app.${JS_HASH}.js

cat rsslldnphy/resources/public/index.html \
  | sed "s/js\/compiled\/app.js/js\/app.${JS_HASH}.js/" \
  > index.html

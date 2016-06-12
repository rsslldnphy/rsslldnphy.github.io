#! /bin/bash -e

IMAGE=$1
THUMBNAIL_SMALL="$(echo $IMAGE | sed 's/\.jpg$//')-thumb.jpg"
THUMBNAIL_MEDIUM="$(echo $IMAGE | sed 's/\.jpg$//')-medium.jpg"

rm $THUMBNAIL_SMALL $THUMBNAIL_MEDIUM
cp $IMAGE $THUMBNAIL_SMALL
cp $IMAGE $THUMBNAIL_MEDIUM

sips --resampleWidth 600 $THUMBNAIL_SMALL
sips --resampleWidth 1000 $THUMBNAIL_MEDIUM

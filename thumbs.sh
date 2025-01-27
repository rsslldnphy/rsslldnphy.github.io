#!/bin/bash

# Check if ImageMagick is installed
if ! command -v convert &> /dev/null; then
    echo "Error: ImageMagick is not installed. Please install it first."
    echo "On Ubuntu/Debian: sudo apt-get install imagemagick"
    echo "On MacOS: brew install imagemagick"
    exit 1
fi

# Create thumbnails directory if it doesn't exist
mkdir -p public/images/stories/thumbnails

# Process each image file
for img in public/images/stories/*.jpg; do
    # Skip thumbnail files if they exist in the source directory
    if [[ $img == *"thumb.jpg" ]]; then
        continue
    fi
    
    # Extract just the filename without path and extension
    filename=$(basename "$img")
    basename="${filename%.*}"
    
    # Create thumbnail with new filename
    convert "$img" -resize "200x200>" "public/images/stories/thumbnails/${basename}_thumb.jpg"
    echo "Created thumbnail for $filename"
done

echo "All thumbnails have been generated!"

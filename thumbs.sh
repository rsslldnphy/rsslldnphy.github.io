#!/bin/bash

# Check if ImageMagick is installed
if ! command -v convert &> /dev/null; then
    echo "Error: ImageMagick is not installed. Please install it first."
    echo "On Ubuntu/Debian: sudo apt-get install imagemagick"
    echo "On MacOS: brew install imagemagick"
    exit 1
fi

# Define directories to process
DIRECTORIES=(
    "public/images/stories"
    "public/images/blog"
    "public/images/pictures"
)

# Supported image extensions
IMAGE_EXTENSIONS=("jpg" "jpeg" "png" "gif")

# Function to create thumbnail if it doesn't exist
create_thumbnail() {
    local source_file="$1"
    local source_dir=$(dirname "$source_file")
    local filename=$(basename "$source_file")
    local basename="${filename%.*}"
    local extension="${filename##*.}"
    local thumb_dir="${source_dir}/thumbnails"
    local thumb_path="${thumb_dir}/${basename}_thumb.${extension}"
    
    # Create thumbnails directory if it doesn't exist
    mkdir -p "$thumb_dir"
    
    # Check if thumbnail already exists
    if [ -f "$thumb_path" ]; then
        echo "Thumbnail already exists for $filename"
        return 0
    fi
    
    # Create thumbnail
    if convert "$source_file" -resize "800x600>" "$thumb_path"; then
        echo "Created thumbnail for $filename"
        return 0
    else
        echo "Error creating thumbnail for $filename"
        return 1
    fi
}

# Process each directory
for dir in "${DIRECTORIES[@]}"; do
    # Check if directory exists
    if [ ! -d "$dir" ]; then
        echo "Warning: Directory $dir does not exist, skipping..."
        continue
    fi
    
    echo "Processing directory: $dir"
    
    # Process each supported image extension
    for ext in "${IMAGE_EXTENSIONS[@]}"; do
        # Find all images with current extension (case insensitive)
        find "$dir" -maxdepth 1 -type f -iname "*.${ext}" | while read -r img; do
            # Skip if file is already a thumbnail
            if [[ $img == *"_thumb."* ]]; then
                continue
            fi
            
            create_thumbnail "$img"
        done
    done
done

echo "Thumbnail generation complete!"
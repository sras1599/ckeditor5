#!/usr/bin/bash

TARGET_DIR=$HOME/code/projects/xtenav/proposal-tool/crm-10xav/static/js/build/

yarn run build && cp build/ckeditor.js $TARGET_DIR

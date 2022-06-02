#!/usr/bin/bash

TARGET_DIR=$HOME/code/projects/xtenav/proposal-tool/worktrees/development/static/js/build/

yarn run build && cp build/ckeditor.js $TARGET_DIR

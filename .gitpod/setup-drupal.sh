#!/usr/bin/env bash
if [ -n "$DEBUG_DRUXTJS" ]; then
    set -x
fi

# Set up ddev for use on gitpod

set -eu -o pipefail

DRUPAL_DIR="${GITPOD_REPO_ROOT}/examples/drupal"

cd examples && git clone https://github.com/druxt/demo-api.druxtjs.org.git drupal

cd "$GITPOD_REPO_ROOT" && .gitpod/setup-ddev.sh

cd "$DRUPAL_DIR" && ddev composer install
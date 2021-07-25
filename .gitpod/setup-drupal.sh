#!/usr/bin/env bash
if [ -n "$DEBUG_DRUXTJS" ]; then
    set -x
fi

# Set up ddev for use on gitpod

set -eu -o pipefail

cd examples && git clone https://github.com/druxt/demo-api.druxtjs.org.git drupal

ddev composer install
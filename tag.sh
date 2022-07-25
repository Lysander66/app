#!/usr/bin/env bash
set -eu

VERSION=`cat CHANGELOG.md| grep '##' | head -n 1 | awk '{print $2}'`

# Generate the tag.
echo "==> Tagging version $VERSION..."
git tag -a "v${VERSION}" -m "Version $VERSION"
git push --tags

exit 0


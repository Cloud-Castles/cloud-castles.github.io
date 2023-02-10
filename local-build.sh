#!/usr/bin/env bash
HERE="$(dirname "$(readlink -f "$0")")"
IMAGE="docker.io/klakegg/hugo:0.100.0-ext-alpine"

ports="" # example 2 ports:  "8080:80,8443:443"
name=cmd

case ${1:---build} in
	--serve) args="server -w"; ports="1313:1313"; name=serve;;
	--build) args="build"; name=build;;
	*) args="$@";;
esac

cmd="podman run -p \"$ports\" --rm -it --name hugo-$name -v $HERE:/src:Z $IMAGE $args"

(2>&1 echo "Running '$cmd'")
exec $cmd

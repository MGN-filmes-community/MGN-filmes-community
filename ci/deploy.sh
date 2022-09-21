#!/bin/bash
abort()
{
    echo >&2 '
***************
*** ABORTED ***
***************
'
    echo "An error occurred. Exiting..." >&2
    exit 1
}

trap 'abort' 0

set -e

while getopts r:b: flag
do
    case "${flag}" in
        r) remote=${OPTARG};;
        b) build_folder=${OPTARG};;
    esac
done
echo "Origin remote: $remote";
echo "Build folder: $build_folder";

echo " `date` : Build Project!"

echo " `date` : Create Branch gh-pages"

git checkout --orphan gh-pages

BRANCH="$(git symbolic-ref HEAD)"
echo " `date` : Test if branch was created $BRANCH"
if [[ "$BRANCH" != "refs/heads/gh-pages" ]]; then
  echo 'Aborting script';
  exit 1;
fi

echo 'Do stuff';

echo " `date` : Install and generate"

# npm install
npm run generate

mv CNAME $build_folder

# commit changes on branch gh-pages
git --work-tree $build_folder add --all
git --work-tree $build_folder commit -m gh-pages

# push branch gh-pages
git push $remote HEAD:gh-pages --force

# rm -f $build_folder

git checkout -f main
git branch -D gh-pages

trap : 0

echo >&2 '
************
*** DONE *** 
************
'
#!/bin/bash

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
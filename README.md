rm -rf /dist

npm run build

git push -d origin gh-pages

git add dist -f

git subtree push --prefix dist origin gh-pages 
## Manual Deploy

Remove old dist file:

`rm -rf /dist`

Delete old gh-pages branch:

`git push -d origin gh-pages`

Build the new dist:

`npm run build`

Add the dist forcing since it is in the .gitignore:

`git add dist -f`

Commit the new dist:

`git commit -m "add dist"`

Push the new dist on gh-pages branch:

`git subtree push --prefix dist origin gh-pages`

Reset the dist addition from main:

`git reset HEAD~1`

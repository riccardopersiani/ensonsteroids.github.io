import ghpages from'gh-pages'

ghpages.publish(
	'public', // path to public directory
	{
		branch: 'gh-pages',
		repo: 'https://github.com/riccardopersiani/ensonsteroids.github.io.git', // Update to point to your repository
		user: {
			name: 'Riccardo Persiani', // update to use your name
			email: 'r.persiani92@gmail.com' // Update to use your email
		},
		dotfiles: true
	},
	() => {
		console.log('Deploy Complete!');
	}
);
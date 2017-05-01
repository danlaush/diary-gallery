var axios = require('axios');
var years = [1940,1941,1942,1943];
		
var dataUris = years.map((year, index) => {
	return window.encodeURI('/data/'+year+'.json');
});

var Api = {
	getDiaryEntries: function(requestYear) {

		return axios.get(dataUris[0])
			.then((response) => {
				return response.data;
			})
			.catch(handleError);
	},
	fetchPopularRepos: function(language) {

		var encodedURI = window.encodeURI('https://api.github.com/search/repositories?q=stars:>1+language:'+language+'&sort=stars&order=desc&type=Repositories');

		return axios.get(encodedURI)
			.then(function(response) {
				return response.data.items;
			});
	}
}

module.exports = Api;

function handleError(error) {
	console.warn(error);
	return null;
}

// function getProfile(username) {
// 	return axios
// 		.get('https://api.github.com/users/' + username + params)
// 		.then(function(user) {
// 			return user.data;
// 		});
// }

// getProfile('danlaush')
// 	.then(function(data) {

// 	})

// function getRepos(username) {
// 	return axios
// 		.get('https://api.github.com/users/' + username + '/repos' + params + '&per_page=100')
// 		.then(function(repos) {
// 			return repos.data;
// 		})
// }

// function getStarCount(repos) {
// 	return repos.reduce(function(count, repo) {
// 		return count + repo.stargazers_count;
// 	}, 0); // initialValue = 0
// }

// function calculateScore(profile, repos) {
// 	var followers = profile.followers;
// 	var totalStars = getStarCount(repos);

// 	return (followers * 3) + totalStars;
// }

// function getUserData (player) {
// 	return axios.all([
// 		getProfile(player),
// 		getRepos(player)
// 	]).then(function (data) {
// 		var profile = data[0];
// 		var repos = data[1];

// 		return {
// 			getProfile: profile,
// 			score: calculateScore(profile, repos)
// 		}
// 	});
// }

// function sortPlayers(players) {
// 	return players.sort(function (a,b) {
// 		return b.score - a.score;
// 	});
// }

// api.battle(['danlaush', 'adamweyant'])
// 	.then(function(players) {
// 		players[0] = winner;// structure = {getProfile, score}
// 		players[1] = loser;
// 	})
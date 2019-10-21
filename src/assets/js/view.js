class View {
	constructor(data = null) {
		if(data) {
			// Bio
			this.avatar = data.dataUser.avatar_url;
			this.username = data.dataUser.login;
			this.fullname = data.dataUser.name;
			this.bio = data.dataUser.bio;			
		}
	}
	generateBio() {
		const bio = `
			<div class="info-user-bio-image">
				<img src="${this.avatar}">
			</div>
			<div class="info-user-bio-data">
				<span class="username"><i>@${this.username}</i></span>
				<h1 class="fullname">${this.fullname}</h1>
				<p class="biography">${this.bio}</p>
			</div>
		`;
		return bio;
	}
	generateRepos(repoUrl, repoName, repoWatchers, repoForks) {
		const repos =  `
			<div class="info-user-repos-content-items">
				<a class="info-user-repos-content-items-link" href="${repoUrl}">${repoName}</a>
				<span>
					<i class="fa fa-star"></i> ${repoWatchers}
					<i class="fas fa-code-branch"></i> ${repoForks}
				</span>
			</div>
		`;
		return repos;
	}
	generateError() {
		const error = `
			<p>User not exist</p>
		`; 
		return error;
	}
}

module.exports = View;
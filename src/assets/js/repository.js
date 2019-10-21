class Repository {
	// Methods
	constructor(user = null, cliente_id = null, client_secret = null) {
		this.user = user;
		this.cliente_id = cliente_id;
		this.client_secret = client_secret;
	}
	async getUser() {
		const dataUserRequest = await fetch(`https://api.github.com/users/${this.user}?client_id=${this.cliente_id}&client_secret=${this.client_secret}`);
		const reposUserRequest = await fetch(`https://api.github.com/users/${this.user}/repos?client_id=${this.cliente_id}&client_secret=${this.client_secret}`);

		const dataUser = await dataUserRequest.json();
		const reposUser = await reposUserRequest.json();
		return {dataUser, reposUser};
	}
}

module.exports = Repository;
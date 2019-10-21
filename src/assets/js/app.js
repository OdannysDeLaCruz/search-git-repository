import '../../assets/scss/estilos.scss'
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'

const Repository = require("./repository");
const View = require("./view");
const {client_id, client_secret} = require("./config.json");


formSearchUsers.addEventListener('submit', (e) => {
	e.preventDefault();
	const user = inputSearch.value;
	if(user != '') {
		const repository = new Repository(user, client_id, client_secret);
		repository.getUser()
		.then(function(data) {
			if(data.dataUser.message == "Not Found") {
				infoUser.style.display = 'none';
				errorMessage.style.display = "block";

				const view = new View();
				const errorView = view.generateError();

				errorMessage.innerHTML = errorView;

				console.log(errorView);
			}
			else {
				infoUser.style.display = 'flex'; 
				errorMessage.style.display = "none";
				const view = new View(data);

				const bioView = view.generateBio();
				infoUserBio.innerHTML = bioView;

				// Limpiar area para no acumular los repositorios de los usuarios anteriores
				infoUserRepo.innerHTML = "";

				data.reposUser.map((repo) => {
					const reposView = view.generateRepos(repo.html_url, repo.name, repo.watchers, repo.forks);
					infoUserRepo.innerHTML += reposView;
				});
			}
		})			
	}
	else {
		infoUser.style.display = 'none';
		errorMessage.style.display = "none";

		infoUserBio.innerHTML = "";
		infoUserRepo.innerHTML = "";
		errorMessage.innerHTML = "";
	}
});
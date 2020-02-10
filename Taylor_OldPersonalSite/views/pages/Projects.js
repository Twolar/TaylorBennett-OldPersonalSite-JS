// --------------------------------
//  Define Data Sources
// --------------------------------

let getSortedByDateRepoList = async () => {
     const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    try {
        const response = await fetch(`https://api.github.com/users/twolar/repos?sort=updated`, options)
        const json = await response.json();
        //console.log(json)
        return json
    } catch (err) {
        console.log('Error getting repositories', err)
    }
}

let getRepoReadMe = async (reponame) => {
    const options = {
        method: 'GET',
        headers: {
            'Content-Type' : 'application/vnd.github.v3.json',
            'User-agent' : 'Taylor Bennett'
        }
    };
    try {
        let repoURL = "https://api.github.com/repos/twolar/" + reponame + "/contents/README.md"
        const response = await fetch(repoURL, options)
        // console.log(response)
        const json = await response.json()
        // console.log(json)
        // console.log(atob(json.content))
        var repoReadMeFileContents = atob(json.content)
        document.getElementById(reponame).innerHTML = repoReadMeFileContents
    } catch (err) {
        console.log('Error getting repositories', err)
    }
}

let Projects = {
    render : async () => {
        let repos = await getSortedByDateRepoList()
        let view =  /*html*/`
            <div class="text-center">
                <h1 class="display-3">My Projects</h1>
                <p>
                    <br />
                    This page pulls all public repositories and their corresponding README's from my <a href="https://github.com/twolar" target="_blank">Github</a>.
                    <br/>
                    Repositories are displayed in order based on when they were last updated (most recent being at the top).
                </p>

                <div class="container">
                    <div class="row justify-content-center">

                        <!-- shallow copy and reverse object array -->
                        ${ repos.map(repo => 
                            
                            /*html*/`<div class= "w-100 p-3 text-center">
                                        <div class="card shadow session h-100 bg-light">
                                            <h5 class="card-header border-bottom">
                                                <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                                            </h5>
                                            <div class="card-body">
                                                <pre id="${repo.name}" markdown="">${getRepoReadMe(repo.name)}</pre>
                                            </div>
                                            <div class="card-footer">
                                                <ul class="list-inline mb-3">
                                                    <li class="list-inline-item text-dark">
                                                        <a>Updated: ${moment(repo.updated_at).format("DD/MM/YY")}</a>
                                                    </li>
                                                    <li class="list-inline-item text-dark">
                                                        <a>Created: ${moment(repo.created_at).format("DD/MM/YY")}</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>`
                            ).join('\n ')
                        }
                    </div>
                </div>
            </div>
        `
        return view
    }
    , after_render: async () => {
    }

}

export default Projects;

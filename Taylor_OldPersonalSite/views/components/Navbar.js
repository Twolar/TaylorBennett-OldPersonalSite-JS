let Navbar = {
    render: async () => {
        let view =  /*html*/`
        <header>
            <nav class="navbar navbar-expand-sm navbar-toggleable-sm navbar-dark bg-dark mb-3 shadow-regular">
                <div class="container">

                    <a class="navbar-brand text-light" href="#">Taylor Bennett</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon navbar-light-toggler-bg"></span>
                    </button>
                    <div class="navbar-collapse collapse d-sm-inline-flex flex-sm-row-reverse" style="text-align: right">
                        <ul class="nav navbar-nav flex-grow-1">
                            <li class="nav-item">
                                <a class="nav-link text-light" href="/#/projects">Projects</a>
                            </li>
                        
                            <li class="nav-item">
                                <a class="nav-link text-light" href="/#/university">University</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>      
        `
        return view
    },
    after_render: async () => { }

}

export default Navbar;
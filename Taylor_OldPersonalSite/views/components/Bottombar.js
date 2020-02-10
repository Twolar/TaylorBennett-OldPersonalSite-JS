let Bottombar = {
    render: async () => {
        let view =  /*html*/`
            <footer class="bg-dark footer text-light mb-3 shadow-regular sticky-bottom">
                <div class="container text-center">
                    <p class="navbar-text pull-left">This website is hosted by Github Pages and built with JavaScript & Bootstrap 4</p>
                </div>
            </footer>
        `
        return view
    },
    after_render: async () => { }
}

export default Bottombar;


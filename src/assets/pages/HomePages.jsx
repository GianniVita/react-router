export default function HomePage() {

    return (

        <>

            <header>
                <nav
                    className="navbar navbar-expand-md navbar-light bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">Routing</a>
                        <button
                            className="navbar-toggler d-lg-none"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapsibleNavId"
                            aria-controls="collapsibleNavId"
                            aria-expanded="false"
                            aria-label="Toggle navigation">

                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="collapsibleNavId">
                            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" href="/" aria-current="page">Home

                                        <span className="visually-hidden">(current)</span></a>

                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/posts">Blog</a>
                                </li>
                               
                            </ul>
                           
                        </div>
                    </div>
                </nav>
            </header>
                

            <main className="min-vh-100">
                <div className="p-5 mb-4 bg-light rounded-3">
                    <div className="container-fluid py-5">
                        <h1 className="display-5 fw-bold">Welcomto our Website</h1>
                        <p className="col-md-8 fs-4">
                            Using a series of utilities, you can create this jumbotron, just
                            like the one in previous versions of Bootstrap. Check out the
                            examples below for how you can remix and restyle it to your liking.
                        </p>
                        <button className="btn btn-primary btn-lg" type="button">
                            Example button
                        </button>
                    </div>
                </div>
                
              <div className="container">
                    <p className="lead">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis nesciunt atque molestiae quia voluptatibus nemo consequatur impedit. Quam in sed labore inventore quibusdam consequuntur, quas ipsum. Nihil quaerat iusto enim maiores repellat debitis nostrum iure vel itaque. Optio distinctio officiis ducimus unde placeat, molestias velit repudiandae dolores ex est quisquam reprehenderit impedit praesentium! Ea minus distinctio molestiae voluptates ipsum culpa dolor recusandae quod, dolorum, architecto assumenda ex enim modi praesentium placeat hic iure deleniti blanditiis rem doloribus? Laborum repellat odit, maxime dicta cum provident quasi tempore facere mollitia voluptas commodi inventore, fugiat officiis earum repellendus dolore impedit ipsam ratione consequuntur.
                    </p>              

              </div>

            </main>

            <footer className="py-4 bg-light">
                <div className="container">
                    <p>
                        <i className="bi bi-c-circle me-1"></i>
                        Lorem, ipsum.
                    </p>
                </div>


            </footer>

        </>

    )
}





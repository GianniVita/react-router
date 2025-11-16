export default function PostsPage() {

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
                        <h1 className="display-5 fw-bold">Read our news</h1>
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

                <section className="mb-3">
                    <div className="container">
                        <div className="row row-cols-1 row-cols-md-3 g-3">
                            <div className="col">
                                <div className="card">
                                    <img className="card-img-top" src='https://picsum.photos/400/200' alt='' />
                                    <div className="card-body">
                                        <h3>Post Title</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col">
                                <div className="card">
                                    <img className="card-img-top" src='https://picsum.photos/400/200' alt='' />
                                    <div className="card-body">
                                        <h3>Post Title</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col">
                                <div className="card">
                                    <img className="card-img-top" src='https://picsum.photos/400/200' alt='' />
                                    <div className="card-body">
                                        <h3>Post Title</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                                    </div>
                                </div>
                            </div>  

                            <div className="col">
                                <div className="card">
                                        <img className="card-img-top" src='https://picsum.photos/400/200' alt='' />
                                        <div className="card-body">
                                            <h3>Post Title</h3>
                                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                                        </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card">
                                    <img className="card-img-top" src='https://picsum.photos/400/200' alt='' />
                                    <div className="card-body">
                                        <h3>Post Title</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col">
                                <div className="card">
                                    <img className="card-img-top" src='https://picsum.photos/400/200' alt='' />
                                    <div className="card-body">
                                        <h3>Post Title</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                       
                </section>






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
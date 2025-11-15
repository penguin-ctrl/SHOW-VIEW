import React from "react";

const Support = () => {
    return (
        <div className="text-light">
            <h1 className="text-center my-4">ABOUT US</h1>

            {/* Section 8 */}
            <section className="container-fluid bg-light text-dark py-4 px-3">
                <div className="row gx-4 gy-4">
                    {/* About Us */}
                    <div className="col-md-4">
                        <h1 className="text-center">About us</h1>
                        <p>
                            Show View Hostels offers students a perfect blend of comfort, affordability,
                            and community. Nestled in the heart of the city, our modern rooms and vibrant
                            common spaces provide a safe, welcoming environment for study and relaxation.
                            With convenient access to transport, shops, and campuses, Show View ensures
                            every student enjoys a balanced lifestyle, making it more than just a place
                            to stay—it’s a home away from home.
                        </p>
                    </div>

                    {/* Contact Us */}
                    <div className="col-md-4">
                        <h1 className="text-center">Contact Us</h1>
                        <form onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="text"
                                placeholder="THROUGH OUR EMAIL eliasmusambai@gmail.com"
                                className="form-control mb-3"
                            />
                            <textarea
                                className="form-control"
                                rows="1"
                                placeholder="0720448956"
                            ></textarea>
                        </form>
                    </div>

                    {/* Stay Connected */}
                    <div className="col-md-4 text-center">
                        <h1>Stay Connected</h1>
                        <br />
                        <div className="d-flex justify-content-center gap-3">
                            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Facebook_icon.svg"
                                    alt="Facebook"
                                    width="40"
                                />
                            </a>
                            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                                    alt="Instagram"
                                    width="40"
                                />
                            </a>
                        </div>

                        <br />
                        <p className="text-dark">
                            In partnership with Masinde Muliro University of Science 
                            and Technology and local support.
                        </p>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="text-light bg-dark text-center p-3 mt-3">
                <h5>
                    <marquee scrollAmount="5">
                        Developed By Dionysius Franco &copy;2025 All rights Reserved
                    </marquee>
                </h5>
            </footer>
        </div>
    );
};

export default Support;

import OwlCarousel from "react-owl-carousel";

const carouselOptions = {
    items: 1, // Number of items to display
    loop: true, // Infinite loop
    margin: 10, // Margin between items
    autoplay: true, // Enable auto play
    autoplayTimeout: 5000, // Auto play interval (in milliseconds)
    autoplayHoverPause: true, // Pause autoplay on hover
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 1,
        },
        1000: {
            items: 1,
        },
    },
};

const Feature = () => {
    return (
        <section>
            {/* Start First Part */}
            <div className="container-xxl py-5 bg-white" id="feature">
                <div className="container py-5 px-lg-5">
                    <div
                        className="text-center wow fadeInUp"
                        data-wow-delay="0.1s"
                        style={{
                            visibility: "visible",
                            animationDelay: "0.1s",
                            animationName: "fadeInUp",
                        }}
                    >
                        <h5 className="text-primary-gradient fw-medium">
                            App Features
                        </h5>
                        <h1 className="mb-5">Awesome Features</h1>
                    </div>
                    <div className="row g-4">
                        <div
                            className="col-lg-4 col-md-6 wow fadeInUp"
                            data-wow-delay="0.1s"
                            style={{
                                visibility: "visible",
                                animationDelay: "0.1s",
                                animationName: "fadeInUp",
                            }}
                        >
                            <div className="feature-item bg-light rounded p-4">
                                <div
                                    className="d-inline-flex align-items-center justify-content-center bg-primary-gradient rounded-circle mb-4"
                                    style={{ width: 60, height: 60 }}
                                >
                                    <i className="fa fa-eye text-white fs-4" />
                                </div>
                                <h5 className="mb-3">High Resolution</h5>
                                <p className="m-0">
                                    Erat ipsum justo amet duo et elitr dolor,
                                    est duo duo eos lorem sed diam stet diam sed
                                    stet lorem.
                                </p>
                            </div>
                        </div>
                        <div
                            className="col-lg-4 col-md-6 wow fadeInUp"
                            data-wow-delay="0.3s"
                            style={{
                                visibility: "visible",
                                animationDelay: "0.3s",
                                animationName: "fadeInUp",
                            }}
                        >
                            <div className="feature-item bg-light rounded p-4">
                                <div
                                    className="d-inline-flex align-items-center justify-content-center bg-secondary-gradient rounded-circle mb-4"
                                    style={{ width: 60, height: 60 }}
                                >
                                    <i className="fa fa-layer-group text-white fs-4" />
                                </div>
                                <h5 className="mb-3">Retina Ready</h5>
                                <p className="m-0">
                                    Erat ipsum justo amet duo et elitr dolor,
                                    est duo duo eos lorem sed diam stet diam sed
                                    stet lorem.
                                </p>
                            </div>
                        </div>
                        <div
                            className="col-lg-4 col-md-6 wow fadeInUp"
                            data-wow-delay="0.5s"
                            style={{
                                visibility: "visible",
                                animationDelay: "0.5s",
                                animationName: "fadeInUp",
                            }}
                        >
                            <div className="feature-item bg-light rounded p-4">
                                <div
                                    className="d-inline-flex align-items-center justify-content-center bg-primary-gradient rounded-circle mb-4"
                                    style={{ width: 60, height: 60 }}
                                >
                                    <i className="fa fa-edit text-white fs-4" />
                                </div>
                                <h5 className="mb-3">Editable Data</h5>
                                <p className="m-0">
                                    Erat ipsum justo amet duo et elitr dolor,
                                    est duo duo eos lorem sed diam stet diam sed
                                    stet lorem.
                                </p>
                            </div>
                        </div>
                        <div
                            className="col-lg-4 col-md-6 wow fadeInUp"
                            data-wow-delay="0.1s"
                            style={{
                                visibility: "visible",
                                animationDelay: "0.1s",
                                animationName: "fadeInUp",
                            }}
                        >
                            <div className="feature-item bg-light rounded p-4">
                                <div
                                    className="d-inline-flex align-items-center justify-content-center bg-secondary-gradient rounded-circle mb-4"
                                    style={{ width: 60, height: 60 }}
                                >
                                    <i className="fa fa-shield-alt text-white fs-4" />
                                </div>
                                <h5 className="mb-3">Fully Secured</h5>
                                <p className="m-0">
                                    Erat ipsum justo amet duo et elitr dolor,
                                    est duo duo eos lorem sed diam stet diam sed
                                    stet lorem.
                                </p>
                            </div>
                        </div>
                        <div
                            className="col-lg-4 col-md-6 wow fadeInUp"
                            data-wow-delay="0.3s"
                            style={{
                                visibility: "visible",
                                animationDelay: "0.3s",
                                animationName: "fadeInUp",
                            }}
                        >
                            <div className="feature-item bg-light rounded p-4">
                                <div
                                    className="d-inline-flex align-items-center justify-content-center bg-primary-gradient rounded-circle mb-4"
                                    style={{ width: 60, height: 60 }}
                                >
                                    <i className="fa fa-cloud text-white fs-4" />
                                </div>
                                <h5 className="mb-3">Cloud Storage</h5>
                                <p className="m-0">
                                    Erat ipsum justo amet duo et elitr dolor,
                                    est duo duo eos lorem sed diam stet diam sed
                                    stet lorem.
                                </p>
                            </div>
                        </div>
                        <div
                            className="col-lg-4 col-md-6 wow fadeInUp"
                            data-wow-delay="0.5s"
                            style={{
                                visibility: "visible",
                                animationDelay: "0.5s",
                                animationName: "fadeInUp",
                            }}
                        >
                            <div className="feature-item bg-light rounded p-4">
                                <div
                                    className="d-inline-flex align-items-center justify-content-center bg-secondary-gradient rounded-circle mb-4"
                                    style={{ width: 60, height: 60 }}
                                >
                                    <i className="fa fa-mobile-alt text-white fs-4" />
                                </div>
                                <h5 className="mb-3">Fully Responsive</h5>
                                <p className="m-0">
                                    Erat ipsum justo amet duo et elitr dolor,
                                    est duo duo eos lorem sed diam stet diam sed
                                    stet lorem.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End First Part */}
            {/* Start Second Part */}
            <div className="container-xxl py-5 bg-white">
                <div className="container py-5 px-lg-5">
                    <div className="row g-5 align-items-center">
                        <div
                            className="col-lg-8 wow fadeInUp"
                            data-wow-delay="0.1s"
                            style={{
                                visibility: "visible",
                                animationDelay: "0.1s",
                                animationName: "fadeInUp",
                            }}
                        >
                            <h5 className="text-primary-gradient fw-medium">
                                Screenshot
                            </h5>
                            <h1 className="mb-4">
                                User Friendly interface And Very Easy To Use
                                Fitness App
                            </h1>
                            <p className="mb-4">
                                Diam dolor diam ipsum et tempor sit. Aliqu diam
                                amet diam et eos labore. Clita erat ipsum et
                                lorem et sit, sed stet no labore lorem sit clita
                                duo justo eirmod magna dolore erat amet
                            </p>
                            <p>
                                <i className="fa fa-check text-primary-gradient me-3" />
                                Diam dolor diam ipsum et tempor sit
                            </p>
                            <p>
                                <i className="fa fa-check text-primary-gradient me-3" />
                                Aliqu diam amet diam et eos labore
                            </p>
                            <p className="mb-4">
                                <i className="fa fa-check text-primary-gradient me-3" />
                                Clita erat ipsum et lorem et sit
                            </p>
                            <a
                                href="https://www.free-css.com/free-css-templates"
                                className="btn btn-primary-gradient py-sm-3 px-4 px-sm-5 rounded-pill mt-3"
                            >
                                Read More
                            </a>
                        </div>
                        <div
                            className="col-lg-4 d-flex justify-content-center justify-content-lg-end wow fadeInUp"
                            data-wow-delay="0.3s"
                            style={{
                                visibility: "visible",
                                animationDelay: "0.3s",
                                animationName: "fadeInUp",
                            }}
                        >
                            <OwlCarousel
                                className="owl-carousel screenshot-carousel"
                                {...carouselOptions}
                            >
                                <img
                                    className="img-fluid"
                                    src="/img/screenshot-1.png"
                                    alt="website template"
                                />
                                <img
                                    className="img-fluid"
                                    src="/img/screenshot-2.png"
                                    alt="website template"
                                />
                                <img
                                    className="img-fluid"
                                    src="/img/screenshot-3.png"
                                    alt="website template"
                                />
                                <img
                                    className="img-fluid"
                                    src="/img/screenshot-4.png"
                                    alt="website template"
                                />
                                <img
                                    className="img-fluid"
                                    src="/img/screenshot-5.png"
                                    alt="website template"
                                />
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Second Part */}
            {/* Start Third Part */}
            <div className="container-xxl py-5 bg-white">
                <div className="container py-5 px-lg-5">
                    <div
                        className="text-center pb-4 wow fadeInUp"
                        data-wow-delay="0.1s"
                        style={{
                            visibility: "visible",
                            animationDelay: "0.1s",
                            animationName: "fadeInUp",
                        }}
                    >
                        <h5 className="text-primary-gradient fw-medium">
                            How It Works
                        </h5>
                        <h1 className="mb-5">3 Easy Steps</h1>
                    </div>
                    <div className="row gy-5 gx-4 justify-content-center">
                        <div
                            className="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp"
                            data-wow-delay="0.1s"
                            style={{
                                visibility: "visible",
                                animationDelay: "0.1s",
                                animationName: "fadeInUp",
                            }}
                        >
                            <div className="position-relative bg-light rounded pt-5 pb-4 px-4">
                                <div
                                    className="d-inline-flex align-items-center justify-content-center bg-primary-gradient rounded-circle position-absolute top-0 start-50 translate-middle shadow"
                                    style={{ width: 100, height: 100 }}
                                >
                                    <i className="fa fa-cog fa-3x text-white" />
                                </div>
                                <h5 className="mt-4 mb-3">Install the App</h5>
                                <p className="mb-0">
                                    Tempor erat elitr rebum clita dolor diam
                                    ipsum sit diam amet diam eos erat ipsum et
                                    lorem et sit sed stet
                                </p>
                            </div>
                        </div>
                        <div
                            className="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp"
                            data-wow-delay="0.3s"
                            style={{
                                visibility: "visible",
                                animationDelay: "0.3s",
                                animationName: "fadeInUp",
                            }}
                        >
                            <div className="position-relative bg-light rounded pt-5 pb-4 px-4">
                                <div
                                    className="d-inline-flex align-items-center justify-content-center bg-secondary-gradient rounded-circle position-absolute top-0 start-50 translate-middle shadow"
                                    style={{ width: 100, height: 100 }}
                                >
                                    <i className="fa fa-address-card fa-3x text-white" />
                                </div>
                                <h5 className="mt-4 mb-3">
                                    Setup Your Profile
                                </h5>
                                <p className="mb-0">
                                    Tempor erat elitr rebum clita dolor diam
                                    ipsum sit diam amet diam eos erat ipsum et
                                    lorem et sit sed stet
                                </p>
                            </div>
                        </div>
                        <div
                            className="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp"
                            data-wow-delay="0.5s"
                            style={{
                                visibility: "visible",
                                animationDelay: "0.5s",
                                animationName: "fadeInUp",
                            }}
                        >
                            <div className="position-relative bg-light rounded pt-5 pb-4 px-4">
                                <div
                                    className="d-inline-flex align-items-center justify-content-center bg-primary-gradient rounded-circle position-absolute top-0 start-50 translate-middle shadow"
                                    style={{ width: 100, height: 100 }}
                                >
                                    <i className="fa fa-check fa-3x text-white" />
                                </div>
                                <h5 className="mt-4 mb-3">
                                    Enjoy The Features
                                </h5>
                                <p className="mb-0">
                                    Tempor erat elitr rebum clita dolor diam
                                    ipsum sit diam amet diam eos erat ipsum et
                                    lorem et sit sed stet
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Third Part */}
            {/* Start fourth Part */}
            <div className="container-xxl py-5 bg-white">
                <div className="container py-5 px-lg-5">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6">
                            <img
                                src="img/about.png"
                                alt="website template"
                                className="img-fluid wow fadeInUp"
                                data-wow-delay="0.1s"
                                style={{
                                    visibility: "visible",
                                    animationDelay: "0.1s",
                                    animationName: "fadeInUp",
                                }}
                            />
                        </div>
                        <div
                            className="col-lg-6 wow fadeInUp"
                            data-wow-delay="0.3s"
                            style={{
                                visibility: "visible",
                                animationDelay: "0.3s",
                                animationName: "fadeInUp",
                            }}
                        >
                            <h5 className="text-primary-gradient fw-medium">
                                Download
                            </h5>
                            <h1 className="mb-4">
                                Download The Latest Version Of Our App
                            </h1>
                            <p className="mb-4">
                                Diam dolor diam ipsum et tempor sit. Aliqu diam
                                amet diam et eos labore. Clita erat ipsum et
                                lorem et sit, sed stet no labore lorem sit clita
                                duo justo eirmod magna dolore erat amet
                            </p>
                            <div className="row g-4">
                                <div
                                    className="col-sm-6 wow fadeIn"
                                    data-wow-delay="0.5s"
                                    style={{
                                        visibility: "visible",
                                        animationDelay: "0.5s",
                                        animationName: "fadeIn",
                                    }}
                                >
                                    <a
                                        href="https://www.free-css.com/free-css-templates"
                                        className="d-flex bg-primary-gradient rounded py-3 px-4"
                                    >
                                        <i className="fab fa-apple fa-3x text-white flex-shrink-0" />
                                        <div className="ms-3">
                                            <p className="text-white mb-0">
                                                Available On
                                            </p>
                                            <h5 className="text-white mb-0">
                                                App Store
                                            </h5>
                                        </div>
                                    </a>
                                </div>
                                <div
                                    className="col-sm-6 wow fadeIn"
                                    data-wow-delay="0.7s"
                                    style={{
                                        visibility: "visible",
                                        animationDelay: "0.7s",
                                        animationName: "fadeIn",
                                    }}
                                >
                                    <a
                                        href="https://www.free-css.com/free-css-templates"
                                        className="d-flex bg-secondary-gradient rounded py-3 px-4"
                                    >
                                        <i className="fab fa-android fa-3x text-white flex-shrink-0" />
                                        <div className="ms-3">
                                            <p className="text-white mb-0">
                                                Available On
                                            </p>
                                            <h5 className="text-white mb-0">
                                                Play Store
                                            </h5>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End fourth Part */}
        </section>
    );
};

export default Feature;

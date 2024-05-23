import "./project.css";

function ProjectComponent() {
  return (
    <section className="portfolio section bd-container" id="portfolio">
      <span className="section-subtitle">My recent work</span>
      <h2 className="section-title">Portfolio</h2>

      <div className="portfolio__nav">
        <span className="portfolio__item active-portfolio" data-filter="all">
          All
        </span>
        <span className="portfolio__item" data-filter=".web">
          Web
        </span>
        <span className="portfolio__item" data-filter=".ux">
          UI/UX
        </span>
        <span className="portfolio__item" data-filter=".app">
          App
        </span>
      </div>

      <div className="portfolio__container bd-grid">
        <div className="portfolio__content mix web">
          <a href="#" className="">
            <img
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTMwMzcyMzh8&ixlib=rb-4.0.3&q=85"
              alt="Work 1"
              className="portfolio__img"
            />
          </a>
          <div className="portfolio__data">
            <span className="portfolio__subtitle">Web development</span>
            <a href="#">
              <h2 className="portfolio__title">
                New portfolio of work done for a client.
              </h2>
            </a>
            <a href="#" className="button button-link">
              View detail
            </a>
          </div>
        </div>

        <div className="portfolio__content mix web">
          <a href="#" className="">
            <img
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTMwMzcyMzh8&ixlib=rb-4.0.3&q=85"
              alt="Work 2"
              className="portfolio__img"
            />
          </a>
          <div className="portfolio__data">
            <span className="portfolio__subtitle">Web development</span>
            <a href="#">
              <h2 className="portfolio__title">
                New portfolio of work done for a client.
              </h2>
            </a>
            <a href="#" className="button button-link">
              View detail
            </a>
          </div>
        </div>

        <div className="portfolio__content mix ux">
          <a href="#" className="">
            <img
              src="https://images.unsplash.com/photo-1646617747609-45b466ace9a6?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTMwMzc0MjB8&ixlib=rb-4.0.3&q=85"
              alt="Work 3"
              className="portfolio__img"
            />
          </a>
          <div className="portfolio__data">
            <span className="portfolio__subtitle">UX design</span>
            <a href="#">
              <h2 className="portfolio__title">
                New portfolio of work done for a client.
              </h2>
            </a>
            <a href="#" className="button button-link">
              View detail
            </a>
          </div>
        </div>

        <div className="portfolio__content mix ux">
          <a href="#" className="">
            <img
              src="https://images.unsplash.com/photo-1646617747609-45b466ace9a6?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTMwMzc0MjB8&ixlib=rb-4.0.3&q=85"
              alt="Work 4"
              className="portfolio__img"
            />
          </a>
          <div className="portfolio__data">
            <span className="portfolio__subtitle">UX design</span>
            <a href="#">
              <h2 className="portfolio__title">
                New portfolio of work done for a client.
              </h2>
            </a>
            <a href="#" className="button button-link">
              View detail
            </a>
          </div>
        </div>

        <div className="portfolio__content mix app">
          <a href="#" className="">
            <img
              src="https://images.unsplash.com/photo-1600856209809-8419414d351f?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTMwMzc1MjJ8&ixlib=rb-4.0.3&q=85"
              alt="Work 5"
              className="portfolio__img"
            />
          </a>
          <div className="portfolio__data">
            <span className="portfolio__subtitle">Mobile app</span>
            <a href="#">
              <h2 className="portfolio__title">
                New portfolio of work done for a client.
              </h2>
            </a>
            <a href="#" className="button button-link">
              View detail
            </a>
          </div>
        </div>

        <div className="portfolio__content mix app">
          <a href="#" className="">
            <img
              src="https://images.unsplash.com/photo-1600856209809-8419414d351f?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTMwMzc1MjJ8&ixlib=rb-4.0.3&q=85"
              alt="Work 6"
              className="portfolio__img"
            />
          </a>
          <div className="portfolio__data">
            <span className="portfolio__subtitle">Mobile app</span>
            <a href="#">
              <h2 className="portfolio__title">
                New portfolio of work done for a client.
              </h2>
            </a>
            <a href="#" className="button button-link">
              View detail
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectComponent;

import { NavLink } from "react-router-dom";

function Aqi() {
  return (
    <div>
      <main className="container py-5 mt-5 pt-5">
        <div className="row justify-content-center">
          <div className="col-12 col-md-5 col-lg-11">
            <section className="hero mb-5 pb-3 border-bottom hero-bg-panda">
              <h1 className="mb-2 display-4 fw-bolder text-dark">
                Weather-Panda — forecasts with a side of silliness 🐼
              </h1>
              <p className="lead mb-3 text-secondary">
                Who says checking the weather has to be boring? Not us. Meet
                <strong>Weather-Panda</strong> — your cuddly, slightly
                overdramatic meteorological sidekick.
              </p>
              <p className="mb-0 small fw-medium text-muted">
                We bring accurate forecasts, hourly gossip from the clouds, and
                occasional panda wisdom. ☁️
              </p>
            </section>

            <div className="card panda-card mb-4 shadow-sm border-0">
              <div className="card-body p-4">
                <h2 className="h4 mb-3 fw-bold text-primary">
                  What we do (short & sweet)
                </h2>
                <ul className="list-unstyled mb-0 row g-2">
                  <li className="col-12 col-sm-6 fw-semibold text-dark">
                    <span span="true" className="me-2 text-success">🌤️</span >{" "}
                    <strong>Real-time forecasts</strong> — because umbrellas are
                    expensive.
                  </li>
                  <li className="col-12 col-sm-6 fw-semibold text-dark">
                    <span span="true" className="me-2 text-success">⏱️</span >{" "}
                    <strong>Hourly breakdowns</strong> — know if you should jog
                    at noon or noon-ish.
                  </li>
                  <li className="col-12 col-sm-6 fw-semibold text-dark">
                    <span span="true" className="me-2 text-success">🔁</span >{" "}
                    <strong>Historical peek</strong> — for the weather
                    nostalgics among us.
                  </li>
                  <li className="col-12 col-sm-6 fw-semibold text-dark">
                    <span span="true" className="me-2 text-success">🎛️</span >{" "}
                    <strong>Clean UI</strong> — slides into your day like a
                    friendly panda snack.
                  </li>
                </ul>
              </div>
            </div>

            <div className="row g-4 mb-4">
              <div className="col-12 col-md-6">
                <div className="p-4 panda-card h-100 shadow-sm border-0">
                  <h3 className="h5 mb-2 fw-bold text-dark">Why a panda?</h3>
                  <p className="lead fs-6 mb-0 text-muted">
                    Pandas nap through drizzle and stare down storms with
                    uncanny calm. We channel that vibe: **relaxed, reliable, and
                    unexpectedly adorable.**
                  </p>
                </div>
              </div>

              <div className="col-12 col-md-6">
                <div className="p-4 panda-card h-100 shadow-sm border-0">
                  <h3 className="h5 mb-2 fw-bold text-dark">
                    How it helps you
                  </h3>
                  <p className="lead fs-6 mb-0 text-muted">
                    Plan your coffee runs, dodge the puddles, and brag about
                    that perfect picnic hour — all while **smiling at a panda
                    icon.**
                  </p>
                </div>
              </div>
            </div>

            <div className="card panda-card mb-5 shadow-sm border-0">
              <div className="card-body p-4">
                <h3 className="h6 mb-3 text-uppercase fw-semibold text-secondary">
                  Panda Promises
                </h3>
                <div className="row">
                  <div className="col-6 col-sm-3 mb-2 text-center">
                    <span span="true" className="d-block fw-bolder text-success">
                      Accurate
                    </span >
                    <small className="text-muted">Trusted sources</small>
                  </div>
                  <div className="col-6 col-sm-3 mb-2 text-center">
                    <span span="true" className="d-block fw-bolder text-success">Fast</span >
                    <small className="text-muted">Minimal fluff</small>
                  </div>
                  <div className="col-6 col-sm-3 mb-2 text-center">
                    <span span="true" className="d-block fw-bolder text-success">
                      Friendly
                    </span >
                    <small className="text-muted">We use emojis</small>
                  </div>
                  <div className="col-6 col-sm-3 mb-2 text-center">
                    <span span="true" className="d-block fw-bolder text-success">
                      Private
                    </span >
                    <small className="text-muted">No creepy tracking</small>
                  </div>
                </div>
              </div>
            </div>

            <div className="d-flex flex-column flex-sm-row align-items-center justify-content-between mb-4 gap-3">
              <div
                className="btn-group"
                role="group"
                aria-label="Weather-Panda Actions"
              >
                <NavLink
                  className="btn btn-success btn-lg fw-bold shadow-sm"
                  to="/"
                >
                  <span span="true" className="me-2">🌤️</span > Try the forecast
                </NavLink>
                <button className="btn btn-outline-dark btn-lg fw-semibold shadow-sm">
                  <span span="true" className="me-1">⭐</span > Rate Weather-Panda
                </button>
              </div>

              <div className="text-end">
                <div className="panda-tip fw-bold text-primary">
                  Psst — tip:
                </div>
                <div className="small text-muted">
                  Turn on notifications for sudden panda-approved storm alerts.
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Aqi;

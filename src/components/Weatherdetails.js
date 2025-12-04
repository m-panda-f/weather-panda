import { useState, useEffect } from "react";
import axios from "axios";

function Weatherdetails({ index, detailweather, onClose }) {
  const w = detailweather;
  const [prevweath, setprevweath] = useState(null);
  useEffect(() => {
    const key = process.env.REACT_APP_WEATHER_API;
    const url=process.env.REACT_APP_WEATHER_HISTORY_URL;
    axios
      .get(url, {
        params: {
          key: key,
          q: `${w.location.name}`,
          dt: `${w.location.localtime.split(" ")[0]}`,
        },
      })
      .then((res) => {
        setprevweath(res.data);
        console.log(res.data);
      })

      .catch((err) => console.log(err));
  }, [w.location.name, w.location.localtime]);
  const hours = prevweath?.forecast?.forecastday?.[0]?.hour ?? [];

  return (
    <div className="weather-detail-modal-overlay">
      <div className="weather-detail-modal-content">
        <div className="card text-dark shadow-lg p-3 rounded-4 border-0 weather-details-card-bg">
          <button
            type="button"
            className="btn-close position-absolute top-0 end-0 mt-3 me-3"
            aria-label="Close"
            onClick={() => onClose()}
          ></button>

          <div className="d-flex justify-content-between align-items-center mb-3">
            <div>
              <h4 className="mb-0 fw-bold">
                {w.location.name}, {w.location.country}
              </h4>
              <small className="text-secondary small">
                {w.location.localtime}
              </small>
            </div>

            <div className="text-end d-flex align-items-center gap-3">
              <div>
                <h1 className="display-6 mb-0 fw-bolder text-primary">
                  {w.current.temp_c}°C
                </h1>
                <small className="text-muted">
                  Feels like: {w.current.feelslike_c}°C
                </small>
              </div>
              <div className="text-center">
                <img
                  src={
                    w.current.condition.icon
                      ? `https:${w.current.condition.icon}`
                      : ""
                  }
                  className="weather-icon-lg"
                  alt={w.current.condition.text || "weather condition"}
                />
                <div className="small fw-medium text-dark">
                  {w.current.condition.text}
                </div>
              </div>
            </div>
          </div>

          <hr className="my-3" />

          <h5 className="mb-3 fw-bold text-secondary text-uppercase small">
            Current Metrics
          </h5>
          <div className="row text-center gy-3">
            <div className="col-6 col-md-4">
              <div className="p-2 border-end border-opacity-25">
                <div className="text-muted small fw-medium">Humidity</div>
                <div className="h5 fw-bold text-dark mt-1">
                  {w.current.humidity}%
                </div>
              </div>
            </div>

            <div className="col-6 col-md-4">
              <div className="p-2 border-end border-opacity-25">
                <div className="text-muted small fw-medium">Wind</div>
                <div className="h5 fw-bold text-dark mt-1">
                  {w.current.wind_kph} km/h
                </div>
              </div>
            </div>

            <div className="col-6 col-md-4">
              <div className="p-2">
                <div className="text-muted small fw-medium">UV Index</div>
                <div className="h5 fw-bold text-dark mt-1">{w.current.uv}</div>
              </div>
            </div>

            <div className="col-6 col-md-4">
              <div className="p-2 border-end border-opacity-25">
                <div className="text-muted small fw-medium">Visibility</div>
                <div className="h5 fw-bold text-dark mt-1">
                  {w.current.vis_km} km
                </div>
              </div>
            </div>

            <div className="col-6 col-md-4">
              <div className="p-2 border-end border-opacity-25">
                <div className="text-muted small fw-medium">Pressure</div>
                <div className="h5 fw-bold text-dark mt-1">
                  {w.current.pressure_mb} mb
                </div>
              </div>
            </div>

            <div className="col-6 col-md-4">
              <div className="p-2">
                <div className="text-muted small fw-medium">Precipitation</div>
                <div className="h5 fw-bold text-dark mt-1">
                  {w.current.precip_mm} mm
                </div>
              </div>
            </div>
          </div>

          <hr className="my-3" />

          <div>
            <div className="small text-muted mb-2 fw-bold text-uppercase">
              Hourly Forecast
            </div>

            <div className="d-flex gap-3 overflow-x-auto pb-2 custom-scrollbar">
              {hours && hours.length > 0 ? (
                hours.map((item, i) => (
                  <div
                    key={i}
                    className="text-center bg-light border rounded-3 p-3 flex-shrink-0 hourly-card"
                  >
                    <div className="small text-secondary mb-1">
                      {new Date(item.time).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </div>

                    <img
                      src={
                        item.condition.icon
                          ? `https:${item.condition.icon}`
                          : ""
                      }
                      alt={item.condition.text}
                      className="weather-icon-sm mb-1"
                    />

                    <div className="fw-bold fs-6 text-dark">
                      {item.temp_c}°C
                    </div>
                    <div className="small text-success fw-medium">
                      {item.chance_of_rain}%
                    </div>
                  </div>
                ))
              ) : (
                <div
                  className="spinner-border text-primary mx-auto"
                  role="status"
                >
                  <span span="true" className="visually-hidden">
                    Loading hourly data...
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weatherdetails;

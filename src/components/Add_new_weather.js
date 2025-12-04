import { useState } from "react";
import axios from "axios";
import Weatherdetails from "./Weatherdetails";

function Add_new_weather() {
  // eslint-disable-next-line no-unused-vars
  const [weather, setweather] = useState(null);
  const [place, setplace] = useState("");
  const [location, setlocation] = useState([]);
  const [Error, setError] = useState("");
  const [detailindex, setdetailindex] = useState(null);
  const [detailsweather, setdetailsweather] = useState(null);

  const addnewweather = () => {
    const key = process.env.REACT_APP_WEATHER_API;
    const url=process.env.REACT_APP_WEATHER_URL;
    axios
      .get(url, {
        params: {
          key: key,
          q: place,
        },
      })
      .then((res) => {
        const item = {
          id: Date.now() + Math.floor(Math.random() * 1000),
          city: place.trim(),
          weather: res.data,
        };
        setlocation((prev) => [...prev, item]);
        setweather(res.data);
        setplace("");
        setError("");
      })
      .catch((err) => {
        setError("Wrong Place or Network Error. Please try again.");
        setTimeout(() => setError(""), 3000);
        setplace("");
      });
  };

  const deleteweather = (id) => {
    const updatedLocations = location.filter((item) => item.id !== id);
    setlocation(updatedLocations);
  };

  const openDetails = (id, detailweather) => {
    setdetailindex(id);
    setdetailsweather(detailweather);
  };

  const closeDetails = () => {
    setdetailindex(null);
    setdetailsweather(null);
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center mb-5">
        <div className="col-12 col-lg-8">
          <div className="d-flex flex-column flex-md-row align-items-center justify-content-between gap-3 pt-4">
            <h2 className="h3 fw-bold text-dark mb-0">Add New Location</h2>

            <div className="input-group input-group-lg w-100 w-md-50">
              <input
                type="text"
                className="form-control rounded-start-pill border-primary"
                placeholder="City / Country Name (e.g., London, UK)"
                value={place}
                onChange={(e) => setplace(e.target.value)}
              />
              <button
                className="btn btn-primary rounded-end-pill fw-semibold"
                type="button"
                onClick={addnewweather}
              >
                Add
              </button>
            </div>
          </div>

          <div className="mt-3 text-center">
            {Error && (
              <div
                className="alert alert-danger p-2 d-inline-block shadow-sm"
                role="alert"
              >
                <strong className="small">{Error}</strong>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="row g-4 justify-content-center">
        {location.length > 0 ? (
          location.map((item, i) => (
            <div key={item.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="card h-100 text-center rounded-4 shadow-lg border-0 weather-card-bg">
                <div className="row g-0 align-items-center p-3">
                  <div className="col-4 d-flex justify-content-center">
                    <img
                      src={
                        item.weather.current.condition.icon
                          ? `https:${item.weather.current.condition.icon}`
                          : ""
                      }
                      className="img-fluid rounded-start weather-icon"
                      alt={item.weather.current.condition.text || "weather"}
                    />
                  </div>

                  <div className="col-8">
                    <div className="card-body p-1 text-start">
                      <h5 className="card-title fw-bold mb-0 text-dark">
                        {item.weather.location.name.toLowerCase() === "maisuru"
                          ? "Mysuru"
                          : item.weather.location.name}
                      </h5>
                      <h1 className="card-text fw-bolder display-6 mb-0">
                        {item.weather.current.temp_c}°C
                      </h1>
                      <h6 className="card-text">
                        <small className="text-muted fw-medium">
                          {item.weather.current.condition.text}
                        </small>
                      </h6>
                    </div>
                  </div>
                </div>

                <div className="card-footer bg-transparent border-0 pt-0 pb-3">
                  <div className="d-flex justify-content-around btn-group">
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-danger rounded-pill fw-semibold w-50 me-2"
                      onClick={() => deleteweather(item.id)}
                    >
                      Delete
                    </button>
                    <button
                      type="button"
                      className="btn btn-sm btn-primary rounded-pill fw-semibold w-50"
                      onClick={() => openDetails(item.id, item.weather)}
                    >
                      More...
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12 text-center py-5">
            <p className="lead text-muted">
              Use the search bar above to add your first weather location!
            </p>
          </div>
        )}
      </div>

      {detailindex !== null &&
        detailsweather && ( // Check for both null and data existence
          <Weatherdetails
            index={detailindex}
            detailweather={detailsweather}
            onClose={closeDetails}
          />
        )}
    </div>
  );
}

export default Add_new_weather;

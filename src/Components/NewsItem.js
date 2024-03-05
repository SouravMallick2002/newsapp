import React from "react";

const NewsItem =(props)=> {

    let { title, description, ImageUrl, NewsUrl, author, date, source } =
      props;
    return (
      <div className="my-3">
        <div className="card">
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              right: 0,
            }}
          >
            <span className="position-absolute badge rounded-pill bg-warning text-dark">
              {source}
            </span>
          </div>
          <img src={ImageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                By <u>{!author ? "Unknown" : author}</u> on{" "}
                <u>{new Date(date).toLocaleString()}</u>
              </small>
            </p>
            <a
              href={NewsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-dark"
            >
              Read More!
            </a>
          </div>
        </div>
      </div>
    );
}

export default NewsItem;

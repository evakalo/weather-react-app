import React from "react";

export default function UserAvatar() {
  return (
    <form className="mb-2">
      <div className="row">
        <div className="col-md-6">
          <input
            type="search"
            placeholder="Search city"
            className="form-control"
          />
        </div>
        <div className="col-md-3">
          <input
            type="submit"
            value="Search"
            className="btn btn-primary btn-color"
          />
        </div>
      </div>
    </form>
  );
}

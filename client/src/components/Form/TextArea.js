import React from "react";

export const TextArea = props => (
  <div className="form-group">
    <textarea className="form-control synopsis" rows="20" {...props} />
  </div>
);

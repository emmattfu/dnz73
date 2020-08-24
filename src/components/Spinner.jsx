import React from "react";
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: #6B427A;
`;

const Spinner = () => {
  return (
    <div className="sweet-loading">
      <ClipLoader
        css={override}
        size={150}
        color={"#6B427A"}
      />
    </div>
  );
};

export default Spinner
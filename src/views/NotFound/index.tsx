import React from "react";

export default function NotFound(): JSX.Element {
  // Console error on Not Found so we can catch these errors in the integration test,
  // since SPAs do not return HTTP status code 404
  // eslint-disable-next-line no-console
  console.error("Not found");

  return (
    <p>Not Found</p>
  );
}

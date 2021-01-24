export const backendUrl = (
  process.env.NODE_ENV === "production"
    ? `${window.location.protocol}//${window.location.host}`
    : `${window.location.protocol}//localhost:4000`
);

export const ROOT_PAGE_PATH = "/";

export const MAXMIN_PAGE_PATH = "/max-min";

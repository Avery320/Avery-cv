const baseUrl = import.meta.env.BASE_URL;

export const withBase = (path = "") => {
  const normalizedBase = baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;
  return `${normalizedBase}${path.replace(/^\/+/, "")}`;
};

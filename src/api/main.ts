const baseUrl = "http://localhost:8000";

const request = (
  url: string,
  method: "GET" | "POST" | "PATCH" | "PUT" | "DELETE",
  data?: Record<string, unknown>,
  headers: Record<string, unknown> = {},
  urlVerssion = "v1"
) => {
  const _url = [
    baseUrl,
    ["api", urlVerssion, url].join("/").replace(/\/{2,}/g, "/"),
  ].join("/");

  return fetch(_url, {
    method,
    headers: {
      ...headers,
      "Content-Type": "application/json",
    },
    body: data ? JSON.stringify(data) : undefined,
  });
};

const post = (url: string, data: Record<string, unknown>) =>
  request(url, "POST", data);
const get = (url: string, headers?: Record<string, unknown>) =>
  request(url, "GET", undefined, headers);

export { baseUrl, request, post,get };

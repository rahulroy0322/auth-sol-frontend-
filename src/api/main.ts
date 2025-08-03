import { env } from "@/schema/env";

const baseUrl = env.VITE_APP_API_URI

const request = (
  url: string,
  method: "GET" | "POST" | "PATCH" | "PUT" | "DELETE",
  data?: Record<string, unknown>,
  headers: Record<string, unknown> = {},
  controller?: AbortController,
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
    ...(!controller ? {} : { signal: controller.signal }),
  });
};

const post = (
  url: string,
  data: Record<string, unknown>,
  headers?: Record<string, unknown>,
  controller?: AbortController
) => request(url, "POST", data, headers, controller);
const get = (
  url: string,
  headers?: Record<string, unknown>,
  controller?: AbortController
) => request(url, "GET", undefined, headers, controller);

export { baseUrl, request, post, get };

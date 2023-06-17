export const setCookieClient = (name: string, value: string | number) =>
  (document.cookie = `${name}=${value}`);

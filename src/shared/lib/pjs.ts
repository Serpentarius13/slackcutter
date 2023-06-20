export default new Promise((res) => {
  const config = useRuntimeConfig();
  const script = document.createElement("script");
  script.onload = () => res(undefined);
  // script.setAttribute("src", `${config.public.baseUrl}/playerjs.js`);
  script.setAttribute("src", `/playerjs.js`);
  document.head.appendChild(script);
});

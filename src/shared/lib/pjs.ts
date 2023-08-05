export default new Promise((res) => {
  try {
    const script = document.createElement("script");
    script.onload = () => res(undefined);
    // script.setAttribute("src", `${config.public.baseUrl}/playerjs.js`);
    script.setAttribute("src", `/playerjs.js`);
    document.head.appendChild(script);
  } catch (e: any) {
    console.log("Player js error", e);
    throw new Error(e);
  }
});

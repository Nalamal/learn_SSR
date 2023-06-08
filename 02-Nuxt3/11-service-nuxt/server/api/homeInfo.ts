export default defineEventHandler((event) => {
  let { req, res } = event.node;

  console.log(req.method);
  console.log(req.url);
  return {
    code: 200,
    data: {
      name: "zs",
      age: 18,
    },
  };
});

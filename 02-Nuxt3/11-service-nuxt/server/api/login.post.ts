export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const method = getMethod(event);
  const body = await readBody(event);
  const bodyRaw = await readRawBody(event);

  console.log(query);
  console.log(method);
  console.log(body);
  console.log(bodyRaw);

  // 连接数据库...
  return {
    code: 200,
    data: {
      name: "zs",
      age: 18,
      token: "aabbcc",
    },
  };
});

export default function () {
  return useState("loginInfo", () => {
    return {
      name: "zs",
      age: 18,
      token: "aabbcc",
    };
  });
}

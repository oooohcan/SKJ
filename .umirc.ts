export default {
  npmClient: "pnpm",
  plugins: ["@umijs/plugins/dist/tailwindcss"],
  tailwindcss: {},

  // 复制文档配置
  routes: [
    { path: "/", component: "index" },
    { path: "/posts/create", component: "posts/create" },
    { path: "/register", component: "register" },
    { path: "/login", component: "login" },
    { path: "/posts/:postId", component: "posts/post" },
  ],
  apiRoute: {
    platform: "vercel",
  },
};

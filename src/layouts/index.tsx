import { Link, Outlet } from "umi";
import styles from "./index.less";

export default function Layout() {
  return (
    <div className="relative">
      <div
        className="fixed w-72 bottom-8 right-8 py-4 z-50 flex transition-all
        justify-end flex-col p-4 bg-white shadow hover:shadow-xl rounded"
      >
        <p className="text-right text-xs">
          哈喽哈喽，欢迎来到我的时空井，
          <br />
          在这里，你可以漫游进我的生活。
        </p>
        <p className="text-right mt-2">
          <a className="text-xs" href="https://space.bilibili.com/502316536">
            看看我的B站 ➡️
          </a>
        </p>
      </div>
      <Outlet />
    </div>
  );
}

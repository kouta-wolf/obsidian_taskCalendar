import { Calendar, House, Signpost, ChartBarBig, Settings, LogOut } from "lucide-react";

export const Sidebar = () => {
  return (
    <div className="flex h-screen w-16 flex-col justify-between border-e border-gray-100 bg-white dark:border-gray-800 dark:bg-gray-900">
      <div>
        <ul className="space-y-1 border-t border-gray-100 px-2 pt-4 dark:border-gray-800">
          <li>
            <a
              href="#"
              className="group relative grid place-content-center rounded-lg bg-gray-100 px-4 py-2 text-gray-900 dark:bg-gray-800 dark:text-white"
            >
              <House className="size-5" strokeWidth={1.5} />
              <span className="invisible absolute inset-s-full top-1/2 ms-4 -translate-y-1/2 rounded-sm bg-gray-200 px-2 py-1.5 text-xs font-medium text-gray-700 group-hover:visible dark:bg-gray-700 dark:text-gray-200 whitespace-nowrap">
                ダッシュボード
              </span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="group relative grid place-content-center rounded-lg px-4 py-2 text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-white"
            >
              <Calendar className="size-5" strokeWidth={1.5} />
              <span className="invisible absolute inset-s-full top-1/2 ms-4 -translate-y-1/2 rounded-sm bg-gray-200 px-2 py-1.5 text-xs font-medium text-gray-700 group-hover:visible dark:bg-gray-700 dark:text-gray-200 whitespace-nowrap">
                カレンダー
              </span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="group relative grid place-content-center rounded-lg px-4 py-2 text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-white"
            >
              <Signpost className="size-5" strokeWidth={1.5} />
              <span className="invisible absolute inset-s-full top-1/2 ms-4 -translate-y-1/2 rounded-sm bg-gray-200 px-2 py-1.5 text-xs font-medium text-gray-700 group-hover:visible dark:bg-gray-700 dark:text-gray-200 whitespace-nowrap">
                カンバン
              </span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="group relative grid place-content-center rounded-lg px-4 py-2 text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-white"
            >
              <ChartBarBig className="size-5" strokeWidth={1.5} />
              <span className="invisible absolute inset-s-full top-1/2 ms-4 -translate-y-1/2 rounded-sm bg-gray-200 px-2 py-1.5 text-xs font-medium text-gray-700 group-hover:visible dark:bg-gray-700 dark:text-gray-200 whitespace-nowrap">
                ガントチャート
              </span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="group relative grid place-content-center rounded-lg px-4 py-2 text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-white"
            >
              <Settings className="size-5" strokeWidth={1.5} />
              <span className="invisible absolute inset-s-full top-1/2 ms-4 -translate-y-1/2 rounded-sm bg-gray-200 px-2 py-1.5 text-xs font-medium text-gray-700 group-hover:visible dark:bg-gray-700 dark:text-gray-200 whitespace-nowrap">
                設定
              </span>
            </a>
          </li>
        </ul>
      </div>
      <div className="sticky inset-x-0 bottom-0 border-t border-gray-100 bg-white p-2 dark:border-gray-800 dark:bg-gray-900">
        <a
          href="#"
          className="group relative grid place-content-center rounded-lg px-4 py-2 text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-white"
        >
          <LogOut className="size-5" strokeWidth={1.5} />
          <span className="invisible absolute inset-s-full top-1/2 ms-4 -translate-y-1/2 rounded-sm bg-gray-200 px-2 py-1.5 text-xs font-medium text-gray-700 group-hover:visible dark:bg-gray-700 dark:text-gray-200 whitespace-nowrap">
            閉じる
          </span>
        </a>
      </div>
    </div>
  );
};

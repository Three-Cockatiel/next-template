/**
 * @description
 * @author Huang Wenjie
 * @createDate 2024-05-07
 */

import Link from 'next/link';

export default function NoFind() {
  return (
    <div className="flex h-[100vh] w-[100vw]">
      <div className="mx-auto flex h-full w-full max-w-[50rem] flex-col">
        <header className="z-50 mb-auto flex w-full justify-center py-4">
          <nav className="px-4 sm:px-6 lg:px-8" aria-label="Global">
            <a className="flex-none text-xl font-semibold dark:text-white sm:text-3xl" href="#" aria-label="Brand">
              Pone next cli
            </a>
          </nav>
        </header>
        <div className="px-4 py-10 text-center sm:px-6 lg:px-8">
          <h1 className="block text-7xl font-bold text-gray-800 dark:text-white sm:text-9xl">404</h1>
          <p className="mt-3 text-gray-600 dark:text-gray-400">发生错误</p>
          <p className="text-gray-600 dark:text-gray-400">抱歉，无法找到页面</p>
          <div className="mt-5 flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-3">
            <span className="inline-flex w-full items-center justify-center gap-x-3 rounded-md border border-transparent bg-blue-600 px-4 py-3 text-center text-sm font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-800 sm:w-auto">
              跳转其他
            </span>
            <Link
              className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-transparent px-4 py-3 text-sm font-semibold text-blue-500 ring-offset-white transition-all hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:ring-offset-slate-900 sm:w-auto"
              href="/"
            >
              <svg className="h-2.5 w-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M11.2792 1.64001L5.63273 7.28646C5.43747 7.48172 5.43747 7.79831 5.63273 7.99357L11.2792 13.64"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              回到主页
            </Link>
          </div>
        </div>
        <footer className="mt-auto py-5 text-center">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="text-sm text-gray-500">Pone next cli. © All Rights Reserved. 2023</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

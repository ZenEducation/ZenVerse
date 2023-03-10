<template>
  <div>
 
    <!-- page wrapper-->
    <div id="main-container" class="w-screen flex flex-row">
      <!-- Sidebar -->
      <div>
        <!-- mainsidebar -->
        <MainSidebar />

        <!-- sidebar pannel -->
        <KanbanSidebarPannel />

        <KanbanMinimizedSidebarPannel v-show="minimizedSidebarPannelToggle" />
      </div>

      <!-- App Header Wrapper-->
      <nav class="header print:hidden">
        <!-- App Header  -->
        <div
          class="has-min-sidebar header-container relative flex w-full bg-white dark:bg-navy-700 print:hidden"
        >
          <!-- Header Items -->
          <div class="flex w-full items-center justify-between">
            <!-- Left: Sidebar Toggle Button -->
            <div class="h-7 w-7">
              <button
                class="items-center justify-center sidebar-toggle ml-0.5 flex h-7 w-7 flex-col justify-center space-y-1.5 text-primary outline-none focus:outline-none dark:text-accent-light/80"
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>

            <!-- Right: Header buttons -->
            <div class="h-16 -mr-1.5 flex items-center space-x-2">
              <!-- Mobile Search Toggle -->
              <button
                class="flex items-center justify-center mobile-searchbar-show h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25 sm:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5.5 w-5.5 text-slate-500 dark:text-navy-100"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="1.5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>

              <!-- Main Searchbar -->
              <div id=" searchbar-wrapper" class="h-3/4 sm:flex">
                <div class="relative mr-4 flex h-8">
                  <input
                    id="searchbar-ref"
                    placeholder="Search here..."
                    class="form-input peer h-full w-60 rounded-full bg-slate-150 px-4 pl-9 text-xs+ text-slate-800 ring-primary/50 hover:bg-slate-200 focus:ring dark:bg-navy-900/90 dark:text-navy-100 dark:placeholder-navy-300 dark:ring-accent/50 dark:hover:bg-navy-900 dark:focus:bg-navy-900"
                    type="text"
                  />
                  <div
                    class="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4.5 w-4.5 transition-colors duration-200"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M3.316 13.781l.73-.171-.73.171zm0-5.457l.73.171-.73-.171zm15.473 0l.73-.171-.73.171zm0 5.457l.73.171-.73-.171zm-5.008 5.008l-.171-.73.171.73zm-5.457 0l-.171.73.171-.73zm0-15.473l-.171-.73.171.73zm5.457 0l.171-.73-.171.73zM20.47 21.53a.75.75 0 101.06-1.06l-1.06 1.06zM4.046 13.61a11.198 11.198 0 010-5.115l-1.46-.342a12.698 12.698 0 000 5.8l1.46-.343zm14.013-5.115a11.196 11.196 0 010 5.115l1.46.342a12.698 12.698 0 000-5.8l-1.46.343zm-4.45 9.564a11.196 11.196 0 01-5.114 0l-.342 1.46c1.907.448 3.892.448 5.8 0l-.343-1.46zM8.496 4.046a11.198 11.198 0 015.115 0l.342-1.46a12.698 12.698 0 00-5.8 0l.343 1.46zm0 14.013a5.97 5.97 0 01-4.45-4.45l-1.46.343a7.47 7.47 0 005.568 5.568l.342-1.46zm5.457 1.46a7.47 7.47 0 005.568-5.567l-1.46-.342a5.97 5.97 0 01-4.45 4.45l.342 1.46zM13.61 4.046a5.97 5.97 0 014.45 4.45l1.46-.343a7.47 7.47 0 00-5.568-5.567l-.342 1.46zm-5.457-1.46a7.47 7.47 0 00-5.567 5.567l1.46.342a5.97 5.97 0 014.45-4.45l-.343-1.46zm8.652 15.28l3.665 3.664 1.06-1.06-3.665-3.665-1.06 1.06z"
                      />
                    </svg>
                  </div>
                </div>
                <div
                  id="searchbar-box"
                  data-active-tab="#search-all"
                  class="popper-root search-tab-wrapper"
                >
                  <div
                    class="popper-box flex max-h-[calc(100vh-6rem)] w-80 flex-col rounded-lg border border-slate-150 bg-white shadow-soft dark:border-navy-800 dark:bg-navy-700 dark:shadow-soft-dark"
                  >
                    <div
                      class="is-scrollbar-hidden flex shrink-0 overflow-x-auto rounded-t-lg bg-slate-100 px-2 text-slate-600 dark:bg-navy-800 dark:text-navy-200"
                    >
                      <button
                        class="tab shrink-0 rounded-none border-b-2 px-3.5 py-2.5"
                        data-active-class="border-primary dark:border-accent text-primary dark:text-accent-light"
                        data-default-class="border-transparent hover:text-slate-800 focus:text-slate-800 dark:hover:text-navy-100 dark:focus:text-navy-100"
                        data-target="#search-all"
                      >
                        All
                      </button>
                      <button
                        class="tab shrink-0 rounded-none border-b-2 px-3.5 py-2.5"
                        data-active-class="border-primary dark:border-accent text-primary dark:text-accent-light"
                        data-default-class="border-transparent hover:text-slate-800 focus:text-slate-800 dark:hover:text-navy-100 dark:focus:text-navy-100"
                        data-target="#search-files"
                      >
                        Files
                      </button>
                      <button
                        class="tab shrink-0 rounded-none border-b-2 px-3.5 py-2.5"
                        data-active-class="border-primary dark:border-accent text-primary dark:text-accent-light"
                        data-default-class="border-transparent hover:text-slate-800 focus:text-slate-800 dark:hover:text-navy-100 dark:focus:text-navy-100"
                        data-target="#search-chats"
                      >
                        Chats
                      </button>
                      <button
                        class="tab shrink-0 rounded-none border-b-2 px-3.5 py-2.5"
                        data-active-class="border-primary dark:border-accent text-primary dark:text-accent-light"
                        data-default-class="border-transparent hover:text-slate-800 focus:text-slate-800 dark:hover:text-navy-100 dark:focus:text-navy-100"
                        data-target="#search-emails"
                      >
                        Emails
                      </button>
                      <button
                        class="tab shrink-0 rounded-none border-b-2 px-3.5 py-2.5"
                        data-active-class="border-primary dark:border-accent text-primary dark:text-accent-light"
                        data-default-class="border-transparent hover:text-slate-800 focus:text-slate-800 dark:hover:text-navy-100 dark:focus:text-navy-100"
                        data-target="#search-projects"
                      >
                        Projects
                      </button>
                      <button
                        class="tab shrink-0 rounded-none border-b-2 px-3.5 py-2.5"
                        data-active-class="border-primary dark:border-accent text-primary dark:text-accent-light"
                        data-default-class="border-transparent hover:text-slate-800 focus:text-slate-800 dark:hover:text-navy-100 dark:focus:text-navy-100"
                        data-target="#search-tasks"
                      >
                        Tasks
                      </button>
                    </div>

                    <div
                      class="is-scrollbar-hidden overflow-y-auto overscroll-contain pb-2"
                    >
                      <div
                        class="is-scrollbar-hidden mt-3 flex space-x-4 overflow-x-auto px-3"
                      >
                        <a href="apps-kanban.html" class="w-14 text-center">
                          <div class="avatar h-12 w-12">
                            <div
                              class="is-initial rounded-full bg-success text-white"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"
                                />
                              </svg>
                            </div>
                          </div>
                          <p
                            class="mt-1.5 overflow-hidden text-ellipsis whitespace-nowrap text-xs text-slate-700 dark:text-navy-100"
                          >
                            Kanban
                          </p>
                        </a>
                        <a
                          href="dashboards-crm-analytics.html"
                          class="w-14 text-center"
                        >
                          <div class="avatar h-12 w-12">
                            <div
                              class="is-initial rounded-full bg-secondary text-white"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                                />
                              </svg>
                            </div>
                          </div>
                          <p
                            class="mt-1.5 overflow-hidden text-ellipsis whitespace-nowrap text-xs text-slate-700 dark:text-navy-100"
                          >
                            Analytics
                          </p>
                        </a>
                        <a href="apps-chat.html" class="w-14 text-center">
                          <div class="avatar h-12 w-12">
                            <div
                              class="is-initial rounded-full bg-info text-white"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                                />
                              </svg>
                            </div>
                          </div>
                          <p
                            class="mt-1.5 overflow-hidden text-ellipsis whitespace-nowrap text-xs text-slate-700 dark:text-navy-100"
                          >
                            Chat
                          </p>
                        </a>
                        <a
                          href="apps-filemanager.html"
                          class="w-14 text-center"
                        >
                          <div class="avatar h-12 w-12">
                            <div
                              class="is-initial rounded-full bg-error text-white"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                                />
                              </svg>
                            </div>
                          </div>
                          <p
                            class="mt-1.5 overflow-hidden text-ellipsis whitespace-nowrap text-xs text-slate-700 dark:text-navy-100"
                          >
                            Files
                          </p>
                        </a>
                        <a
                          href="dashboards-crypto.html"
                          class="w-14 text-center"
                        >
                          <div class="avatar h-12 w-12">
                            <div
                              class="is-initial rounded-full bg-secondary text-white"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M15 9a2 2 0 10-4 0v5a2 2 0 01-2 2h6m-6-4h4m8 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </svg>
                            </div>
                          </div>
                          <p
                            class="mt-1.5 overflow-hidden text-ellipsis whitespace-nowrap text-xs text-slate-700 dark:text-navy-100"
                          >
                            Crypto
                          </p>
                        </a>
                        <a
                          href="dashboards-banking-1.html"
                          class="w-14 text-center"
                        >
                          <div class="avatar h-12 w-12">
                            <div
                              class="is-initial rounded-full bg-primary text-white dark:bg-accent"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                                />
                              </svg>
                            </div>
                          </div>
                          <p
                            class="mt-1.5 overflow-hidden text-ellipsis whitespace-nowrap text-xs text-slate-700 dark:text-navy-100"
                          >
                            Banking
                          </p>
                        </a>
                        <a href="apps-todo.html" class="w-14 text-center">
                          <div class="avatar h-12 w-12">
                            <div
                              class="is-initial rounded-full bg-info text-white"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2"
                              >
                                <path
                                  d="M12.5293 18L20.9999 8.40002"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M3 13.2L7.23529 18L17.8235 6"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                            </div>
                          </div>
                          <p
                            class="mt-1.5 overflow-hidden text-ellipsis whitespace-nowrap text-xs text-slate-700 dark:text-navy-100"
                          >
                            Todo
                          </p>
                        </a>
                        <a
                          href="dashboards-crm-analytics.html"
                          class="w-14 text-center"
                        >
                          <div class="avatar h-12 w-12">
                            <div
                              class="is-initial rounded-full bg-secondary text-white"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                                />
                              </svg>
                            </div>
                          </div>
                          <p
                            class="mt-1.5 overflow-hidden text-ellipsis whitespace-nowrap text-xs text-slate-700 dark:text-navy-100"
                          >
                            Analytics
                          </p>
                        </a>
                        <a
                          href="dashboards-orders.html"
                          class="w-14 text-center"
                        >
                          <div class="avatar h-12 w-12">
                            <div
                              class="is-initial rounded-full bg-warning text-white"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                />
                              </svg>
                            </div>
                          </div>
                          <p
                            class="mt-1.5 overflow-hidden text-ellipsis whitespace-nowrap text-xs text-slate-700 dark:text-navy-100"
                          >
                            Orders
                          </p>
                        </a>
                      </div>

                      <div
                        class="mt-3 flex items-center justify-between bg-slate-100 py-1.5 px-3 dark:bg-navy-800"
                      >
                        <p class="text-xs uppercase">Recent</p>
                        <a
                          href="#"
                          class="text-tiny+ font-medium uppercase text-primary outline-none transition-colors duration-300 hover:text-primary/70 focus:text-primary/70 dark:text-accent-light dark:hover:text-accent-light/70 dark:focus:text-accent-light/70"
                        >
                          View All
                        </a>
                      </div>

                      <div class="mt-1 font-inter font-medium">
                        <a
                          class="group flex items-center space-x-2 px-2.5 py-2 tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                          href="apps-chat.html"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-4.5 w-4.5 text-slate-400 transition-colors group-hover:text-slate-500 group-focus:text-slate-500 dark:text-navy-300 dark:group-hover:text-navy-200 dark:group-focus:text-navy-200"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="1.5"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                            />
                          </svg>
                          <span>Chat App</span>
                        </a>
                        <a
                          class="group flex items-center space-x-2 px-2.5 py-2 tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                          href="apps-filemanager.html"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-4.5 w-4.5 text-slate-400 transition-colors group-hover:text-slate-500 group-focus:text-slate-500 dark:text-navy-300 dark:group-hover:text-navy-200 dark:group-focus:text-navy-200"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="1.5"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                            />
                          </svg>
                          <span>File Manager App</span>
                        </a>
                        <a
                          class="group flex items-center space-x-2 px-2.5 py-2 tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                          href="apps-mail.html"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-4.5 w-4.5 text-slate-400 transition-colors group-hover:text-slate-500 group-focus:text-slate-500 dark:text-navy-300 dark:group-hover:text-navy-200 dark:group-focus:text-navy-200"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="1.5"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                          <span>Email App</span>
                        </a>
                        <a
                          class="group flex items-center space-x-2 px-2.5 py-2 tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                          href="apps-kanban.html"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-4.5 w-4.5 text-slate-400 transition-colors group-hover:text-slate-500 group-focus:text-slate-500 dark:text-navy-300 dark:group-hover:text-navy-200 dark:group-focus:text-navy-200"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="1.5"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"
                            />
                          </svg>
                          <span>Kanban Board</span>
                        </a>
                        <a
                          class="group flex items-center space-x-2 px-2.5 py-2 tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                          href="apps-todo.html"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-4.5 w-4.5 text-slate-400 transition-colors group-hover:text-slate-500 group-focus:text-slate-500 dark:text-navy-300 dark:group-hover:text-navy-200 dark:group-focus:text-navy-200"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="1.5"
                          >
                            <path
                              d="M3 13.2L7.23529 18L17.8235 6"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M12.5293 18L20.9999 8.40002"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                          <span>Todo App</span>
                        </a>
                        <a
                          class="group flex items-center space-x-2 px-2.5 py-2 tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                          href="dashboards-crypto-2.html"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-4.5 w-4.5 text-slate-400 transition-colors group-hover:text-slate-500 group-focus:text-slate-500 dark:text-navy-300 dark:group-hover:text-navy-200 dark:group-focus:text-navy-200"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="1.5"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M15 9a2 2 0 10-4 0v5a2 2 0 01-2 2h6m-6-4h4m8 0a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>

                          <span>Crypto Dashboard</span>
                        </a>
                        <a
                          class="group flex items-center space-x-2 px-2.5 py-2 tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                          href="dashboards-banking-2.html"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-4.5 w-4.5 text-slate-400 transition-colors group-hover:text-slate-500 group-focus:text-slate-500 dark:text-navy-300 dark:group-hover:text-navy-200 dark:group-focus:text-navy-200"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="1.5"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                            />
                          </svg>

                          <span>Banking Dashboard</span>
                        </a>
                        <a
                          class="group flex items-center space-x-2 px-2.5 py-2 tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                          href="dashboards-crm-analytics.html"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-4.5 w-4.5 text-slate-400 transition-colors group-hover:text-slate-500 group-focus:text-slate-500 dark:text-navy-300 dark:group-hover:text-navy-200 dark:group-focus:text-navy-200"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="1.5"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                            />
                          </svg>

                          <span>Analytics Dashboard</span>
                        </a>
                        <a
                          class="group flex items-center space-x-2 px-2.5 py-2 tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                          href="dashboards-influencer.html"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-4.5 w-4.5 text-slate-400 transition-colors group-hover:text-slate-500 group-focus:text-slate-500 dark:text-navy-300 dark:group-hover:text-navy-200 dark:group-focus:text-navy-200"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="1.5"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>

                          <span>Influencer Dashboard</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Dark Mode Toggle -->
              <button
                @click="($event) => toggleDark()"
                class="flex items-center justify-center darkmode-toggle h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
              >
                <svg
                  class="darkmode-moon h-6 w-6 text-amber-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M11.75 3.412a.818.818 0 01-.07.917 6.332 6.332 0 00-1.4 3.971c0 3.564 2.98 6.494 6.706 6.494a6.86 6.86 0 002.856-.617.818.818 0 011.1 1.047C19.593 18.614 16.218 21 12.283 21 7.18 21 3 16.973 3 11.956c0-4.563 3.46-8.31 7.925-8.948a.818.818 0 01.826.404z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="darkmode-sun h-6 w-6 text-amber-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>

              <!-- Monochrome Mode Toggle -->
              <button
                class="flex items-center justify-center monochrome-toggle h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
              >
                <i
                  class="fa-solid fa-palette bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-lg font-semibold text-transparent"
                ></i>
              </button>

              <!-- Notification-->
              <div id="notification-wrapper" class="flex">
                <button
                  id="notification-ref"
                  class="flex items-center justify-center mt-6 relative h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 text-slate-500 dark:text-navy-100"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M15.375 17.556h-6.75m6.75 0H21l-1.58-1.562a2.254 2.254 0 01-.67-1.596v-3.51a6.612 6.612 0 00-1.238-3.85 6.744 6.744 0 00-3.262-2.437v-.379c0-.59-.237-1.154-.659-1.571A2.265 2.265 0 0012 2c-.597 0-1.169.234-1.591.65a2.208 2.208 0 00-.659 1.572v.38c-2.621.915-4.5 3.385-4.5 6.287v3.51c0 .598-.24 1.172-.67 1.595L3 17.556h12.375zm0 0v1.11c0 .885-.356 1.733-.989 2.358A3.397 3.397 0 0112 22a3.397 3.397 0 01-2.386-.976 3.313 3.313 0 01-.989-2.357v-1.111h6.75z"
                    />
                  </svg>

                  <span
                    class="absolute -top-px -right-px flex h-3 w-3 items-center justify-center"
                  >
                    <span
                      class="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-80"
                    ></span>
                    <span
                      class="inline-flex h-2 w-2 rounded-full bg-secondary"
                    ></span>
                  </span>
                </button>
                <div id="notification-box" class="popper-root">
                  <div
                    class="notification-tab-wrapper popper-box mx-4 mt-1 flex max-h-[calc(100vh-6rem)] w-[calc(100vw-2rem)] flex-col rounded-lg border border-slate-150 bg-white shadow-soft dark:border-navy-800 dark:bg-navy-700 dark:shadow-soft-dark sm:m-0 sm:w-80"
                  >
                    <div
                      class="rounded-t-lg bg-slate-100 text-slate-600 dark:bg-navy-800 dark:text-navy-200"
                    >
                      <div class="flex items-center justify-between px-4 pt-2">
                        <div class="flex items-center space-x-2">
                          <h3
                            class="font-medium text-slate-700 dark:text-navy-100"
                          >
                            Notifications
                          </h3>
                          <div
                            class="badge h-5 rounded-full bg-primary/10 px-1.5 text-primary dark:bg-accent-light/15 dark:text-accent-light"
                          >
                            26
                          </div>
                        </div>

                        <button
                          class="-mr-1.5 h-7 w-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-4.5 w-4.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="1.5"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                            />
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                        </button>
                      </div>

                      <div
                        class="tabs is-scrollbar-hidden flex shrink-0 overflow-x-auto px-3"
                      >
                        <button
                          class="tab shrink-0 rounded-none border-b-2 px-3.5 py-2.5"
                          data-active-class="border-primary dark:border-accent text-primary dark:text-accent-light"
                          data-default-class="border-transparent hover:text-slate-800 focus:text-slate-800 dark:hover:text-navy-100 dark:focus:text-navy-100"
                          data-target="#notification-all"
                        >
                          <span>All</span>
                        </button>
                        <button
                          class="tab shrink-0 rounded-none border-b-2 px-3.5 py-2.5"
                          data-active-class="border-primary dark:border-accent text-primary dark:text-accent-light"
                          data-default-class="border-transparent hover:text-slate-800 focus:text-slate-800 dark:hover:text-navy-100 dark:focus:text-navy-100"
                          data-target="#notification-alerts"
                        >
                          <span>Alerts</span>
                        </button>
                        <button
                          class="tab shrink-0 rounded-none border-b-2 px-3.5 py-2.5"
                          data-active-class="border-primary dark:border-accent text-primary dark:text-accent-light"
                          data-default-class="border-transparent hover:text-slate-800 focus:text-slate-800 dark:hover:text-navy-100 dark:focus:text-navy-100"
                          data-target="#notification-events"
                        >
                          <span>Events</span>
                        </button>
                        <button
                          class="tab shrink-0 rounded-none border-b-2 px-3.5 py-2.5"
                          data-active-class="border-primary dark:border-accent text-primary dark:text-accent-light"
                          data-default-class="border-transparent hover:text-slate-800 focus:text-slate-800 dark:hover:text-navy-100 dark:focus:text-navy-100"
                          data-target="#notification-logs"
                        >
                          <span>Logs</span>
                        </button>
                      </div>
                    </div>

                    <div class="flex flex-col overflow-hidden">
                      <div
                        class="tab-content tab-shift-left is-scrollbar-hidden space-y-4 overflow-y-auto px-4 py-4"
                        id="notification-all"
                      >
                        <div class="flex items-center space-x-3">
                          <div
                            class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary/10 dark:bg-secondary-light/15"
                          >
                            <i
                              class="fa fa-user-edit text-secondary dark:text-secondary-light"
                            ></i>
                          </div>
                          <div>
                            <p
                              class="font-medium text-slate-600 dark:text-navy-100"
                            >
                              User Photo Changed
                            </p>
                            <div
                              class="mt-1 text-xs text-slate-400 line-clamp-1 dark:text-navy-300"
                            >
                              John Doe changed his avatar photo
                            </div>
                          </div>
                        </div>
                        <div class="flex items-center space-x-3">
                          <div
                            class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-info/10 dark:bg-info/15"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="h-5 w-5 text-info"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              stroke-width="1.5"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                              />
                            </svg>
                          </div>
                          <div>
                            <p
                              class="font-medium text-slate-600 dark:text-navy-100"
                            >
                              Mon, June 14, 2021
                            </p>
                            <div
                              class="mt-1 flex text-xs text-slate-400 dark:text-navy-300"
                            >
                              <span class="shrink-0">08:00 - 09:00</span>
                              <div
                                class="mx-2 my-1 w-px bg-slate-200 dark:bg-navy-500"
                              ></div>

                              <span class="line-clamp-1">Frontend Conf</span>
                            </div>
                          </div>
                        </div>
                        <div class="flex items-center space-x-3">
                          <div
                            class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 dark:bg-accent-light/15"
                          >
                            <i
                              class="fa-solid fa-image text-primary dark:text-accent-light"
                            ></i>
                          </div>
                          <div>
                            <p
                              class="font-medium text-slate-600 dark:text-navy-100"
                            >
                              Images Added
                            </p>
                            <div
                              class="mt-1 text-xs text-slate-400 line-clamp-1 dark:text-navy-300"
                            >
                              Mores Clarke added new image gallery
                            </div>
                          </div>
                        </div>
                        <div class="flex items-center space-x-3">
                          <div
                            class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-success/10 dark:bg-success/15"
                          >
                            <i class="fa fa-leaf text-success"></i>
                          </div>
                          <div>
                            <p
                              class="font-medium text-slate-600 dark:text-navy-100"
                            >
                              Design Completed
                            </p>
                            <div
                              class="mt-1 text-xs text-slate-400 line-clamp-1 dark:text-navy-300"
                            >
                              Robert Nolan completed the design of the CRM
                              application
                            </div>
                          </div>
                        </div>
                        <div class="flex items-center space-x-3">
                          <div
                            class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-info/10 dark:bg-info/15"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="h-5 w-5 text-info"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              stroke-width="1.5"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                              />
                            </svg>
                          </div>
                          <div>
                            <p
                              class="font-medium text-slate-600 dark:text-navy-100"
                            >
                              Wed, June 21, 2021
                            </p>
                            <div
                              class="mt-1 flex text-xs text-slate-400 dark:text-navy-300"
                            >
                              <span class="shrink-0">16:00 - 20:00</span>
                              <div
                                class="mx-2 my-1 w-px bg-slate-200 dark:bg-navy-500"
                              ></div>

                              <span class="line-clamp-1">UI/UX Conf</span>
                            </div>
                          </div>
                        </div>
                        <div class="flex items-center space-x-3">
                          <div
                            class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-warning/10 dark:bg-warning/15"
                          >
                            <i class="fa fa-project-diagram text-warning"></i>
                          </div>
                          <div>
                            <p
                              class="font-medium text-slate-600 dark:text-navy-100"
                            >
                              ER Diagram
                            </p>
                            <div
                              class="mt-1 text-xs text-slate-400 line-clamp-1 dark:text-navy-300"
                            >
                              Team completed the ER diagram app
                            </div>
                          </div>
                        </div>
                        <div class="flex items-center space-x-3">
                          <div
                            class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-warning/10 dark:bg-warning/15"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="h-5 w-5 text-warning"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              stroke-width="1.5"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                              />
                            </svg>
                          </div>
                          <div>
                            <p
                              class="font-medium text-slate-600 dark:text-navy-100"
                            >
                              THU, May 11, 2021
                            </p>
                            <div
                              class="mt-1 flex text-xs text-slate-400 dark:text-navy-300"
                            >
                              <span class="shrink-0">10:00 - 11:30</span>
                              <div
                                class="mx-2 my-1 w-px bg-slate-200 dark:bg-navy-500"
                              ></div>
                              <span class="line-clamp-1"
                                >Interview, Konnor Guzman
                              </span>
                            </div>
                          </div>
                        </div>
                        <div class="flex items-center space-x-3">
                          <div
                            class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-error/10 dark:bg-error/15"
                          >
                            <i class="fa fa-history text-error"></i>
                          </div>
                          <div>
                            <p
                              class="font-medium text-slate-600 dark:text-navy-100"
                            >
                              Weekly Report
                            </p>
                            <div
                              class="mt-1 text-xs text-slate-400 line-clamp-1 dark:text-navy-300"
                            >
                              The weekly report was uploaded
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        id="notification-alerts"
                        class="tab-content tab-shift-left is-scrollbar-hidden space-y-4 overflow-y-auto px-4 py-4"
                      >
                        <div class="flex items-center space-x-3">
                          <div
                            class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary/10 dark:bg-secondary-light/15"
                          >
                            <i
                              class="fa fa-user-edit text-secondary dark:text-secondary-light"
                            ></i>
                          </div>
                          <div>
                            <p
                              class="font-medium text-slate-600 dark:text-navy-100"
                            >
                              User Photo Changed
                            </p>
                            <div
                              class="mt-1 text-xs text-slate-400 line-clamp-1 dark:text-navy-300"
                            >
                              John Doe changed his avatar photo
                            </div>
                          </div>
                        </div>
                        <div class="flex items-center space-x-3">
                          <div
                            class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 dark:bg-accent-light/15"
                          >
                            <i
                              class="fa-solid fa-image text-primary dark:text-accent-light"
                            ></i>
                          </div>
                          <div>
                            <p
                              class="font-medium text-slate-600 dark:text-navy-100"
                            >
                              Images Added
                            </p>
                            <div
                              class="mt-1 text-xs text-slate-400 line-clamp-1 dark:text-navy-300"
                            >
                              Mores Clarke added new image gallery
                            </div>
                          </div>
                        </div>
                        <div class="flex items-center space-x-3">
                          <div
                            class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-success/10 dark:bg-success/15"
                          >
                            <i class="fa fa-leaf text-success"></i>
                          </div>
                          <div>
                            <p
                              class="font-medium text-slate-600 dark:text-navy-100"
                            >
                              Design Completed
                            </p>
                            <div
                              class="mt-1 text-xs text-slate-400 line-clamp-1 dark:text-navy-300"
                            >
                              Robert Nolan completed the design of the CRM
                              application
                            </div>
                          </div>
                        </div>
                        <div class="flex items-center space-x-3">
                          <div
                            class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-warning/10 dark:bg-warning/15"
                          >
                            <i class="fa fa-project-diagram text-warning"></i>
                          </div>
                          <div>
                            <p
                              class="font-medium text-slate-600 dark:text-navy-100"
                            >
                              ER Diagram
                            </p>
                            <div
                              class="mt-1 text-xs text-slate-400 line-clamp-1 dark:text-navy-300"
                            >
                              Team completed the ER diagram app
                            </div>
                          </div>
                        </div>
                        <div class="flex items-center space-x-3">
                          <div
                            class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-error/10 dark:bg-error/15"
                          >
                            <i class="fa fa-history text-error"></i>
                          </div>
                          <div>
                            <p
                              class="font-medium text-slate-600 dark:text-navy-100"
                            >
                              Weekly Report
                            </p>
                            <div
                              class="mt-1 text-xs text-slate-400 line-clamp-1 dark:text-navy-300"
                            >
                              The weekly report was uploaded
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        id="notification-events"
                        class="tab-content tab-shift-left is-scrollbar-hidden space-y-4 overflow-y-auto px-4 py-4"
                      >
                        <div class="flex items-center space-x-3">
                          <div
                            class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-info/10 dark:bg-info/15"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="h-5 w-5 text-info"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              stroke-width="1.5"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                              />
                            </svg>
                          </div>
                          <div>
                            <p
                              class="font-medium text-slate-600 dark:text-navy-100"
                            >
                              Mon, June 14, 2021
                            </p>
                            <div
                              class="mt-1 flex text-xs text-slate-400 dark:text-navy-300"
                            >
                              <span class="shrink-0">08:00 - 09:00</span>
                              <div
                                class="mx-2 my-1 w-px bg-slate-200 dark:bg-navy-500"
                              ></div>

                              <span class="line-clamp-1">Frontend Conf</span>
                            </div>
                          </div>
                        </div>
                        <div class="flex items-center space-x-3">
                          <div
                            class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-info/10 dark:bg-info/15"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="h-5 w-5 text-info"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              stroke-width="1.5"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                              />
                            </svg>
                          </div>
                          <div>
                            <p
                              class="font-medium text-slate-600 dark:text-navy-100"
                            >
                              Wed, June 21, 2021
                            </p>
                            <div
                              class="mt-1 flex text-xs text-slate-400 dark:text-navy-300"
                            >
                              <span class="shrink-0">16:00 - 20:00</span>
                              <div
                                class="mx-2 my-1 w-px bg-slate-200 dark:bg-navy-500"
                              ></div>

                              <span class="line-clamp-1">UI/UX Conf</span>
                            </div>
                          </div>
                        </div>
                        <div class="flex items-center space-x-3">
                          <div
                            class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-warning/10 dark:bg-warning/15"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="h-5 w-5 text-warning"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              stroke-width="1.5"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                              />
                            </svg>
                          </div>
                          <div>
                            <p
                              class="font-medium text-slate-600 dark:text-navy-100"
                            >
                              THU, May 11, 2021
                            </p>
                            <div
                              class="mt-1 flex text-xs text-slate-400 dark:text-navy-300"
                            >
                              <span class="shrink-0">10:00 - 11:30</span>
                              <div
                                class="mx-2 my-1 w-px bg-slate-200 dark:bg-navy-500"
                              ></div>
                              <span class="line-clamp-1"
                                >Interview, Konnor Guzman
                              </span>
                            </div>
                          </div>
                        </div>
                        <div class="flex items-center space-x-3">
                          <div
                            class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-info/10 dark:bg-info/15"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="h-5 w-5 text-info"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              stroke-width="1.5"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                              />
                            </svg>
                          </div>
                          <div>
                            <p
                              class="font-medium text-slate-600 dark:text-navy-100"
                            >
                              Mon, Jul 16, 2021
                            </p>
                            <div
                              class="mt-1 flex text-xs text-slate-400 dark:text-navy-300"
                            >
                              <span class="shrink-0">06:00 - 16:00</span>
                              <div
                                class="mx-2 my-1 w-px bg-slate-200 dark:bg-navy-500"
                              ></div>

                              <span class="line-clamp-1">Laravel Conf</span>
                            </div>
                          </div>
                        </div>
                        <div class="flex items-center space-x-3">
                          <div
                            class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-warning/10 dark:bg-warning/15"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="h-5 w-5 text-warning"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              stroke-width="1.5"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                              />
                            </svg>
                          </div>
                          <div>
                            <p
                              class="font-medium text-slate-600 dark:text-navy-100"
                            >
                              Wed, Jun 16, 2021
                            </p>
                            <div
                              class="mt-1 flex text-xs text-slate-400 dark:text-navy-300"
                            >
                              <span class="shrink-0">15:30 - 11:30</span>
                              <div
                                class="mx-2 my-1 w-px bg-slate-200 dark:bg-navy-500"
                              ></div>
                              <span class="line-clamp-1"
                                >Interview, Jonh Doe
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        id="notification-logs"
                        class="tab-content tab-shift-left is-scrollbar-hidden overflow-y-auto px-4"
                      >
                        <div class="mt-8 pb-8 text-center">
                          <img
                            class="mx-auto w-36"
                            src="images/illustrations/empty-girl-box.svg"
                            alt="image"
                          />
                          <div class="mt-5">
                            <p
                              class="text-base font-semibold text-slate-700 dark:text-navy-100"
                            >
                              No any logs
                            </p>
                            <p class="text-slate-400 dark:text-navy-300">
                              There are no unread logs yet
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Right Sidebar Toggle -->
              <button
                @click="($event) => (rightSideBarToggle = true)"
                data-toggle="drawer"
                data-target="#right-sidebar"
                class="flex items-center justify-center h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5.5 w-5.5 text-slate-500 dark:text-navy-100"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <!-- main content -->
      <div id="main-container2" class="ml-36 flex flex-col">
        <div class="ml-8 mt-16 w-screen kanban-app">
          <div
            class="has-min-sidebar -mt-1 -ml-8 flex items-center justify-between space-x-2 px-[var(--margin-x)] py-5 transition-all duration-[.25s] bg-white <!-- dark:bg-navy-800 --> print:hidden"
          >
            <div class="flex items-center space-x-1">
              <h3
                class="text-lg font-medium text-slate-700 line-clamp-1 dark:text-navy-50"
              >
                Banking App
              </h3>
              <button
                class="flex items-center justify-center h-8 w-8 rounded-full p-0 font-medium text-error hover:bg-error/20 focus:bg-error/20 active:bg-error/25 sm:inline-flex"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4.5 w-4.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </button>
            </div>
            <label class="relative hidden w-full max-w-[16rem] sm:flex">
              <input
                class="form-input peer h-8 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 text-xs+ placeholder:text-slate-400/70 hover:z-10 hover:border-slate-400 focus:z-10 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                placeholder="Search on boards"
                type="text"
              />
              <span
                class="pointer-events-none absolute flex h-full w-9 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 transition-colors duration-200"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M3.316 13.781l.73-.171-.73.171zm0-5.457l.73.171-.73-.171zm15.473 0l.73-.171-.73.171zm0 5.457l.73.171-.73-.171zm-5.008 5.008l-.171-.73.171.73zm-5.457 0l-.171.73.171-.73zm0-15.473l-.171-.73.171.73zm5.457 0l.171-.73-.171.73zM20.47 21.53a.75.75 0 101.06-1.06l-1.06 1.06zM4.046 13.61a11.198 11.198 0 010-5.115l-1.46-.342a12.698 12.698 0 000 5.8l1.46-.343zm14.013-5.115a11.196 11.196 0 010 5.115l1.46.342a12.698 12.698 0 000-5.8l-1.46.343zm-4.45 9.564a11.196 11.196 0 01-5.114 0l-.342 1.46c1.907.448 3.892.448 5.8 0l-.343-1.46zM8.496 4.046a11.198 11.198 0 015.115 0l.342-1.46a12.698 12.698 0 00-5.8 0l.343 1.46zm0 14.013a5.97 5.97 0 01-4.45-4.45l-1.46.343a7.47 7.47 0 005.568 5.568l.342-1.46zm5.457 1.46a7.47 7.47 0 005.568-5.567l-1.46-.342a5.97 5.97 0 01-4.45 4.45l.342 1.46zM13.61 4.046a5.97 5.97 0 014.45 4.45l1.46-.343a7.47 7.47 0 00-5.568-5.567l-.342 1.46zm-5.457-1.46a7.47 7.47 0 00-5.567 5.567l1.46.342a5.97 5.97 0 014.45-4.45l-.343-1.46zm8.652 15.28l3.665 3.664 1.06-1.06-3.665-3.665-1.06 1.06z"
                  />
                </svg>
              </span>
            </label>
            <div class="pr-40 mr-24 flex space-x-1">
              <div class="flex -space-x-2">
                <div class="avatar h-6 w-6 hover:z-10 sm:h-8 sm:w-8">
                  <img
                    class="rounded-full border-2 border-slate-50 dark:border-navy-900"
                    src="@/assets/images/200x200.png"
                    alt="avatar"
                  />
                </div>
                <div class="avatar h-6 w-6 hover:z-10 sm:h-8 sm:w-8">
                  <img
                    class="rounded-full border-2 border-slate-50 dark:border-navy-900"
                    src="@/assets/images/200x200.png"
                    alt="avatar"
                  />
                </div>
                <div class="avatar h-6 w-6 hover:z-10 sm:h-8 sm:w-8">
                  <img
                    class="rounded-full border-2 border-slate-50 dark:border-navy-900"
                    src="@/assets/images/200x200.png"
                    alt="avatar"
                  />
                </div>
                <div
                  class="avatar hidden h-6 w-6 hover:z-10 sm:inline-flex sm:h-8 sm:w-8"
                >
                  <img
                    class="rounded-full border-2 border-slate-50 dark:border-navy-900"
                    src="@/assets/images/200x200.png"
                    alt="avatar"
                  />
                </div>
                <div class="avatar h-6 w-6 sm:h-8 sm:w-8">
                  <div
                    class="is-initial rounded-full border-2 border-slate-50 bg-info text-xs uppercase text-white dark:border-navy-900"
                  >
                    +5
                  </div>
                </div>
              </div>
              <button
                class="flex items-center justify-center h-6 w-6 rounded-full p-0 font-medium text-info hover:bg-info/20 focus:bg-info/20 active:bg-info/25 sm:h-8 sm:w-8"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 sm:h-5 sm:w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"
                  />
                </svg>
              </button>
              <div class="my-1 w-px bg-slate-200 dark:bg-navy-500"></div>
              <div class="flex">
                <button
                  class="flex items-center justify-center h-6 w-6 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25 sm:h-8 sm:w-8"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4 sm:h-5 sm:w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="1.5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>

                <button
                  class="flex items-center justify-center h-6 w-6 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25 sm:h-8 sm:w-8"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4 sm:h-5 sm:w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="1.5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                    />
                  </svg>
                </button>

                <button
                  class="flex items-center justify-center h-6 w-6 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25 sm:inline-flex sm:h-8 sm:w-8"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5.5 w-5.5 text-primary dark:text-accent"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                </button>

                <button
                  @click="($event) => (settingDrawerToggle = true)"
                  data-toggle="drawer"
                  data-target="#kanban-setting-drawer"
                  class="flex items-center justify-center h-6 w-6 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25 sm:h-8 sm:w-8"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4 sm:h-5 sm:w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="1.5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div
            class="has-min-sidebar flex h-[calc(100vh-8.5rem)] flex-grow flex-col"
          >
            <div
              id="tasks-group"
              class="-ml-8 w-11/12 kanban-scrollbar flex w-full items-start space-x-4 overflow-x-auto overflow-y-hidden px-[var(--margin-x)] transition-all duration-[.25s] bg-white <!-- dark:bg-navy-800 --> print:hidden"
            >
              <div
                class="board-draggable relative flex max-h-full w-72 shrink-0 flex-col"
              >
                <div
                  class="board-draggable-handler flex items-center justify-between px-0.5 pb-3"
                >
                  <div class="cursor-pointer flex items-center space-x-2">
                    <div
                      class="flex h-8 w-8 items-center justify-center rounded-lg bg-info/10 text-info"
                    >
                      <i class="fa fa-spinner text-base"></i>
                    </div>
                    <h3 class="text-base text-slate-700 dark:text-navy-100">
                      In Progress
                    </h3>
                  </div>

                  <div id="tasks-progress-menu" class="h-8 w-4 inline-flex">
                    <button
                      class="popper-ref h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                        />
                      </svg>
                    </button>

                    <div class="popper-root">
                      <div
                        class="popper-box rounded-md border border-slate-150 bg-white py-1.5 font-inter dark:border-navy-500 dark:bg-navy-700"
                      >
                        <ul>
                          <li>
                            <a
                              href="#"
                              class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                              >Action</a
                            >
                          </li>
                          <li>
                            <a
                              href="#"
                              class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                              >Another Action</a
                            >
                          </li>
                          <li>
                            <a
                              href="#"
                              class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                              >Something else</a
                            >
                          </li>
                        </ul>
                        <div
                          class="my-1 h-px bg-slate-150 dark:bg-navy-500"
                        ></div>
                        <ul>
                          <li>
                            <a
                              href="#"
                              class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                              >Separated Link</a
                            >
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  id="tasks-progress-list"
                  class="is-scrollbar-hidden relative space-y-2.5 overflow-y-auto p-0.5"
                >
                  <Sortable :list="elements" :item-key="elements.id">
                    <template #item="{ element }">
                      <div class="card cursor-pointer shadow-sm draggable">
                        <div class="flex space-x-3 px-2.5 pb-2 pt-1.5">
                          <div class="w-10 shrink-0 py-1">
                            <img
                              class="w-full"
                              src="@/assets/images/illustrations/creativedesign-char.svg"
                              alt="image"
                            />
                          </div>
                          <div class="flex-1 space-y-2">
                            <p
                              class="font-medium tracking-wide text-slate-600 dark:text-navy-100"
                            >
                              Update Design
                            </p>
                            <div class="flex flex-wrap space-x-1">
                              <div
                                class="badge space-x-1 bg-slate-150 py-1 px-1.5 text-slate-800 dark:bg-navy-500 dark:text-navy-100"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  class="h-3.5 w-3.5"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                  />
                                </svg>
                                <span> Sep 12</span>
                              </div>
                              <div
                                class="badge bg-secondary/10 py-1 px-1.5 text-secondary dark:bg-secondary-light/15 dark:text-secondary-light"
                              >
                                Update
                              </div>
                              <div
                                class="badge space-x-1 bg-info/10 py-1 px-1.5 text-info dark:bg-info/15"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  class="h-3.5 w-3.5"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M5 13l4 4L19 7"
                                  />
                                </svg>
                                <span>4/5</span>
                              </div>
                            </div>
                            <div class="flex items-end justify-between pt-1">
                              <div class="flex flex-wrap -space-x-1.5">
                                <div class="avatar h-5 w-5 hover:z-10">
                                  <div
                                    class="is-initial rounded-full bg-info text-tiny+ uppercase text-white ring-1 ring-white dark:ring-navy-700"
                                  >
                                    jd
                                  </div>
                                </div>

                                <div class="avatar h-5 w-5 hover:z-10">
                                  <img
                                    class="rounded-full ring-1 ring-white dark:ring-navy-700"
                                    src="@/assets/images/200x200.png"
                                    alt="avatar"
                                  />
                                </div>

                                <div class="avatar h-5 w-5 hover:z-10">
                                  <img
                                    class="rounded-full ring-1 ring-white dark:ring-navy-700"
                                    src="@/assets/images/200x200.png"
                                    alt="avatar"
                                  />
                                </div>
                              </div>
                              <div
                                class="flex items-center space-x-2 text-xs text-slate-400 dark:text-navy-300"
                              >
                                <div class="flex items-center space-x-0.5">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-3.5 w-3.5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      stroke-width="2"
                                      d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                                    />
                                  </svg>
                                  <span>3</span>
                                </div>
                                <div class="flex items-center space-x-0.5">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-3.5 w-3.5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      stroke-width="2"
                                      d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                                    />
                                  </svg>
                                  <span>1</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="card cursor-pointer shadow-sm draggable">
                        <div class="space-y-3 px-2.5 pb-2 pt-1.5">
                          <div>
                            <div class="flex justify-between">
                              <p
                                class="font-medium tracking-wide text-slate-600 line-clamp-2 dark:text-navy-100"
                              >
                                Sync With Google Analytics
                              </p>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="-mr-1.5 h-3.5 w-3.5 shrink-0 text-error"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z"
                                  clip-rule="evenodd"
                                />
                              </svg>
                            </div>

                            <p
                              class="mt-px text-xs text-slate-400 dark:text-navy-300"
                            >
                              Google Workspace
                            </p>
                          </div>
                          <div class="flex items-end justify-between">
                            <div class="flex items-center space-x-2">
                              <div class="avatar h-6 w-6">
                                <img
                                  class="rounded-full"
                                  src="@/assets/images/200x200.png"
                                  alt="avatar"
                                />
                              </div>
                              <p>Travis F.</p>
                            </div>
                            <div
                              class="flex items-center space-x-2 text-xs text-slate-400 dark:text-navy-300"
                            >
                              <div class="flex items-center space-x-0.5">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  class="h-3.5 w-3.5"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                                  />
                                </svg>
                                <span>4</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="card cursor-pointer shadow-sm draggable">
                        <div class="space-y-2 px-2.5 pb-2 pt-1.5">
                          <div>
                            <div class="flex justify-between">
                              <p
                                class="font-medium tracking-wide text-slate-600 line-clamp-2 dark:text-navy-100"
                              >
                                Add New Products
                              </p>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="-mr-1.5 h-3.5 w-3.5 shrink-0 text-info"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z"
                                  clip-rule="evenodd"
                                />
                              </svg>
                            </div>
                          </div>
                          <div class="flex flex-wrap space-x-1">
                            <div
                              class="badge space-x-1 bg-slate-150 py-1 px-1.5 text-slate-800 dark:bg-navy-500 dark:text-navy-100"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-3.5 w-3.5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                />
                              </svg>
                              <span> May 14</span>
                            </div>
                            <div
                              class="badge bg-info/10 py-1 px-1.5 text-info dark:bg-info/15"
                            >
                              Create
                            </div>
                            <div
                              class="badge space-x-1 bg-error/10 py-1 px-1.5 text-error dark:bg-error/15"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-3.5 w-3.5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                              <span>4/5</span>
                            </div>
                          </div>
                          <div class="grid grid-cols-3 gap-2">
                            <img
                              src="@/assets/images/800x600.png"
                              class="rounded-lg object-cover object-center"
                              alt="image"
                            />
                            <img
                              src="@/assets/images/800x600.png"
                              class="rounded-lg object-cover object-center"
                              alt="image"
                            />
                            <img
                              src="@/assets/images/800x600.png"
                              class="rounded-lg object-cover object-center"
                              alt="image"
                            />
                          </div>
                          <div class="flex items-end justify-between pt-1">
                            <div class="flex flex-wrap -space-x-1.5">
                              <div class="avatar h-5 w-5 hover:z-10">
                                <div
                                  class="is-initial rounded-full bg-info text-tiny+ uppercase text-white ring-1 ring-white dark:ring-navy-700"
                                >
                                  jd
                                </div>
                              </div>

                              <div class="avatar h-5 w-5 hover:z-10">
                                <img
                                  class="rounded-full ring-1 ring-white dark:ring-navy-700"
                                  src="@/assets/images/200x200.png"
                                  alt="avatar"
                                />
                              </div>

                              <div class="avatar h-5 w-5 hover:z-10">
                                <img
                                  class="rounded-full ring-1 ring-white dark:ring-navy-700"
                                  src="@/assets/images/200x200.png"
                                  alt="avatar"
                                />
                              </div>
                            </div>
                            <div
                              class="flex items-center space-x-2 text-xs text-slate-400 dark:text-navy-300"
                            >
                              <div class="flex items-center space-x-0.5">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  class="h-3.5 w-3.5"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                                  />
                                </svg>
                                <span>3</span>
                              </div>
                              <div class="flex items-center space-x-0.5">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  class="h-3.5 w-3.5"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                                  />
                                </svg>
                                <span>1</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="card cursor-pointer shadow-sm draggable">
                        <div
                          class="space-y-3 rounded-lg bg-success/10 px-2.5 pb-2 pt-1.5"
                        >
                          <div>
                            <div class="flex justify-between">
                              <p
                                class="font-medium tracking-wide text-success line-clamp-2"
                              >
                                Improve animation loader
                              </p>
                            </div>
                          </div>
                          <div class="flex flex-wrap space-x-1">
                            <div
                              class="badge space-x-1 bg-success/10 py-1 px-1.5 text-success dark:bg-success/15"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-3.5 w-3.5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                />
                              </svg>
                              <span> Sep 12</span>
                            </div>
                            <div
                              class="badge bg-warning/10 py-1 px-1.5 text-warning dark:bg-warning/15"
                            >
                              Performance
                            </div>
                          </div>
                          <div class="flex items-end justify-between">
                            <div class="flex items-center space-x-2">
                              <div class="avatar h-6 w-6">
                                <img
                                  class="rounded-full"
                                  src="@/assets/images/200x200.png"
                                  alt="avatar"
                                />
                              </div>
                              <p>Travis F.</p>
                            </div>

                            <div
                              class="flex items-center space-x-2 text-xs text-slate-400 dark:text-navy-300"
                            >
                              <div class="flex items-center space-x-0.5">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  class="h-3.5 w-3.5"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                                  />
                                </svg>
                                <span>4</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </template>
                  </Sortable>
                </div>
                <div class="flex justify-center py-2">
                  <button
                    class="flex items-center justify-center space-x-2 font-medium text-slate-600 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="1.5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                    <span>New Task</span>
                  </button>
                </div>
              </div>

              <div
                class="board-draggable relative flex max-h-full w-72 shrink-0 flex-col"
              >
                <div
                  class="board-draggable-handler flex items-center justify-between px-0.5 pb-3"
                >
                  <div class="cursor-pointer flex items-center space-x-2">
                    <div
                      class="flex h-8 w-8 items-center justify-center rounded-lg bg-warning/10 text-warning"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <h3 class="text-base text-slate-700 dark:text-navy-100">
                      Pending
                    </h3>
                  </div>

                  <div id=" tasks-pending-menu" class="h-8 w-4 inline-flex">
                    <button
                      class="popper-ref h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                        />
                      </svg>
                    </button>

                    <div class="popper-root">
                      <div
                        class="popper-box rounded-md border border-slate-150 bg-white py-1.5 font-inter dark:border-navy-500 dark:bg-navy-700"
                      >
                        <ul>
                          <li>
                            <a
                              href="#"
                              class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                              >Action</a
                            >
                          </li>
                          <li>
                            <a
                              href="#"
                              class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                              >Another Action</a
                            >
                          </li>
                          <li>
                            <a
                              href="#"
                              class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                              >Something else</a
                            >
                          </li>
                        </ul>
                        <div
                          class="my-1 h-px bg-slate-150 dark:bg-navy-500"
                        ></div>
                        <ul>
                          <li>
                            <a
                              href="#"
                              class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                              >Separated Link</a
                            >
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  id="tasks-pending-list"
                  class="is-scrollbar-hidden relative space-y-2.5 overflow-y-auto p-0.5"
                >
                  <Sortable :list="elements" :item-key="elements.id">
                    <template #item="{ element }">
                      <div class="card cursor-pointer shadow-sm draggable">
                        <div class="px-2.5 pb-2 pt-1.5">
                          <div>
                            <div class="flex justify-between">
                              <p
                                class="font-medium tracking-wide text-slate-600 line-clamp-2 dark:text-navy-100"
                              >
                                Create Students Module
                              </p>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="-mr-1.5 h-3.5 w-3.5 shrink-0 text-secondary dark:text-secondary-light"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z"
                                  clip-rule="evenodd"
                                />
                              </svg>
                            </div>

                            <p
                              class="mt-px text-xs text-slate-400 dark:text-navy-300"
                            >
                              Online LMS
                            </p>
                          </div>

                          <div class="mt-2 flex flex-wrap space-x-1">
                            <div
                              class="badge space-x-1 bg-slate-150 py-1 px-1.5 text-slate-800 dark:bg-navy-500 dark:text-navy-100"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-3.5 w-3.5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                />
                              </svg>
                              <span> Jun 05</span>
                            </div>
                          </div>

                          <div class="mt-3 flex items-end justify-between">
                            <div class="flex items-center space-x-2">
                              <div class="avatar h-6 w-6">
                                <img
                                  class="rounded-full"
                                  src="@/assets/images/200x200.png"
                                  alt="avatar"
                                />
                              </div>
                              <p>Katrina W.</p>
                            </div>
                            <div
                              class="flex items-center space-x-2 text-xs text-slate-400 dark:text-navy-300"
                            >
                              <div class="flex items-center space-x-0.5">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  class="h-3.5 w-3.5"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                                  />
                                </svg>
                                <span>2</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="card cursor-pointer shadow-sm draggable">
                        <div
                          class="rounded-lg bg-warning/10 px-2.5 pb-2 pt-1.5"
                        >
                          <div>
                            <div class="flex justify-between">
                              <p
                                class="font-medium tracking-wide text-warning line-clamp-2"
                              >
                                Pay App Wages [1200$]
                              </p>
                            </div>
                          </div>
                          <div class="mt-2 flex flex-wrap space-x-1">
                            <div
                              class="badge space-x-1 bg-warning/10 py-1 px-1.5 text-warning dark:bg-warning/15"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-3.5 w-3.5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                />
                              </svg>
                              <span> Sep 12</span>
                            </div>
                            <div
                              class="badge bg-secondary/10 py-1 px-1.5 text-secondary dark:bg-secondary/15 dark:text-secondary-light"
                            >
                              Performance
                            </div>
                          </div>
                          <div class="mt-3 flex items-end justify-between">
                            <div class="flex flex-wrap -space-x-1.5">
                              <div class="avatar h-5 w-5 hover:z-10">
                                <div
                                  class="is-initial rounded-full bg-success text-tiny+ uppercase text-white ring-1 ring-white dark:ring-navy-700"
                                >
                                  jd
                                </div>
                              </div>

                              <div class="avatar h-5 w-5 hover:z-10">
                                <img
                                  class="rounded-full ring-1 ring-white dark:ring-navy-700"
                                  src="@/assets/images/200x200.png"
                                  alt="avatar"
                                />
                              </div>

                              <div class="avatar h-5 w-5 hover:z-10">
                                <img
                                  class="rounded-full ring-1 ring-white dark:ring-navy-700"
                                  src="@/assets/images/200x200.png"
                                  alt="avatar"
                                />
                              </div>
                            </div>
                            <div
                              class="flex items-center space-x-2 text-xs text-slate-400 dark:text-navy-300"
                            >
                              <div class="flex items-center space-x-0.5">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  class="h-3.5 w-3.5"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                                  />
                                </svg>
                                <span>2</span>
                              </div>
                              <div class="flex items-center space-x-0.5">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  class="h-3.5 w-3.5"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                                  />
                                </svg>
                                <span>4</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="card cursor-pointer shadow-sm draggable">
                        <div class="flex space-x-3 px-2.5 pb-2 pt-1.5">
                          <div class="w-10 shrink-0 py-1">
                            <img
                              class="w-full"
                              src="@/assets/images/illustrations/invite-user.svg"
                              alt="image"
                            />
                          </div>
                          <div class="flex-1 space-y-2">
                            <div>
                              <div class="flex justify-between">
                                <p
                                  class="font-medium tracking-wide text-slate-600 line-clamp-2 dark:text-navy-100"
                                >
                                  Invite New Users
                                </p>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  class="-mr-1.5 h-3.5 w-3.5 shrink-0 text-success"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z"
                                    clip-rule="evenodd"
                                  />
                                </svg>
                              </div>

                              <p
                                class="mt-px text-xs text-slate-400 dark:text-navy-300"
                              >
                                Invite new users to chatroom
                              </p>
                            </div>
                            <div class="flex flex-wrap space-x-1">
                              <div
                                class="badge space-x-1 bg-slate-150 py-1 px-1.5 text-slate-800 dark:bg-navy-500 dark:text-navy-100"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  class="h-3.5 w-3.5"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                  />
                                </svg>
                                <span> Daily</span>
                              </div>

                              <div
                                class="badge space-x-1 bg-warning/10 py-1 px-1.5 text-warning dark:bg-warning/15"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  class="h-3.5 w-3.5"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M5 13l4 4L19 7"
                                  />
                                </svg>
                                <span>7/10</span>
                              </div>
                            </div>
                            <div class="flex items-end justify-between pt-1">
                              <div class="flex items-center space-x-2">
                                <div class="avatar h-6 w-6">
                                  <img
                                    class="rounded-full"
                                    src="@/assets/images/200x200.png"
                                    alt="avatar"
                                  />
                                </div>
                                <p>Raul B.</p>
                              </div>

                              <div
                                class="flex items-center space-x-2 text-xs text-slate-400 dark:text-navy-300"
                              >
                                <div class="flex items-center space-x-0.5">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-3.5 w-3.5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      stroke-width="2"
                                      d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                                    />
                                  </svg>
                                  <span>2</span>
                                </div>
                                <div class="flex items-center space-x-0.5">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-3.5 w-3.5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      stroke-width="2"
                                      d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                                    />
                                  </svg>
                                  <span>4</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="card cursor-pointer shadow-sm draggable">
                        <div class="px-2.5 pb-2 pt-1.5">
                          <div>
                            <div class="flex justify-between">
                              <p
                                class="font-medium tracking-wide text-slate-600 line-clamp-2 dark:text-navy-100"
                              >
                                Daily New Post
                              </p>
                            </div>
                          </div>

                          <div class="mt-2 flex flex-wrap space-x-1">
                            <div
                              class="badge space-x-1 bg-slate-150 py-1 px-1.5 text-slate-800 dark:bg-navy-500 dark:text-navy-100"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-3.5 w-3.5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                />
                              </svg>
                              <span> Apr 12</span>
                            </div>
                            <div
                              class="badge space-x-1 bg-info/10 py-1 px-1.5 text-info dark:bg-info/15"
                            >
                              <span>Blog</span>
                            </div>
                          </div>

                          <div class="mt-3 flex flex-col space-y-2">
                            <label class="inline-flex items-center space-x-2">
                              <input
                                checked
                                class="form-checkbox is-basic h-5 w-5 rounded-full border-slate-400/70 checked:border-primary checked:bg-primary hover:border-primary focus:border-primary dark:border-navy-400 dark:checked:border-accent dark:checked:bg-accent dark:hover:border-accent dark:focus:border-accent"
                                type="checkbox"
                              />
                              <span>Write Article</span>
                            </label>
                            <label class="inline-flex items-center space-x-2">
                              <input
                                class="form-checkbox is-basic h-5 w-5 rounded-full border-slate-400/70 checked:border-primary checked:bg-primary hover:border-primary focus:border-primary dark:border-navy-400 dark:checked:border-accent dark:checked:bg-accent dark:hover:border-accent dark:focus:border-accent"
                                type="checkbox"
                              />
                              <span>Review</span>
                            </label>
                            <label class="inline-flex items-center space-x-2">
                              <input
                                class="form-checkbox is-basic h-5 w-5 rounded-full border-slate-400/70 checked:border-primary checked:bg-primary hover:border-primary focus:border-primary dark:border-navy-400 dark:checked:border-accent dark:checked:bg-accent dark:hover:border-accent dark:focus:border-accent"
                                type="checkbox"
                              />
                              <span>Publish</span>
                            </label>
                          </div>

                          <div class="mt-3 flex items-end justify-between">
                            <div class="flex flex-wrap -space-x-1.5">
                              <div class="avatar h-5 w-5 hover:z-10">
                                <div
                                  class="is-initial rounded-full bg-success text-tiny+ uppercase text-white ring-1 ring-white dark:ring-navy-700"
                                >
                                  jd
                                </div>
                              </div>

                              <div class="avatar h-5 w-5 hover:z-10">
                                <img
                                  class="rounded-full ring-1 ring-white dark:ring-navy-700"
                                  src="@/assets/images/200x200.png"
                                  alt="avatar"
                                  draggable="false"
                                />
                              </div>

                              <div class="avatar h-5 w-5 hover:z-10">
                                <img
                                  class="rounded-full ring-1 ring-white dark:ring-navy-700"
                                  src="@/assets/images/200x200.png"
                                  alt="avatar"
                                  draggable="false"
                                />
                              </div>
                            </div>
                            <div
                              class="flex items-center space-x-2 text-xs text-slate-400 dark:text-navy-300"
                            >
                              <div class="flex items-center space-x-0.5">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  class="h-3.5 w-3.5"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                                  />
                                </svg>
                                <span>2</span>
                              </div>
                              <div class="flex items-center space-x-0.5">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  class="h-3.5 w-3.5"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                                  />
                                </svg>
                                <span>4</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </template>
                  </Sortable>
                </div>
                <div class="flex justify-center py-2">
                  <button
                    class="flex items-center justify-center space-x-2 font-medium text-slate-600 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="1.5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                    <span>New Task</span>
                  </button>
                </div>
              </div>

              <div
                class="board-draggable relative flex max-h-full w-72 shrink-0 flex-col"
              >
                <div
                  class="board-draggable-handler flex items-center justify-between px-0.5 pb-3"
                >
                  <div class="cursor-pointer flex items-center space-x-2">
                    <div
                      class="flex h-8 w-8 items-center justify-center rounded-lg bg-secondary/10 text-secondary dark:bg-secondary-light/15 dark:text-secondary-light"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.879-4.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z"
                        />
                      </svg>
                    </div>
                    <h3 class="text-base text-slate-700 dark:text-navy-100">
                      In Review
                    </h3>
                  </div>

                  <div id="tasks-review-menu" class="h-8 w-4 inline-flex">
                    <button
                      class="popper-ref h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                        />
                      </svg>
                    </button>

                    <div class="popper-root">
                      <div
                        class="popper-box rounded-md border border-slate-150 bg-white py-1.5 font-inter dark:border-navy-500 dark:bg-navy-700"
                      >
                        <ul>
                          <li>
                            <a
                              href="#"
                              class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                              >Action</a
                            >
                          </li>
                          <li>
                            <a
                              href="#"
                              class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                              >Another Action</a
                            >
                          </li>
                          <li>
                            <a
                              href="#"
                              class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                              >Something else</a
                            >
                          </li>
                        </ul>
                        <div
                          class="my-1 h-px bg-slate-150 dark:bg-navy-500"
                        ></div>
                        <ul>
                          <li>
                            <a
                              href="#"
                              class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                              >Separated Link</a
                            >
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  id="tasks-review-list"
                  class="is-scrollbar-hidden relative space-y-2.5 overflow-y-auto p-0.5"
                >
                  <Sortable :list="elements" :item-key="elements.id">
                    <template #item="{ element }">
                      <div class="card cursor-pointer shadow-sm draggable">
                        <div class="rounded-lg bg-info/10 px-2.5 pb-2 pt-1.5">
                          <div>
                            <div class="flex justify-between">
                              <p
                                class="font-medium tracking-wide text-info line-clamp-2"
                              >
                                Join To Discussion
                              </p>
                            </div>
                          </div>
                          <div class="mt-2 flex flex-wrap space-x-1">
                            <div
                              class="badge space-x-1 bg-info/10 py-1 px-1.5 text-info dark:bg-info/15"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-3.5 w-3.5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                />
                              </svg>
                              <span> Jun 12</span>
                            </div>
                            <div
                              class="badge bg-primary/10 py-1 px-1.5 text-primary dark:bg-accent-light/15 dark:text-accent-light"
                            >
                              Support
                            </div>
                          </div>
                          <div class="mt-3 flex items-end justify-between">
                            <div class="flex flex-wrap -space-x-1.5">
                              <div class="avatar h-5 w-5 hover:z-10">
                                <div
                                  class="is-initial rounded-full bg-secondary text-tiny+ uppercase text-white ring-1 ring-white dark:bg-secondary-light dark:ring-navy-700"
                                >
                                  jd
                                </div>
                              </div>

                              <div class="avatar h-5 w-5 hover:z-10">
                                <img
                                  class="rounded-full ring-1 ring-white dark:ring-navy-700"
                                  src="@/assets/images/200x200.png"
                                  alt="avatar"
                                />
                              </div>

                              <div class="avatar h-5 w-5 hover:z-10">
                                <img
                                  class="rounded-full ring-1 ring-white dark:ring-navy-700"
                                  src="@/assets/images/200x200.png"
                                  alt="avatar"
                                />
                              </div>
                            </div>
                            <div
                              class="flex items-center space-x-2 text-xs text-slate-400 dark:text-navy-300"
                            >
                              <div class="flex items-center space-x-0.5">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  class="h-3.5 w-3.5"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                                  />
                                </svg>
                                <span>6</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="card cursor-pointer shadow-sm draggable">
                        <div class="px-2.5 pb-2 pt-1.5">
                          <div>
                            <div class="flex justify-between">
                              <p
                                class="font-medium tracking-wide text-slate-600 line-clamp-2 dark:text-navy-100"
                              >
                                Daily New Post
                              </p>
                            </div>
                          </div>

                          <div class="mt-2 flex flex-wrap space-x-1">
                            <div
                              class="badge space-x-1 bg-slate-150 py-1 px-1.5 text-slate-800 dark:bg-navy-500 dark:text-navy-100"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-3.5 w-3.5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                />
                              </svg>
                              <span> Apr 12</span>
                            </div>
                            <div
                              class="badge space-x-1 bg-info/10 py-1 px-1.5 text-info dark:bg-info/15"
                            >
                              <span>Blog</span>
                            </div>
                          </div>

                          <div class="mt-3 flex flex-col space-y-2">
                            <label class="inline-flex items-center space-x-2">
                              <input
                                checked
                                class="form-checkbox is-basic h-5 w-5 rounded-full border-slate-400/70 checked:border-primary checked:bg-primary hover:border-primary focus:border-primary dark:border-navy-400 dark:checked:border-accent dark:checked:bg-accent dark:hover:border-accent dark:focus:border-accent"
                                type="checkbox"
                              />
                              <span>Review Article</span>
                            </label>
                            <label class="inline-flex items-center space-x-2">
                              <input
                                class="form-checkbox is-basic h-5 w-5 rounded-full border-slate-400/70 checked:border-primary checked:bg-primary hover:border-primary focus:border-primary dark:border-navy-400 dark:checked:border-accent dark:checked:bg-accent dark:hover:border-accent dark:focus:border-accent"
                                type="checkbox"
                              />
                              <span>Article Correction</span>
                            </label>
                            <label class="inline-flex items-center space-x-2">
                              <input
                                class="form-checkbox is-basic h-5 w-5 rounded-full border-slate-400/70 checked:border-primary checked:bg-primary hover:border-primary focus:border-primary dark:border-navy-400 dark:checked:border-accent dark:checked:bg-accent dark:hover:border-accent dark:focus:border-accent"
                                type="checkbox"
                              />
                              <span>Allow Publication</span>
                            </label>
                          </div>

                          <div class="mt-3 flex items-end justify-between">
                            <div class="flex items-center space-x-2">
                              <div class="avatar h-6 w-6">
                                <img
                                  class="rounded-full"
                                  src="@/assets/images/200x200.png"
                                  alt="avatar"
                                />
                              </div>
                              <p>Robin S.</p>
                            </div>
                            <div
                              class="flex items-center space-x-2 text-xs text-slate-400 dark:text-navy-300"
                            >
                              <div class="flex items-center space-x-0.5">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  class="h-3.5 w-3.5"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                                  />
                                </svg>
                                <span>2</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="card cursor-pointer shadow-sm draggable">
                        <div class="px-2.5 pb-2 pt-1.5">
                          <div>
                            <div class="flex justify-between">
                              <p
                                class="font-medium tracking-wide text-slate-600 line-clamp-2 dark:text-navy-100"
                              >
                                Convert Figma To HTML
                              </p>
                            </div>
                          </div>

                          <div class="mt-2 flex flex-wrap space-x-1">
                            <div
                              class="badge space-x-1 bg-slate-150 py-1 px-1.5 text-slate-800 dark:bg-navy-500 dark:text-navy-100"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-3.5 w-3.5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                />
                              </svg>
                              <span> May 25</span>
                            </div>
                            <div
                              class="badge space-x-1 bg-success/10 py-1 px-1.5 text-success dark:bg-success/15"
                            >
                              <span>Design</span>
                            </div>
                          </div>

                          <div class="p-1">
                            <img
                              src="@/assets/images/illustrations/dashboard-meet-dark.svg"
                              alt="image"
                            />
                          </div>

                          <div class="mt-3 flex items-end justify-between">
                            <div class="flex items-center space-x-2">
                              <div class="avatar h-6 w-6">
                                <img
                                  class="rounded-full"
                                  src="@/assets/images/200x200.png"
                                  alt="avatar"
                                />
                              </div>
                              <p>Samantha S.</p>
                            </div>
                            <div
                              class="flex items-center space-x-2 text-xs text-slate-400 dark:text-navy-300"
                            >
                              <div class="flex items-center space-x-0.5">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  class="h-3.5 w-3.5"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                                  />
                                </svg>
                                <span>2</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </template>
                  </Sortable>
                </div>
                <div class="flex justify-center py-2">
                  <button
                    class="flex items-center justify-center space-x-2 font-medium text-slate-600 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="1.5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                    <span>New Task</span>
                  </button>
                </div>
              </div>

              <div
                class="board-draggable relative flex max-h-full w-72 shrink-0 flex-col"
              >
                <div
                  class="board-draggable-handler flex items-center justify-between px-0.5 pb-3"
                >
                  <div class="cursor-pointer flex items-center space-x-2">
                    <div
                      class="flex h-8 w-8 items-center justify-center rounded-lg bg-success/10 text-success dark:bg-success/15"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="1.5"
                      >
                        <path
                          d="M12.5293 18L20.9999 8.40002"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M3 13.2L7.23529 18L17.8235 6"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <h3 class="text-base text-slate-700 dark:text-navy-100">
                      Success
                    </h3>
                  </div>

                  <div id="tasks-success-menu" class="h-8 w-4 inline-flex">
                    <button
                      class="popper-ref h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                        />
                      </svg>
                    </button>

                    <div class="popper-root">
                      <div
                        class="popper-box rounded-md border border-slate-150 bg-white py-1.5 font-inter dark:border-navy-500 dark:bg-navy-700"
                      >
                        <ul>
                          <li>
                            <a
                              href="#"
                              class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                              >Action</a
                            >
                          </li>
                          <li>
                            <a
                              href="#"
                              class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                              >Another Action</a
                            >
                          </li>
                          <li>
                            <a
                              href="#"
                              class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                              >Something else</a
                            >
                          </li>
                        </ul>
                        <div
                          class="my-1 h-px bg-slate-150 dark:bg-navy-500"
                        ></div>
                        <ul>
                          <li>
                            <a
                              href="#"
                              class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                              >Separated Link</a
                            >
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  id="tasks-success-list"
                  class="is-scrollbar-hidden relative space-y-2.5 overflow-y-auto p-0.5"
                >
                  <Sortable :list="elements" :item-key="elements.id">
                    <template #item="{ element }">
                      <div class="card cursor-pointer shadow-sm draggable">
                        <div class="px-2.5 pb-2 pt-1.5">
                          <div>
                            <div class="flex justify-between">
                              <p
                                class="font-medium tracking-wide text-slate-600 line-clamp-2 dark:text-navy-100"
                              >
                                Tracking Bugs
                              </p>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="-mr-1.5 h-3.5 w-3.5 shrink-0 text-warning"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z"
                                  clip-rule="evenodd"
                                />
                              </svg>
                            </div>

                            <p
                              class="mt-px text-xs text-slate-400 dark:text-navy-300"
                            >
                              Tracking app bugs
                            </p>
                          </div>

                          <div class="mt-2 flex flex-wrap space-x-1">
                            <div
                              class="badge space-x-1 bg-slate-150 py-1 px-1.5 text-slate-800 dark:bg-navy-500 dark:text-navy-100"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-3.5 w-3.5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                />
                              </svg>
                              <span> Jun 05</span>
                            </div>
                          </div>

                          <div class="mt-3 flex items-end justify-between">
                            <div class="flex items-center space-x-2">
                              <div class="avatar h-6 w-6">
                                <img
                                  class="rounded-full"
                                  src="@/assets/images/200x200.png"
                                  alt="avatar"
                                />
                              </div>
                              <p>Lance T.</p>
                            </div>
                            <div
                              class="flex items-center space-x-2 text-xs text-slate-400 dark:text-navy-300"
                            >
                              <div class="flex items-center space-x-0.5">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  class="h-3.5 w-3.5"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                                  />
                                </svg>
                                <span>2</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="card cursor-pointer shadow-sm draggable">
                        <div
                          class="flex space-x-3 rounded-lg bg-error/10 px-2.5 pb-2 pt-1.5"
                        >
                          <div class="w-10 shrink-0 py-1">
                            <img
                              class="w-full"
                              src="@/assets/images/illustrations/upload-cloud.svg"
                              alt="image"
                            />
                          </div>
                          <div class="flex-1">
                            <div>
                              <div class="flex justify-between">
                                <p
                                  class="font-medium tracking-wide text-error line-clamp-2"
                                >
                                  Backup System
                                </p>
                              </div>
                              <p
                                class="mt-px text-xs text-slate-400 dark:text-navy-300"
                              >
                                Backup Chats, videos and all datas
                              </p>
                            </div>
                            <div class="mt-2 flex flex-wrap space-x-1">
                              <div
                                class="badge space-x-1 bg-error/10 py-1 px-1.5 text-error dark:bg-error/15"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  class="h-3.5 w-3.5"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                  />
                                </svg>
                                <span> Jun 17</span>
                              </div>
                              <div
                                class="badge bg-warning/10 py-1 px-1.5 text-warning dark:bg-warning/15"
                              >
                                Backup
                              </div>
                            </div>
                            <div class="mt-3 flex items-end justify-between">
                              <div class="flex flex-wrap -space-x-1.5">
                                <div class="avatar h-5 w-5 hover:z-10">
                                  <div
                                    class="is-initial rounded-full bg-secondary text-tiny+ uppercase text-white ring-1 ring-white dark:bg-secondary-light dark:ring-navy-700"
                                  >
                                    jd
                                  </div>
                                </div>

                                <div class="avatar h-5 w-5 hover:z-10">
                                  <img
                                    class="rounded-full ring-1 ring-white dark:ring-navy-700"
                                    src="@/assets/images/200x200.png"
                                    alt="avatar"
                                  />
                                </div>

                                <div class="avatar h-5 w-5 hover:z-10">
                                  <img
                                    class="rounded-full ring-1 ring-white dark:ring-navy-700"
                                    src="@/assets/images/200x200.png"
                                    alt="avatar"
                                  />
                                </div>
                              </div>
                              <div
                                class="flex items-center space-x-2 text-xs text-slate-400 dark:text-navy-300"
                              >
                                <div class="flex items-center space-x-0.5">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-3.5 w-3.5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      stroke-width="2"
                                      d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                                    />
                                  </svg>
                                  <span>6</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </template>
                  </Sortable>
                </div>
                <div class="flex justify-center py-2">
                  <button
                    class="flex items-center justify-center space-x-2 font-medium text-slate-600 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="1.5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                    <span>New Task</span>
                  </button>
                </div>
              </div>

              <div class="mr-24 w-72 shrink-0">
                <button
                  class="h-10 rounded-lg w-full bg-slate-150 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
                >
                  New Board
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <KanbanSettingDrawer
      v-show="settingDrawerToggle"
      @close="($event) => (settingDrawerToggle = false)"
    />

    <KanbanRightSidebar
      v-show="rightSideBarToggle"
      @closeRightSideBar="($event) => (rightSideBarToggle = false)"
    />
     
  </div>
</template>

<script setup>
import { ref } from "vue";
import { computed } from "vue";
import { Sortable } from "sortablejs-vue3";
import { useDark, useToggle } from "@vueuse/core";

import KanbanSettingDrawer from "./Kanban-setting-drawer.vue";
import KanbanRightSidebar from "./Kanban-right-sidebar.vue";
import KanbanSidebarPannel from "./Kanban-sidebar-panel.vue";
import KanbanMinimizedSidebarPannel from "./Kanban-minimized-sidebar-panel.vue";
import MainSidebar from "./MainSidebar.vue";
// import KanbanSettingDrawer from "@/components/Apps/Kanban/Kanban-setting-drawer.vue";
// import KanbanRightSidebar from "@/components/Apps/Kanban/Kanban-right-sidebar.vue";
// import KanbanSidebarPannel from "@/components/Apps/Kanban/Kanban-sidebar-panel.vue";
// import MainSidebar from "@/components/MainSidebar.vue";
// import KanbanMinimizedSidebarPannel from "@/components/Apps/Kanban/Kanban-minimized-sidebar-panel.vue";

//drag and drop
const elements = computed(() => {
  return [{ id: 1, name: "One" }];
});
//sidebars
const settingDrawerToggle = ref(false);
const rightSideBarToggle = ref(false);
const minimizedSidebarPannelToggle = ref(true);
// const sidebarPannel = ref(false);

//dark mode
const isDark = useDark({
  selector: "body",
  attribute: "class",
  valueDark: "dark",
  valueLight: "light",
  // onChanged(isDark) {
  //   if (isDark) {
  //     document.documentElement.classList.add("dark");
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //   }
  // },
});
const toggleDark = useToggle(isDark);
</script>

<style scoped>
[theme="custom-dark"] {
  background: #16171d;
  color: #fff;
}
</style>

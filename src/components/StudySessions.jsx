import React from "react";

export default function StudyDashboard() {
  return (
    <>
      <header className="fixed top-0 w-full z-50 glass-header flex justify-between items-center px-6 py-3 shadow-sm shadow-slate-200/50">
        <div className="flex items-center gap-3">
          <span className="font-headline font-extrabold text-xl tracking-tight text-slate-900">
            Study Sessions
          </span>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-6 mr-6">
            <button className="text-blue-700 font-semibold font-label text-sm">
              Dashboard
            </button>
            <button className="text-slate-500 hover:bg-slate-100 rounded-lg transition-colors px-3 py-1 font-label text-sm">
              Library
            </button>
            <button className="text-slate-500 hover:bg-slate-100 rounded-lg transition-colors px-3 py-1 font-label text-sm">
              Schedule
            </button>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-lg transition-colors">
              <span
                className="material-symbols-outlined"
                data-icon="calendar_month"
              >
                calendar_month
              </span>
            </button>
            <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-lg transition-colors">
              <span className="material-symbols-outlined" data-icon="analytics">
                analytics
              </span>
            </button>
            <img
              alt="User Profile"
              className="w-8 h-8 rounded-full border border-outline-variant/20 object-cover ml-2"
              data-alt="close-up portrait of a professional young man with a slight smile in soft studio lighting"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB85k2tG03Wn90ZFFha9TL_VlMHRL1rkbXxyI0DI7MbEMFJw7PsPnnNao_cAhsfmMD-9v4dJI42zQwzaV8pK5v-fhb6-RqZ5nbJZgQH3mORImY__1BgoQSw8y9ofBk96wTCWhzZPK5JktW8zrIFtz1eZGumwJrlWjxoCWmkV9e4lXFC_nK6hbZj4MKBYEmVA7Vk2YYDRfMCM2ebwGBw_C5yCxefxYycbfmUQGEqcAvzgsNjjgEFibJusWicEaUO0qTmXEyE8F8FrvI"
            />
          </div>
        </div>
      </header>
      <div className="flex min-h-screen pt-16">
        <aside className="hidden md:flex flex-col h-[calc(100vh-64px)] w-64 py-8 px-4 gap-6 bg-slate-50 sticky top-16">
          <div className="px-4">
            <h2 className="font-headline font-bold text-lg text-blue-700">
              Scholar Workspace
            </h2>
            <p className="text-on-surface-variant text-xs font-label">
              Deep Work Mode
            </p>
          </div>
          <nav className="flex flex-col gap-1">
            <a
              className="flex items-center gap-3 px-4 py-3 text-blue-700 font-bold border-r-2 border-blue-700 bg-blue-50/50 transition-all"
              href="#"
            >
              <span className="material-symbols-outlined" data-icon="dashboard">
                dashboard
              </span>
              <span className="text-sm font-label">Dashboard</span>
            </a>
            <a
              className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-blue-50 transition-all group"
              href="#"
            >
              <span className="material-symbols-outlined" data-icon="menu_book">
                menu_book
              </span>
              <span className="text-sm font-label">Study Plan</span>
            </a>
            <a
              className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-blue-50 transition-all group"
              href="#"
            >
              <span className="material-symbols-outlined" data-icon="folder_open">
                folder_open
              </span>
              <span className="text-sm font-label">Resources</span>
            </a>
            <a
              className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-blue-50 transition-all group"
              href="#"
            >
              <span className="material-symbols-outlined" data-icon="settings">
                settings
              </span>
              <span className="text-sm font-label">Settings</span>
            </a>
          </nav>
          <div className="mt-auto px-4 pb-4">
            <button className="w-full btn-gradient text-on-primary py-3 rounded-lg font-headline font-bold text-sm shadow-lg shadow-primary/20 active:scale-95 transition-transform">
              Start Session
            </button>
            <div className="mt-6 flex flex-col gap-1">
              <a
                className="flex items-center gap-3 px-4 py-2 text-slate-500 hover:text-blue-700 transition-colors"
                href="#"
              >
                <span
                  className="material-symbols-outlined text-sm"
                  data-icon="help"
                >
                  help
                </span>
                <span className="text-xs font-label">Help Center</span>
              </a>
            </div>
          </div>
        </aside>
        <main className="flex-1 p-6 md:p-12 max-w-7xl mx-auto w-full">
          <section className="mb-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <span className="text-primary font-bold text-xs tracking-widest font-label">
                  ACADEMIC ARCHITECT
                </span>
                <h1 className="font-headline font-extrabold text-4xl md:text-5xl text-on-surface mt-2 tracking-tight">
                  Today's Focus
                </h1>
              </div>
              <div className="bg-surface-container-lowest p-6 rounded-xl flex items-center gap-6 shadow-sm border border-outline-variant/10">
                <div className="flex flex-col">
                  <span className="text-on-surface-variant text-xs font-label">
                    Total Study Duration
                  </span>
                  <span className="font-headline font-bold text-3xl text-primary">
                    340{" "}
                    <small className="text-sm font-medium text-slate-400">
                      min
                    </small>
                  </span>
                </div>
                <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center">
                  <span
                    className="material-symbols-outlined text-primary"
                    data-icon="timer"
                  >
                    timer
                  </span>
                </div>
              </div>
            </div>
          </section>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <div className="bg-surface-container rounded-xl p-8 sticky top-28">
                <h2 className="font-headline font-bold text-xl mb-6 text-on-surface">
                  New Session
                </h2>
                <form className="space-y-5">
                  <div>
                    <label className="block label-md text-on-surface-variant font-medium mb-1 ml-1">
                      Topic Name
                    </label>
                    <input
                      className="w-full bg-surface-container-highest border-none rounded-lg focus:ring-2 focus:ring-primary/20 py-3 px-4 text-on-surface placeholder:text-slate-400 font-body text-sm"
                      placeholder="e.g. Graph Algorithms"
                      required=""
                      type="text"
                    />
                  </div>
                  <div>
                    <label className="block label-md text-on-surface-variant font-medium mb-1 ml-1">
                      Subject
                    </label>
                    <select className="w-full bg-surface-container-highest border-none rounded-lg focus:ring-2 focus:ring-primary/20 py-3 px-4 text-on-surface font-body text-sm appearance-none">
                      <option>DSA</option>
                      <option>Web Dev</option>
                      <option>DBMS</option>
                      <option>OS</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block label-md text-on-surface-variant font-medium mb-1 ml-1">
                        Duration (min)
                      </label>
                      <input
                        className="w-full bg-surface-container-highest border-none rounded-lg focus:ring-2 focus:ring-primary/20 py-3 px-4 text-on-surface font-body text-sm"
                        min="10"
                        placeholder="60"
                        type="number"
                      />
                    </div>
                    <div>
                      <label className="block label-md text-on-surface-variant font-medium mb-1 ml-1">
                        Priority
                      </label>
                      <select className="w-full bg-surface-container-highest border-none rounded-lg focus:ring-2 focus:ring-primary/20 py-3 px-4 text-on-surface font-body text-sm appearance-none">
                        <option>Low</option>
                        <option>Medium</option>
                        <option>High</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block label-md text-on-surface-variant font-medium mb-1 ml-1">
                      Session Date
                    </label>
                    <input
                      className="w-full bg-surface-container-highest border-none rounded-lg focus:ring-2 focus:ring-primary/20 py-3 px-4 text-on-surface font-body text-sm"
                      type="date"
                    />
                  </div>
                  <button
                    className="w-full btn-gradient text-on-primary py-4 rounded-lg font-headline font-bold text-sm shadow-md active:scale-[0.98] transition-all mt-4"
                    type="submit"
                  >
                    Add Session
                  </button>
                </form>
              </div>
            </div>
            <div className="lg:col-span-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-headline font-bold text-xl text-on-surface">
                  Upcoming Work
                </h2>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-surface-container-low rounded-full text-[10px] font-bold text-on-surface-variant uppercase tracking-tighter">
                    Sort by Date
                  </span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="group bg-surface-container-lowest p-6 rounded-xl flex items-center justify-between shadow-sm hover:shadow-md transition-shadow border-l-4 border-error">
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 bg-error-container rounded-lg flex items-center justify-center shrink-0">
                      <span
                        className="material-symbols-outlined text-error"
                        data-icon="account_tree"
                      >
                        account_tree
                      </span>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-headline font-bold text-lg text-on-surface leading-tight">
                          Dijkstra's Optimization
                        </h3>
                        <span className="px-2 py-0.5 bg-error-container text-error text-[10px] font-bold rounded-md uppercase tracking-wide">
                          High Priority
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-on-surface-variant text-sm font-label">
                        <span className="flex items-center gap-1">
                          <span
                            className="material-symbols-outlined text-base"
                            data-icon="school"
                          >
                            school
                          </span>{" "}
                          DSA
                        </span>
                        <span className="flex items-center gap-1">
                          <span
                            className="material-symbols-outlined text-base"
                            data-icon="schedule"
                          >
                            schedule
                          </span>{" "}
                          90 min
                        </span>
                        <span className="flex items-center gap-1">
                          <span
                            className="material-symbols-outlined text-base"
                            data-icon="calendar_today"
                          >
                            calendar_today
                          </span>{" "}
                          Oct 24, 2023
                        </span>
                      </div>
                    </div>
                  </div>
                  <button className="p-2 text-on-surface-variant hover:text-error hover:bg-error-container/50 rounded-lg transition-colors">
                    <span className="material-symbols-outlined" data-icon="delete">
                      delete
                    </span>
                  </button>
                </div>
                <div className="group bg-surface-container-lowest p-6 rounded-xl flex items-center justify-between shadow-sm hover:shadow-md transition-shadow border-l-4 border-[#934b00]">
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 bg-[#ffdcc3] rounded-lg flex items-center justify-center shrink-0">
                      <span
                        className="material-symbols-outlined text-[#934b00]"
                        data-icon="code"
                      >
                        code
                      </span>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-headline font-bold text-lg text-on-surface leading-tight">
                          Tailwind Grid Systems
                        </h3>
                        <span className="px-2 py-0.5 bg-[#ffdcc3] text-[#934b00] text-[10px] font-bold rounded-md uppercase tracking-wide">
                          Medium Priority
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-on-surface-variant text-sm font-label">
                        <span className="flex items-center gap-1">
                          <span
                            className="material-symbols-outlined text-base"
                            data-icon="school"
                          >
                            school
                          </span>{" "}
                          Web Dev
                        </span>
                        <span className="flex items-center gap-1">
                          <span
                            className="material-symbols-outlined text-base"
                            data-icon="schedule"
                          >
                            schedule
                          </span>{" "}
                          120 min
                        </span>
                        <span className="flex items-center gap-1">
                          <span
                            className="material-symbols-outlined text-base"
                            data-icon="calendar_today"
                          >
                            calendar_today
                          </span>{" "}
                          Oct 25, 2023
                        </span>
                      </div>
                    </div>
                  </div>
                  <button className="p-2 text-on-surface-variant hover:text-error hover:bg-error-container/50 rounded-lg transition-colors">
                    <span className="material-symbols-outlined" data-icon="delete">
                      delete
                    </span>
                  </button>
                </div>
                <div className="group bg-surface-container-lowest p-6 rounded-xl flex items-center justify-between shadow-sm hover:shadow-md transition-shadow border-l-4 border-tertiary">
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 bg-tertiary-fixed rounded-lg flex items-center justify-center shrink-0">
                      <span
                        className="material-symbols-outlined text-tertiary"
                        data-icon="database"
                      >
                        database
                      </span>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-headline font-bold text-lg text-on-surface leading-tight">
                          B-Tree Normalization
                        </h3>
                        <span className="px-2 py-0.5 bg-tertiary-fixed text-tertiary text-[10px] font-bold rounded-md uppercase tracking-wide">
                          Low Priority
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-on-surface-variant text-sm font-label">
                        <span className="flex items-center gap-1">
                          <span
                            className="material-symbols-outlined text-base"
                            data-icon="school"
                          >
                            school
                          </span>{" "}
                          DBMS
                        </span>
                        <span className="flex items-center gap-1">
                          <span
                            className="material-symbols-outlined text-base"
                            data-icon="schedule"
                          >
                            schedule
                          </span>{" "}
                          45 min
                        </span>
                        <span className="flex items-center gap-1">
                          <span
                            className="material-symbols-outlined text-base"
                            data-icon="calendar_today"
                          >
                            calendar_today
                          </span>{" "}
                          Oct 26, 2023
                        </span>
                      </div>
                    </div>
                  </div>
                  <button className="p-2 text-on-surface-variant hover:text-error hover:bg-error-container/50 rounded-lg transition-colors">
                    <span className="material-symbols-outlined" data-icon="delete">
                      delete
                    </span>
                  </button>
                </div>
                <div className="relative overflow-hidden group bg-surface-container-low p-8 rounded-xl border border-dashed border-outline-variant flex flex-col items-center justify-center text-center gap-3">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <span
                    className="material-symbols-outlined text-4xl text-slate-300"
                    data-icon="add_task"
                  >
                    add_task
                  </span>
                  <p className="text-slate-500 font-label text-sm">
                    Add more sessions to optimize your study velocity
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <div className="md:hidden fixed bottom-0 w-full bg-surface-container-lowest px-6 py-4 flex justify-around items-center border-t border-outline-variant/10 shadow-lg">
        <button className="flex flex-col items-center gap-1 text-primary">
          <span className="material-symbols-outlined" data-icon="dashboard">
            dashboard
          </span>
          <span className="text-[10px] font-bold">Dash</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-slate-500">
          <span className="material-symbols-outlined" data-icon="menu_book">
            menu_book
          </span>
          <span className="text-[10px] font-medium">Plan</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-slate-500">
          <span className="material-symbols-outlined" data-icon="folder_open">
            folder_open
          </span>
          <span className="text-[10px] font-medium">Files</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-slate-500">
          <span className="material-symbols-outlined" data-icon="settings">
            settings
          </span>
          <span className="text-[10px] font-medium">Set</span>
        </button>
      </div>
    </>
  );
}

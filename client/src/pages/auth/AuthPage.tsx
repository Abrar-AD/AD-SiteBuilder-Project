import { Link, useParams } from "react-router-dom"
import { AuthForm } from "@daveyplate/better-auth-ui"

export default function AuthPage() {
  const { pathname } = useParams()
  const currentView = pathname === "sign-up" ? "sign-up" : "sign-in"
  const alternateView = currentView === "sign-up" ? "sign-in" : "sign-up"
  const alternateText = currentView === "sign-up" ? "Already have an account? Sign in" : "Don’t have an account? Sign up"

  return (
    <main className="min-h-screen bg-slate-950/95 px-4 py-12 text-slate-900 dark:text-slate-100">
      <div className="mx-auto flex min-h-[calc(100vh-6rem)] w-full max-w-5xl items-center justify-center">
        <div className="w-full max-w-md rounded-[32px] border border-white/10 bg-white/95 p-6 shadow-[0_40px_120px_-40px_rgba(15,23,42,0.75)] backdrop-blur-xl dark:border-slate-700/80 dark:bg-slate-950/90">
          <div className="mb-6 space-y-2 text-center">
            <h1 className="text-3xl font-semibold tracking-tight text-slate-950 dark:text-white">
              {currentView === "sign-up" ? "Create an account" : "Welcome back"}
            </h1>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              {currentView === "sign-up"
                ? "Sign up to start building and managing your projects."
                : "Sign in to continue and manage your projects."}
            </p>
          </div>

          <AuthForm
            pathname={pathname}
            className="space-y-6"
            classNames={{
              base: "space-y-6",
              actionButton: "w-full rounded-2xl bg-slate-950 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-950/20 transition hover:bg-slate-800",
              forgotPasswordLink: "text-sm text-slate-600 transition hover:text-slate-900 dark:text-slate-300 dark:hover:text-white",
              input: "w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-950 outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-200 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:focus:border-white dark:focus:ring-slate-700",
              label: "text-sm font-medium text-slate-700 dark:text-slate-300",
              description: "text-sm text-slate-500 dark:text-slate-400",
              providerButton: "w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800",
              secondaryButton: "text-sm font-medium text-slate-600 transition hover:text-slate-900 dark:text-slate-300 dark:hover:text-white",
            }}
          />

          <div className="mt-6 text-center text-sm text-slate-600 dark:text-slate-400">
            <Link
              to={`/auth/${alternateView}`}
              className="font-medium text-slate-900 underline decoration-slate-900 underline-offset-4 transition hover:text-slate-700 dark:text-slate-100 dark:hover:text-white"
            >
              {alternateText}
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}

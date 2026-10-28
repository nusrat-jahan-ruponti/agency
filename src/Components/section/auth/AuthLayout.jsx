import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";


export default function AuthLayout({ title, subtitle, footerText, footerLink, footerTo, children }) {
  return (
    <section className="bg-[#f3f6ff] dark:bg-gray-900">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 lg:grid-cols-1">
       

        <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-8 shadow-[0_8px_30px_rgba(60,70,140,0.12)] dark:bg-gray-950 sm:p-10">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">{title}</h1>
          <p className="mt-2 text-slate-500 dark:text-slate-400">{subtitle}</p>

          <div className="mt-8 grid grid-cols-2 gap-3">
            <SocialButton icon={<FcGoogle className="h-5 w-5" />} label="Google" />
            <SocialButton icon={<FaFacebookF className="h-4 w-4 text-[#1877f2]" />} label="Facebook" />
          </div>

          <div className="my-6 flex items-center gap-4 text-sm text-slate-400">
            <span className="h-px flex-1 bg-slate-200 dark:bg-gray-800" />
            or
            <span className="h-px flex-1 bg-slate-200 dark:bg-gray-800" />
          </div>

          {children}

          <p className="mt-6 text-center text-sm text-slate-500 dark:text-slate-400">
            {footerText}{" "}
            <Link to={footerTo} className="font-medium text-indigo-500 hover:text-indigo-600">
              {footerLink}
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

const SocialButton = ({ icon, label }) => (
  <button
    type="button"
    className="flex items-center justify-center gap-2 rounded-md border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50 dark:border-gray-800 dark:text-slate-200 dark:hover:bg-gray-900"
  >
    {icon}
    {label}
  </button>
);

export const Field = ({ label, id, ...props }) => (
  <div>
    <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-200">
      {label}
    </label>
    <input
      id={id}
      className="w-full rounded-md border border-slate-200 bg-white px-4 py-2.5 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-gray-800 dark:bg-gray-900 dark:text-white"
      {...props}
    />
  </div>
);

export const SubmitButton = ({ children }) => (
  <button
    type="submit"
    className="w-full rounded-md bg-indigo-500 px-5 py-3 font-medium text-white transition hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
  >
    {children}
  </button>
);
export default function NotFound() {
    return (
        <div className="h-screen flex flex-col items-center justify-center  to-pink-500 text-white px-4">
            <h1 className="text-[8rem]  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-extrabold tracking-widest drop-shadow-lg animate-bounce">
                404
            </h1>
            <p className="mt-2 text-2xl font-semibold">Oops! Page not found</p>
            <p className="mt-2 text-lg text-slate-900 text-center max-w-md">
                The page you’re looking for doesn’t exist or has been moved.
            </p>

            <div className="mt-6 flex space-x-4">
                <a
                    href="/"
                    className="px-6 py-3  bg-violet-600 font-semibold rounded-xl shadow-md hover:bg-yellow-500 transition"
                >
                    ⬅ Go Home
                </a>
                <a
                    href="/contact"
                    className="px-6 py-3 bg-yellow-500 font-semibold rounded-xl hover:bg-violet-500 hover:text-white transition"
                >
                    Contact Support
                </a>
            </div>
        </div>
    );
}
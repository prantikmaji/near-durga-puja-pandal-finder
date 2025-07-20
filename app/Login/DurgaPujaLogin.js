import React from "react";

const DurgaPujaLogin = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50 p-4">
      <div className="w-full max-w-sm bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-orange-100 p-8">
        {/* Sacred Symbol */}
        <div className="text-center mb-6">
          <div className="inline-block p-3 bg-gradient-to-r from-orange-400 to-red-500 rounded-full mb-4">
            <svg
              className="w-8 h-8 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-orange-800 mb-1">
            শুভ দুর্গা পূজা
          </h1>
          <p className="text-sm text-orange-600 font-medium">
            Blessed Durga Puja
          </p>
        </div>

        {/* Divider */}
        <div className="flex items-center mb-6">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-orange-300 to-transparent"></div>
          <span className="px-3 text-xs text-orange-500 font-medium">
            प्रवेश
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-orange-300 to-transparent"></div>
        </div>

        {/* Google Sign-in Button */}
        <button className="w-full group relative overflow-hidden bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 ease-out">
          <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative flex items-center justify-center space-x-3">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
              <path
                fill="currentColor"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="currentColor"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="currentColor"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="currentColor"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            <span>Continue with Google</span>
          </div>
        </button>

        {/* Footer */}
        <div className="text-center mt-6">
          <p className="text-xs text-orange-500">
            জয় মা দুর্গা • Victory to Mother Durga
          </p>
        </div>
      </div>
    </div>
  );
};

export default DurgaPujaLogin;

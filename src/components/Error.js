import React from "react";
import { useRouteError, useNavigate } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  const navigate = useNavigate();

  const status = err?.status || 500;
  const message =
    err?.statusText ||
    err?.message ||
    "Something unexpected happened.";

  return (
    <div className="flex min-h-screen items-center justify-center bg-linear-135 from-cream to-[#fff1e8] p-6">
      <div className="w-full max-w-[480px] rounded-3xl border border-[#ffe0cc] bg-white px-5 py-[35px] text-center shadow-[0_15px_45px_rgba(255,82,0,0.10)] xs:px-[35px] xs:py-[45px]">
        <div className="mx-auto mb-6 flex size-[76px] items-center justify-center rounded-full border-2 border-brand bg-peach text-5xl font-bold text-brand">
          !
        </div>

        <p className="mb-3 text-xs font-bold tracking-[2px] text-brand">
          OOPS! SOMETHING WENT WRONG
        </p>

        <h1 className="text-[clamp(64px,12vw,100px)] leading-[1.1] font-extrabold text-[#252525]">
          {status}
        </h1>

        <h2 className="my-3 text-[22px] font-bold text-[#333] xs:text-[25px]">
          Page Not Found
        </h2>

        <p className="mx-auto mb-7 max-w-[340px] text-[15px] leading-[1.7] wrap-anywhere text-[#777]">
          {message}
        </p>

        <button
          className="cursor-pointer rounded-[10px] bg-brand px-[25px] py-[13px] text-[15px] font-semibold text-white shadow-[0_5px_14px_rgba(255,82,0,0.2)] transition hover:-translate-y-0.5 hover:bg-brand-dark focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-brand/30 active:translate-y-0"
          onClick={() => navigate("/")}
        >
          ← Go Back Home
        </button>

        <p className="mt-[25px] text-xs text-[#aaa]">
          Don't worry, let's get you back on track.
        </p>
      </div>
    </div>
  );
};

export default Error;

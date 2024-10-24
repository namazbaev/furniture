"use client";
import Script from "next/script";
import { Fragment, useEffect } from "react";
import Rooms from "@/components/Rooms";
import GlobalSearch from "@/components/GlobalSearch";

export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined" && window.Telegram) {
      const tg = window.Telegram.WebApp;
      tg.ready();
      tg.expand();
    }
  }, []);

  return (
    <Fragment>
      <Script src="https://telegram.org/js/telegram-web-app.js" />
      <GlobalSearch />
      <Rooms />
    </Fragment>
  );
}

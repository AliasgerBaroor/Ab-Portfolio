import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import "./global.css"
export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css?family=Inter:300,400,500,600,700",
  },
];

import "./assets/css/app.min.css"
import "./assets/css/icons.min.css"
import { Suspense } from "react";

export const scripts = () => [
  {
    src: "/assets/libs/jquery/jquery.min.js",
    async: true
  },
  {
    src: "/assets/libs/bootstrap/js/bootstrap.bundle.min.js",
    async: true
  },
  {
    src: "/assets/libs/simplebar/simplebar.min.js",
    async: true
  },
  {
    src: "/assets/libs/node-waves/waves.min.js",
    async: true
  },
  {
    src: "/assets/libs/waypoints/lib/jquery.waypoints.min.js",
    async: true
  },
  {
    src: "/assets/libs/jquery.counterup/jquery.counterup.min.js",
    async: true
  },
  {
    src: "/assets/libs/feather-icons/feather.min.js",
    async: true
  },
  {
    src: "/assets/js/app.js",
    async: true
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        {scripts().map((script) => (
          <script key={script.src} src={script.src} async={script.async}></script>
        ))}
      </head>
      <Suspense fallback={<div>Loading...</div>}>
      <body id="kt_body" className="header-fixed header-tablet-and-mobile-fixed aside-fixed">
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
      </Suspense>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

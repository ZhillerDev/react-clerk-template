import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import '@styles/index.css'
import {RouterProvider} from "react-router/dom";
import {router} from "@/routes";

import {ClerkProvider} from "@clerk/clerk-react";
import {zhCN} from '@clerk/localizations'
import {dark,} from '@clerk/themes'
import {ThemeProvider, useTheme} from "@styles/theme-provider.tsx";
import {Outlet} from "react-router";

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
const ROUTER_MODE = import.meta.env.VITE_ROUTER_MODE

if (!PUBLISHABLE_KEY) {
  throw new Error('Add your Clerk Publishable Key to the .env file')
}

createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <ThemeProvider>
        <ClerkApp/>
      </ThemeProvider>
    </StrictMode>,
)


function ClerkApp() {
  const {isDark} = useTheme()
  return (
      <>
        <ClerkProvider
            localization={zhCN}
            signInForceRedirectUrl={"/dashboard/home"}
            afterSignOutUrl={"/auth"}
            publishableKey={PUBLISHABLE_KEY}
            appearance={{
              baseTheme: isDark ? dark : undefined,
            }}
        >
          {
            ROUTER_MODE === 'data' ?
                <RouterProvider router={router}/>
                :
                <>
                  <Outlet/>
                </>
          }
        </ClerkProvider>
      </>
  )
}
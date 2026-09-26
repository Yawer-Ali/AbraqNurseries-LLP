import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);

  return (
    <>
      {/* Pine curtain lifts on every route change */}
      <div key={`curtain-${pathname}`} className="page-curtain" aria-hidden="true" />
      <main key={pathname} className="page-enter">
        {children}
      </main>
    </>
  );
}

export default PageTransition;

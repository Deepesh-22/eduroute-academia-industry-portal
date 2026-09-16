import { useEffect, useState } from "react";
import { useAppStore } from "./store";

export function usePortalHydrated() {
  const [hydrated, setHydrated] = useState(() => useAppStore.persist.hasHydrated());
  useEffect(() => {
    const done = () => setHydrated(true);
    const unsub = useAppStore.persist.onFinishHydration(done);
    void Promise.resolve(useAppStore.persist.rehydrate()).finally(done);
    const t = window.setTimeout(done, 400);
    return () => {
      unsub();
      window.clearTimeout(t);
    };
  }, []);
  return hydrated;
}

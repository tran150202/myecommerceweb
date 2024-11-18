"use client";
import { useDraftModeEnvironment } from "next-sanity/hooks";
import { useRouter } from "next/navigation";

export function DisableDraftMode() {
  const enviroment = useDraftModeEnvironment();
  const router = useRouter();

  if (enviroment !== "live" && enviroment !== "unknown") {
    return null;
  }

  const handleClick = async () => {
    await fetch("/draft-mode/disable");
    router.refresh();
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-4 right-4 bg-gray-50 px-4 py-2 z-50"
    >
      Tắt
    </button>
  );
}

"use client";
import { ProgressProvider } from "@bprogress/next/app";
import { Toaster } from "sonner";

interface Props {
  children: React.ReactNode;
}

const ContextProvider = ({ children }: Props) => {
  return (
    <ProgressProvider
      height="2px"
      color="#f39d2f"
      options={{ showSpinner: true }}
      shallowRouting
    >
      <Toaster position="top-right" richColors closeButton />
      {children}
    </ProgressProvider>
  );
};

export default ContextProvider;

"use client";
import { type ReactNode } from "react";
import PageBorder from "react-page-border";

export type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps): React.JSX.Element {
  return (
    <PageBorder
      borderColor="blue"
      borderSize="min(12px, 2dvw)"
      roundSize="min(12px, 2dvw)"
    >
      {children}
    </PageBorder>
  );
}

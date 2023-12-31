import { siteConfig } from "@/config/site";
import { Metadata } from "next";
import { Logo } from "./_components/logo";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: [
    {
      url: "/spooky.svg",
      href: "/spooky.svg",
    },
  ],
};

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full flex flex-col items-center justify-center space-y-6">
      <Logo />
      {children}
    </div>
  );
};

export default AuthLayout;

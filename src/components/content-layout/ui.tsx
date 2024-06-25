import { TransType } from "@/types/transType";
import { Navbar } from "./navbar";
import ContentLayoutProps from "./types";

const ContentLayoutUI = ({ title, children, t }: ContentLayoutProps & TransType) => {
  return (
    <div>
      <Navbar t={t} title={t(title)} />
      <div className="container pt-8 pb-8 px-4 sm:px-8 h-[calc(100vh_-_145px)] overflow-y-auto">{children}</div>
    </div>
  );
}

export default ContentLayoutUI;
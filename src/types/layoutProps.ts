import { ReadonlyChildrenProps } from "./childrenProps";
import { LocaleProps } from "./localeProps";
import { PageProps } from "./pageProps";

export type LayoutProps = ReadonlyChildrenProps & PageProps<LocaleProps>;
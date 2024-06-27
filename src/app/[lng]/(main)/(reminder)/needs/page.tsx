import ContentLayout from "@/components/content-layout/client";
import { LocaleProps } from "@/types/localeProps";
import { PageProps } from "@/types/pageProps";

const NeedsPage = ({ params }: PageProps<LocaleProps>) => {
  return (
    <ContentLayout lng={params.lng} title="needs">
      <div></div>
    </ContentLayout>
  );
};

export default NeedsPage;

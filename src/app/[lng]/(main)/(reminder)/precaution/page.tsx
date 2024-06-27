import ContentLayout from "@/components/content-layout/client";
import { LocaleProps } from "@/types/localeProps";
import { PageProps } from "@/types/pageProps";

const PrecautionPage = ({ params }: PageProps<LocaleProps>) => {
  return (
    <ContentLayout lng={params.lng} title="precaution">
      <div></div>
    </ContentLayout>
  );
};

export default PrecautionPage;

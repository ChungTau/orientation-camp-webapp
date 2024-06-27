import ContentLayout from "@/components/content-layout/client";
import { LocaleProps } from "@/types/localeProps";
import { PageProps } from "@/types/pageProps";

const ManagemGroupPage = ({ params }: PageProps<LocaleProps>) => {
  return (
    <ContentLayout lng={params.lng} title="ug-groups">
      <div></div>
    </ContentLayout>
  );
};

export default ManagemGroupPage;

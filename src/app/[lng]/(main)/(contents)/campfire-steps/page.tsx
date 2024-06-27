import ContentLayout from "@/components/content-layout/client";
import { LocaleProps } from "@/types/localeProps";
import { PageProps } from "@/types/pageProps";

const CampfireStepsPage = ({ params }: PageProps<LocaleProps>) => {
  return (
    <ContentLayout lng={params.lng} title="campfire-steps">
      <div></div>
    </ContentLayout>
  );
};

export default CampfireStepsPage;

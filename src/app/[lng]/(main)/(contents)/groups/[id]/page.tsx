import ContentLayout from "@/components/content-layout/client";
import { IdProps } from "@/types/idProps";
import { LocaleProps } from "@/types/localeProps";
import { PageProps } from "@/types/pageProps";

const GroupIdPage = ({ params }: PageProps<IdProps & LocaleProps>) => {
  return (
    <ContentLayout lng={params.lng} title={`Group ${params.id}`}>
      <div>Language: {params.lng}</div>
    </ContentLayout>
  );
};

export default GroupIdPage;

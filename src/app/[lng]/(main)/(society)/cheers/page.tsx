import ContentLayout from "@/components/content-layout/client";
import { LocaleProps } from "@/types/localeProps";
import { PageProps } from "@/types/pageProps";

const CheersPage = ({ params }: PageProps<LocaleProps>) => {
  return (
    <ContentLayout lng={params.lng} title="cheers">
      <div className="flex w-full shadow-md overflow-y-auto py-8 scrollbar-thin scrollbar-thumb-transparent xl:flex-1 bg-white rounded-md"></div>
    </ContentLayout>
  );
};

export default CheersPage;

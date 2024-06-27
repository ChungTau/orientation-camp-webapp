import ContentLayout from "@/components/content-layout/client";
import { LocaleProps } from "@/types/localeProps";
import { PageProps } from "@/types/pageProps";

const ManageRolesPage = ({ params }: PageProps<LocaleProps>) => {
  return (
    <ContentLayout lng={params.lng} title="ug-roles">
      <div></div>
    </ContentLayout>
  );
};

export default ManageRolesPage;

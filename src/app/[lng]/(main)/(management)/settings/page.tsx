import ContentLayout from "@/components/content-layout/client";
import SettingsForm from "@/components/settings-form";
import { LocaleProps } from "@/types/localeProps";
import { PageProps } from "@/types/pageProps";

const SettingsPage = ({ params }: PageProps<LocaleProps>) => {
  return (
    <ContentLayout lng={params.lng} title="settings">
      <div>
        <SettingsForm />
      </div>
    </ContentLayout>
  );
};

export default SettingsPage;

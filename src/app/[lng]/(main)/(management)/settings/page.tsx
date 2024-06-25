
import ContentLayout from "@/components/content-layout/client";
import SettingsForm from "@/components/settings-form";
import { PageProps } from "@/types/pageProps";

export default function SettingsPage({params:{lng}}:PageProps) {
    return(
        <ContentLayout lng={lng} title="settings">
            <div>
        <SettingsForm />
      </div>
        </ContentLayout>
    );
}
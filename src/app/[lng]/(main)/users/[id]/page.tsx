import ContentLayout from "@/components/content-layout/client";
import { IdProps } from "@/types/idProps";
import { LocaleProps } from "@/types/localeProps";
import { PageProps } from "@/types/pageProps";

const UserProfile = ({params}:PageProps<IdProps&LocaleProps>) => {
    return(
        <ContentLayout lng={params.lng} title="User Profile" >
            <div>
                User ID: {params.id}
            </div>
        </ContentLayout>
    );
};

export default UserProfile;
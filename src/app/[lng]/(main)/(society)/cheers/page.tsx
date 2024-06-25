import ContentLayout from "@/components/content-layout/client";
import { PageProps } from "@/types/pageProps";

export default function CheersPage({params:{lng}}:PageProps) {
    return(
        <ContentLayout lng={lng} title="cheers">
            <div>
                
                </div>
        </ContentLayout>
    );
}
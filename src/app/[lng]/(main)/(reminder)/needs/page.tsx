import ContentLayout from "@/components/content-layout/client";
import { PageProps } from "@/types/pageProps";

export default function NeedsPage({params:{lng}}:PageProps) {
    return(
        <ContentLayout lng={lng} title="needs">
            <div>
                
                </div>
        </ContentLayout>
    );
}
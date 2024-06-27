
import ContentLayout from "@/components/content-layout/client";

import { EmblaOptionsType } from 'embla-carousel'
import { PageProps } from "@/types/pageProps";
import EmblaCarousel from "@/components/embla-carousel";

import '@/styles/embla.css'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LocaleProps } from "@/types/localeProps";

const OPTIONS: EmblaOptionsType = {}
const SLIDES = ["https://www.tamu.edu/_files/images/traditions/fish-camp-yell-off-lime.JPG", "https://marvel-b1-cdn.bc0a.com/f00000000277771/sitecorecms.bsu.edu//-/media/www/departmentalcontent/undergraduateadmissions/photos/orientation/orientation-landing.jpg?sc_lang=en&hash=F454654E701776478825326436C90E16F3DBCE5B", "https://www.arbor.edu/wp-content/uploads/2023/02/nso-web-ready.jpg"]
const HomePage =({ params }: PageProps<LocaleProps>) => {
  return (
    <ContentLayout lng={params.lng} title="overview">
      <div className="flex flex-col px-4 gap-4">
        <EmblaCarousel imageUrls={SLIDES} options={OPTIONS} />
        <div className="grid grid-rows-4 lg:grid-rows-2 lg:grid-cols-3 gap-4 h-[40vh] lg:h-[40vh]">
          <Card className={"lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-1 row-span-1 dark:bg-zinc-700"}>
            <CardHeader className="text-center py-1 bg-indigo-500 dark:bg-zinc-800 text-zinc-200 dark:text-zinc-200 rounded-t-md">
              <CardTitle className="text-base ">Announcement</CardTitle>
            </CardHeader>
            <CardContent>
              
            </CardContent>
          </Card>
          <Card className={"hidden lg:block lg:col-start-1 lg:col-end-3 lg:row-start-2 lg:row-end-2 py-4"}>
            <div className="p-4">
              <h3 className="text-lg font-bold">Upcoming Event</h3>
            </div>
          </Card>
          <Card className={"lg:col-start-3 lg:col-end-3 lg:row-span-2 row-span-3 py-4"}>
            <div className="p-4">
              <h3 className="text-lg font-bold">Ranking</h3>
            </div>
          </Card>
        </div>
      </div>
    </ContentLayout>
  );
}

export default HomePage;
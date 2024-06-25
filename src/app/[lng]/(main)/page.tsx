
import ContentLayout from "@/components/content-layout/client";

import { EmblaOptionsType } from 'embla-carousel'
import { PageProps } from "@/types/pageProps";
import EmblaCarousel from "@/components/embla-carousel";

import '@/styles/embla.css'
import { Card } from "@/components/ui/card";

const OPTIONS: EmblaOptionsType = {}
const SLIDE_COUNT = 5
const SLIDES = ["https://usnewsglobaleducation.com/wp-content/uploads/2019/08/DSC_1203_640x420.jpg", "https://marvel-b1-cdn.bc0a.com/f00000000277771/sitecorecms.bsu.edu//-/media/www/departmentalcontent/undergraduateadmissions/photos/orientation/orientation-landing.jpg?sc_lang=en&hash=F454654E701776478825326436C90E16F3DBCE5B", "https://www.arbor.edu/wp-content/uploads/2023/02/nso-web-ready.jpg"]
export default function HomePage({ params: { lng } }: PageProps) {
  return (
    <ContentLayout lng={lng} title="overview">
      <div className="flex flex-col px-4 gap-4">
        <EmblaCarousel imageUrls={SLIDES} options={OPTIONS} />
        <div className="lg:grid block lg:grid-rows-2 lg:grid-cols-3 gap-4 lg:h-[calc(40vh)]">
          <Card className={"hidden lg:block lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-1 py-4"}>
            <div className="p-4">
              <h3 className="text-lg font-bold">Current Event</h3>
            </div>
          </Card>
          <Card className={"hidden lg:block lg:col-start-1 lg:col-end-3 lg:row-start-2 lg:row-end-2 py-4"}>
            <div className="p-4">
              <h3 className="text-lg font-bold">Upcoming Event</h3>
            </div>
          </Card>
          <Card className={"h-full lg:col-start-3 lg:col-end-3 lg:row-span-2 py-4"}>
            <div className="p-4">
              <h3 className="text-lg font-bold">Ranking</h3>
            </div>
          </Card>
        </div>
      </div>
    </ContentLayout>
  );
}

"use client";

import ContentLayout from "@/components/content-layout/client";
import { PageProps } from "@/types/pageProps";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TimelineLayout } from "@/components/timeline/timeline-layout";
import { timelineData } from "@/config/timeline";
import { LocaleProps } from "@/types/localeProps";

const RundownPage = ({ params }: PageProps<LocaleProps>) => {
  return (
    <ContentLayout lng={params.lng} title="rundown">
      <Tabs defaultValue="day1">
        <TabsList className={"w-full mb-2"}>
          <TabsTrigger className={"flex-1"} value="day1">
            Day1
          </TabsTrigger>
          <TabsTrigger className={"flex-1"} value="day2">
            Day2
          </TabsTrigger>
        </TabsList>
        <TabsContent value="day1">
          <div className="flex justify-center w-full h-full overflow-y-auto items-center rounded-md m-1 bg-white dark:bg-zinc-800 lg:pl-8 py-8">
            <TimelineLayout items={timelineData} />
          </div>
        </TabsContent>
        <TabsContent value="day2">
          <div className="flex justify-center w-full h-full overflow-y-auto items-center rounded-md m-1 bg-white dark:bg-zinc-800 lg:pl-8 py-8">
            <TimelineLayout items={timelineData} />
          </div>
        </TabsContent>
      </Tabs>
    </ContentLayout>
  );
};

export default RundownPage;

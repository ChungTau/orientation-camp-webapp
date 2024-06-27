import ContentLayout from "@/components/content-layout/client";
import GroupCard from "@/components/group-card";
import { LocaleProps } from "@/types/localeProps";
import { PageProps } from "@/types/pageProps";

const GroupsPage = ({ params }: PageProps<LocaleProps>) => {
  const groups = [
    {
      groupName: "Group 1",
      slogan: "Leading the way",
      description: "Description for group 1",
      avatarUrl: "https://via.placeholder.com/150?text=G1",
    },
    {
      groupName: "Group 2",
      slogan: "Striving for excellence",
      description: "Description for group 2",
      avatarUrl: "https://via.placeholder.com/150?text=G2",
    },
    // Add more groups as needed
  ];

  return (
    <ContentLayout lng={params.lng} title="groups">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-4">
        {groups.map((group, index) => (
          <GroupCard
            key={index}
            groupName={group.groupName}
            slogan={group.slogan}
            description={group.description}
            avatarUrl={group.avatarUrl}
          />
        ))}
      </div>
    </ContentLayout>
  );
}

export default GroupsPage;
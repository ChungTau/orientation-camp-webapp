import BusinessCard from "@/components/business-card";
import ContentLayout from "@/components/content-layout/client";
import { LocaleProps } from "@/types/localeProps";
import { PageProps } from "@/types/pageProps";

const ExcosPage = ({ params }: PageProps<LocaleProps>) => {
  const excos = [
    {
      name: "John Doe",
      title: "CEO",
      phone: "123-456-7890",
      avatarUrl: "https://via.placeholder.com/150?text=JD",
      introduction:
        "John Doe is the CEO of the company. He has over 20 years of experience in the industry...",
    },
    {
      name: "Jane Smith",
      title: "CTO",
      phone: "123-456-7890",
      avatarUrl: "https://via.placeholder.com/150?text=JS",
      introduction:
        "Jane Smith is the CTO. She leads the tech team and has been a crucial part of the company for 15 years...",
    },
    // Add more excos as needed
  ];

  return (
    <ContentLayout lng={params.lng} title="excos">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-4">
        {excos.map((exco, index) => (
          <BusinessCard
            key={index}
            name={exco.name}
            title={exco.title}
            phone={exco.phone}
            avatarUrl={exco.avatarUrl}
            introduction={exco.introduction}
          />
        ))}
      </div>
    </ContentLayout>
  );
};

export default ExcosPage;

import { PageHeader, PageHeaderHeading } from "@/components/page-header";
import Pager from "@/components/pager";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CodeSnippet from "@/components/code-snippet";
import { code } from "@/config/codeContent";
import ContactForm from "./ContactForm";
import { ContactsBadges } from "@/components/contact-badges";

const ContactPage = async () => {
  return (
    <>
      <PageHeader>
        <PageHeaderHeading>Contato</PageHeaderHeading>
      </PageHeader>

      {/* <div id="tabs" className="flex items-center mt-8"> */}
        {/* <Tabs defaultValue="details" className="w-full">
          <TabsList className="max-w-[300px] w-full"> */}
            {/* <TabsTrigger value="form">Formulário</TabsTrigger> */}
            {/* <TabsTrigger value="details">Detalhes</TabsTrigger> */}
          {/* </TabsList> */}
          {/* <TabsContent value="form" className="mt-4">
            <ContactForm />
          </TabsContent> */}
          {/* <TabsContent value="details" className="mt-4"> */}
            {/* <ContactsBadges /> */}
            <CodeSnippet title="contact.go" code={code.contact} />
          {/* </TabsContent>
        </Tabs> */}
      {/* </div> */}

      <Pager
        prevHref="/education"
        nextHref="/stats"
        prevTitle="Educação"
        nextTitle="Stats"
      />
    </>
  );
};

export default ContactPage;

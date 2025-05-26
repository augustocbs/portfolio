import CodeSnippet from "@/components/code-snippet";
import { PageActions } from "@/components/page-header";
import {
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import { PageHeader } from "@/components/page-header";
import Pager from "@/components/pager";
import { Button } from "@/components/ui/button";
import { code } from "@/config/codeContent";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import { ExternalLink, Mail } from "lucide-react";

const IntroductionPage = async () => {
  return (
    <>
      <PageHeader>
        <PageHeaderHeading>Augusto Cesar</PageHeaderHeading>
        <PageHeaderHeading className="mt-2 text-muted-foreground">
          Transformando ideias em código com paixão e dedicação.
        </PageHeaderHeading>
        <PageHeaderDescription>
          Engenheiro de Software com paixão por transformar desafios em soluções
          inovadoras. Com experiência em desenvolvimento web fullstack, atuo com
          tecnologias modernas como PHP, .NET, Node.js e React. Meu objetivo é
          criar aplicações que não apenas funcionem, mas que entreguem valor
          real através de código limpo e boas práticas de desenvolvimento.
        </PageHeaderDescription>
        <PageActions>
          <Button asChild size="sm" variant="ghost" className="rounded-md">
            <Link href={siteConfig.links.email}>
              <Mail className="size-4" />
              Enviar E-mail
            </Link>
          </Button>
        </PageActions>
      </PageHeader>

      <CodeSnippet title="welcome.ts" code={code.welcome} />

      <Pager
        prevHref="/"
        nextHref="/about"
        prevTitle="Previous"
        nextTitle="About Me"
      />
    </>
  );
};
export default IntroductionPage;

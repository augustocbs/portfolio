import CodeSnippet from "@/components/code-snippet";
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import Pager from "@/components/pager";
import { SkillsBadges } from "@/components/skill-badges";
import { code } from "@/config/codeContent";

const SkillsToolsPage = () => {
  return (
    <>
      <PageHeader>
        <PageHeaderHeading>Skills & Tools</PageHeaderHeading>
        <PageHeaderHeading className="mt-2 text-muted-foreground">
          Conhecimento construído através de dedicação e experiência prática
        </PageHeaderHeading>
        <PageHeaderDescription>
          Como Engenheiro de Software Full-stack, sou especializado no
          desenvolvimento de aplicações web escaláveis utilizando tecnologias
          modernas como Next.js, React e Tailwind CSS. Minha expertise abrange
          tanto o desenvolvimento front-end quanto back-end, permitindo criar
          soluções completas e integradas. Atualmente, estou expandindo meus
          conhecimentos para o desenvolvimento mobile com React Native e Expo,
          visando oferecer soluções multiplataforma que atendam às demandas
          atuais do mercado.
        </PageHeaderDescription>
      </PageHeader>

      <SkillsBadges />

      <CodeSnippet title="skills.php" code={code.skillsTools} />

      <Pager
        prevHref="/projects"
        nextHref="/experience"
        prevTitle="Projetos"
        nextTitle="Experiências"
      />
    </>
  );
};
export default SkillsToolsPage;

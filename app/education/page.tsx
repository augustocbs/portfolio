import CodeSnippet from "@/components/code-snippet";
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import Pager from "@/components/pager";
import { Timeline } from "@/components/time-line";
import { TimelineItem } from "@/components/ui/time-line-item";
import { code } from "@/config/codeContent";

const EducationPage = () => {
  return (
    <>
      <PageHeader className="mb-10">
        <PageHeaderHeading>Educação</PageHeaderHeading>
        <PageHeaderHeading className="mt-2 text-muted-foreground">
          Aprendi muito, mas o verdadeiro aprendizado acontece no editor de
          código!
        </PageHeaderHeading>
        <PageHeaderDescription>
          A educação sempre foi a base fundamental da minha jornada no mundo da
          tecnologia. Atualmente cursando Ciência de Dados e Inteligência
          Artificial, busco constantemente expandir meus conhecimentos e
          habilidades técnicas.
        </PageHeaderDescription>
        <PageHeaderDescription>
          Minha jornada acadêmica tem sido complementada por projetos práticos e
          cursos especializados, permitindo desenvolver habilidades práticas e
          uma compreensão profunda das soluções tecnológicas modernas.
        </PageHeaderDescription>
      </PageHeader>

      <Timeline>
        <TimelineItem
          title="Ciência de Dados e Inteligência Artificial"
          institution="Universidade DomBosco"
          period="Jan. 2022 - Dez. 2025 (Esperado)"
          description="Durante o curso, tenho me aprofundado em áreas como machine learning, análise estatística e processamento de dados em larga escala. Desenvolvo projetos práticos utilizando Python e frameworks modernos de IA."
          isCurrent
        />
        <TimelineItem
          title="Bacharelado em Sistemas de Informação"
          institution="Universidade Federal de Uberlândia (UFU)"
          period="Jan 2019 - Set. 2020 (Interrompida)"
          description="Durante o período na UFU, construí uma base sólida em programação, estruturas de dados e desenvolvimento de software. Participei de projetos acadêmicos envolvendo C, C++ e desenvolvimento web, além de ter sido membro ativo em grupos de estudos de programação."
        />
        <TimelineItem
          title="Curso Técnico em Meio Ambiente"
          institution="SENAI"
          period="Jul. 2016 - Jan. 2018"
          description="O curso técnico me proporcionou uma visão única sobre sustentabilidade e tecnologia. Participei de iniciativas de conscientização ambiental e aprendi sobre a importância da tecnologia na preservação do meio ambiente."
        />
      </Timeline>

      <CodeSnippet code={code.educationJourney} title="educationJourney.php" />

      <Pager
        prevHref="/experience"
        nextHref="/contact"
        prevTitle="Experiência"
        nextTitle="Contato"
      />
    </>
  );
};
export default EducationPage;

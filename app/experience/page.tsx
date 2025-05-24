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

const ExperiencePage = () => {
  return (
    <>
      <PageHeader className="mb-10">
        <PageHeaderHeading>Experiências</PageHeaderHeading>
        <PageHeaderHeading className="mt-2 text-muted-foreground">
          Você precisa dela para conseguir o trabalho, mas é o trabalho que a
          fornece!
        </PageHeaderHeading>
        <PageHeaderDescription>
          Ao longo da minha jornada como desenvolvedor, tive a oportunidade de
          trabalhar com tecnologias de ponta enquanto também dominava a arte
          refinada de debugar às 2h da manhã. Desde a construção de aplicações
          web dinâmicas até a decodificação de mensagens de erro enigmáticas,
          minha experiência tem sido uma mistura de aprendizado estruturado e
          resolução espontânea de problemas. Cada projeto e estágio aprimorou
          minha capacidade de escrever código limpo, colaborar efetivamente e,
          mais importante, corrigir bugs antes que eles me corrijam.
        </PageHeaderDescription>
      </PageHeader>

      <Timeline>
        <TimelineItem
          title="Desenvolvedor Full Stack"
          institution="Signotech"
          period="Nov. 2024 - Atualmente"
          description="Desenvolvimento de aplicações backend em PHP/Laravel, com foco na implementação de APIs RESTful escaláveis, webhooks e integrações com diversos serviços externos para processamento de pagamentos e validação de dados em tempo real. Responsável pela arquitetura e implementação de microsserviços em C#/.NET, hospedados na infraestrutura AWS, utilizando práticas modernas de desenvolvimento e serviços cloud-native como SQS para mensageria assíncrona, RDS para gerenciamento de bancos de dados relacionais e S3 para armazenamento distribuído de documentos. Participação ativa em decisões arquiteturais e técnicas, contribuindo para a evolução contínua e melhoria dos processos de desenvolvimento."
          isCurrent
        />
        <TimelineItem
          title="Desenvolvedor Full Stack"
          institution="BEXPO"
          period="Jan. 2021 - Jun. 2024"
          description="Desenvolver sistemas empresariais para gerenciamento de clientes, com ênfase na implementação de relatórios personalizados utilizando React, JavaScript, HTML5 e CSS. Arquitetar e implementar APIs REST escaláveis com NodeJS/Express, realizando integrações com bancos de dados Firebase e PostgreSQL, além de garantir práticas de versionamento através do Git e Azure DevOps. Realizar a manutenção e aprimoramento de aplicativos móveis em Flutter, implementando soluções utilizando biometria facial e validação documental, além de otimizações de performance e correções críticas de sistema."
        />
      </Timeline>

      <CodeSnippet code={code.experience} title="experience.js" />

      <Pager
        prevHref="/skills-tools"
        nextHref="/education"
        prevTitle="Conhecimentos"
        nextTitle="Educação"
      />
    </>
  );
};
export default ExperiencePage;

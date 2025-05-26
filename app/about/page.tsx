import CodeSnippet from "@/components/code-snippet";
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import Pager from "@/components/pager";
import { code } from "@/config/codeContent";

const AboutMePage = () => {
  return (
    <>
      <PageHeader>
        <PageHeaderHeading>Sobre mim</PageHeaderHeading>
        <PageHeaderHeading className="mt-2 text-muted-foreground">
          Transformando desafios em soluções inovadoras
        </PageHeaderHeading>
        <PageHeaderDescription>
          Como Engenheiro de Software, minha paixão pela tecnologia vai além da
          programação. Especializado no desenvolvimento back-end, construo APIs
          robustas e escaláveis utilizando PHP/Laravel, .NET e Node.js. Minha
          jornada começou com o desejo de resolver desafios complexos,
          transformando-se em uma busca constante pela excelência em
          arquiteturas de software que entregam valor real aos usuários.
        </PageHeaderDescription>

        <PageHeaderDescription>
          Com sólida experiência em frameworks JavaScript, dedico-me a criar
          aplicações que combinam performance e usabilidade. Atualmente, estou
          expandindo meus horizontes no desenvolvimento mobile com React Native
          e Expo, buscando oferecer soluções multiplataforma que atendam às
          necessidades modernas do mercado.
        </PageHeaderDescription>

        <PageHeaderDescription>
          Para além do desenvolvimento, prospero em ambientes colaborativos onde
          posso contribuir com soluções criativas para desafios complexos. Meu
          objetivo é participar de projetos significativos que gerem impacto
          positivo na vida das pessoas, sempre buscando aprender e evoluir com
          cada nova experiência.
        </PageHeaderDescription>
      </PageHeader>

      <CodeSnippet title="aboutMe.tsx" code={code.aboutMe} />

      <Pager
        prevHref="/"
        nextHref="/projects"
        prevTitle="Introdução"
        nextTitle="Projetos"
      />
    </>
  );
};
export default AboutMePage;

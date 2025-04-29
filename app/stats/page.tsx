export const dynamic = "force-dynamic";

import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import { getGitHubStatsServerAction } from "../actions/getGitHubStatsServerAction";
import GitHubGraphs from "./GitHubGraphs";
import styles from "./stats.module.css";

const StatCard = ({
  title,
  value,
  className = "",
}: {
  title: string;
  value: string | number;
  className?: string;
}) => (
  <div
    className={`${styles.card} ${className}`}
  >
    <div className={styles["card-content"]}>
      <h3 className={styles["card-title"]}>
        {title}
      </h3>
      <span className={styles["card-value"]}>
        {value}
      </span>
    </div>
  </div>
);

const Stats = async () => {
  const githubStats = await getGitHubStatsServerAction();

  const githubStatCards = [
    {
      title: "Total de Repositórios Públicos",
      value: githubStats.public_repos || 0,
    },
    {
      title: "Seguidores",
      value: githubStats.followers || 0,
    },
    {
      title: "Seguindo",
      value: githubStats.following || 0,
    },
    {
      title: "Empresa Atual",
      value: githubStats.company || "N/A",
    },
    {
      title: "Localização",
      value: githubStats.location || "N/A",
    },
  ];

  return (
    <>
      {/* Sobre as estatísticas do GitHub */}
      <PageHeader className="mt-8 mb-4">
        <PageHeaderHeading>Estatísticas do GitHub</PageHeaderHeading>
        <PageHeaderDescription>
          Informações e métricas sobre meu perfil no GitHub
        </PageHeaderDescription>
      </PageHeader>

      {/* Gráficos do GitHub */}
      <div className="flex items-center justify-center w-full p-4 mb-8 border border-border/40 rounded-xl">
        <GitHubGraphs />
      </div>

      <div className="mb-8">
        <div className={styles["card-container"]}>
          {githubStatCards.map((card, index) => (
            <StatCard
              key={index}
              title={card.title}
              value={card.value}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Stats;

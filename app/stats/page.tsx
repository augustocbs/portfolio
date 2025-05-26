'use client'

import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import GitHubGraphs from "./GitHubGraphs";
import styles from "./stats.module.css";
import { getProfileViewCounter } from "../actions/getProfileViewCounter";
import { getGitHubStats } from "../actions/getGitHubStatsServerAction";
import { useEffect, useState } from "react";

const StatCard = ({
  title,
  value,
  className = "",
}: {
  title: string;
  value: string | number;
  className?: string;
}) => (
  <div className={`${styles.card} ${className}`}>
    <div className={styles["card-content"]}>
      <h3 className={styles["card-title"]}>{title}</h3>
      <span className={styles["card-value"]}>{value}</span>
    </div>
  </div>
);

const Stats = () => {
  const [stats, setStats] = useState<any>(null);
  const [views, setViews] = useState('0');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [statsData, viewsData] = await Promise.all([
          getGitHubStats(),
          getProfileViewCounter()
        ]);
        
        setStats(statsData);
        setViews(viewsData);
      } catch (error) {
        // console.error("Erro ao carregar dados:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const githubStatCards = [
    {
      title: "Visitas ao meu Perfil",
      value: views || 0,
    },
    {
      title: "Total de Repositórios Públicos",
      value: stats?.public_repos || 0,
    },
    {
      title: "Seguidores",
      value: stats?.followers || 0,
    },
    {
      title: "Seguindo",
      value: stats?.following || 0,
    },
    {
      title: "Empresa Atual",
      value: stats?.company || "N/A",
    },
    {
      title: "Localização",
      value: stats?.location || "N/A",
    },
  ];

  return (
    <>
      <PageHeader className="mt-8 mb-4">
        <PageHeaderHeading>Estatísticas do GitHub</PageHeaderHeading>
        <PageHeaderDescription>
          Informações e métricas sobre meu perfil no GitHub
        </PageHeaderDescription>
      </PageHeader>

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
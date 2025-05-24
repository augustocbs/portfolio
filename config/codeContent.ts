export const code = {
  welcome: `import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "Bem vindo ao meu portfolio!"}, { status: 200 });
}
`,

  aboutMe: `// Desenvolvedor Full Stack apaixonado por tecnologia
import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { ProfileInfo, Skills, Principios, Excellence } from './types';

const Profile: React.FC = () => {
  const profile: ProfileInfo = {
    nome: "Augusto Cesar de Barros Silveira",
    role: "Desenvolvedor Full Stack",
    mission: "Criar soluções inovadoras que impactam positivamente a vida das pessoas"
  };

  const expertise = (): { skills: Skills; principios: Principios } => {
    const skills: Skills = {
      frontend: "Desenvolvimento de interfaces modernas e responsivas",
      backend: "Arquitetura de APIs robustas e escaláveis",
      devops: "Implementação de CI/CD e boas práticas de desenvolvimento"
    };

    const principios: Principios = {
      qualidade: "Código limpo, testável e bem documentado",
      performance: "Otimização e eficiência em todos os níveis",
      usabilidade: "Experiência do usuário excepcional",
      segurança: "Implementação das melhores práticas de segurança"
    };

    return { skills, principios };
  };

  const deliverExcellence = (): Excellence => {
    const { skills, principios } = expertise();
    return {
      commitment: "Comprometido com a excelência em desenvolvimento de software",
      approach: Object.values(principios),
      capabilities: Object.values(skills)
    };
  };

  const excellence = deliverExcellence();

  return (
    <View style={styles.container}>
      <View style={styles.profileSection}>
        <Text style={styles.name}>{profile.nome}</Text>
        <Text style={styles.role}>{profile.role}</Text>
        <Text style={styles.mission}>{profile.mission}</Text>
      </View>

      <View style={styles.excellenceSection}>
        <Text style={styles.commitment}>{excellence.commitment}</Text>

        <Text style={styles.sectionTitle}>Princípios:</Text>
        {excellence.approach.map((principle, index) => (
          <Text key={index} style={styles.listItem}>• {principle}</Text>
        ))}

        <Text style={styles.sectionTitle}>Capacidades:</Text>
        {excellence.capabilities.map((capability, index) => (
          <Text key={index} style={styles.listItem}>• {capability}</Text>
        ))}
      </View>
    </View>
  );
};

export default Profile;
`,

  skillsTools: `<?php
$mySkills = [
  "HTML", "CSS", "JavaScript", "TypeScript", "ReactJS", "NextJS", "Tailwind CSS",
  "NodeJS", "ExpressJS", "PHP", "Laravel", ".NET", "Python", "Flutter", "MySQL",
  "PostgreSQL", "MongoDB", "Docker", "GitHub", "Microsoft Azure", "Git", "Vercel",
  "Postman", "Linux", "macOS", "Windows", "pnpm", "npm", "yarn"
];

function getSkills($mySkills) {
  return count($mySkills) > 0
    ? "Eu tenho expertise em: " . implode(", ", $mySkills) . "! 💻🚀"
    : "Habilidades não encontradas... Problema!!!";
}

echo getSkills($mySkills);
?>
`,

  contact: `package main
import "fmt"

type ContactDetails struct {
    Nome      string
    Email     string
    Celular   string
    Localizacao string
    LinkedIn  string
    GitHub    string
}

func main() {
    contato := ContactDetails{
        Nome:      "Augusto Cesar de Barros Silveira",
        Email:     "augustoc.bsilveira@gmail.com",
        Celular:   "+55 (41) 9 9960-2885",
        Localizacao: "Curitiba, Brasil",
        LinkedIn:  "linkedin.com/in/augustocbs",
        GitHub:    "github.com/augustocbs",
    }

    entrarEmContato(contato)
}

func entrarEmContato(c ContactDetails) {
    fmt.Printf("Entre em contato comigo através do email %s ou conecte-se no LinkedIn: %s",
        c.Email, c.LinkedIn)
}
`,


  experience: `const experience = [
  {
    role: "Desenvolvedor Full Stack",
    company: "Signotech",
    duration: "Nov. 2024 - Atualmente",
    skills: [
      "PHP", "Laravel", "APIs REST", "Webhooks", "C#",
      "Integração de pagamentos", "Validação de dados",
      ".NET", "AWS Lambda", "SQS", "RDS", "S3"
    ]
  },
  {
    role: "Desenvolvedor Full Stack",
    company: "Bexpo",
    duration: "Jan. 2021 - Jun. 2024",
    skills: [
      "JavaScript", "HTML5", "CSS", "React",
      "NodeJS", "Express", "Firebase", "PostgreSQL",
      "Git", "Azure DevOps", "Dart", "Flutter",
      "Reconhecimento facial", "Validação de documentos"
    ]
  }
];

experience.forEach((job) => {
  console.log(
    \`👨‍💻 \${job.role} na \${job.company} (\${job.duration})\n\` +
    \`🚀 Skills: \${job.skills.join(", ")}\n\`
  );
});
`,

  projects: `const projectField = {
  idea: "Overnight hackathon brilliance",
  execution: "Debugging marathons",
  outcome: "Works on my machine... most days!",
};

console.log("Project Field:", projectField);
`,

educationJourney: `<?php
$educationJourney = [
  "degree" => "Bacharelado da Vida de Dev",
  "institution" => "Github - StackOverflow",
  "period" => "2019 - Presente",
  "courses" => [
    "Análise de Dados Avançada",
    "Machine Learning",
    "Inteligência Artificial Aplicada",
    "Estatística Computacional",
    "Big Data e Processamento Distribuído"
  ]
];

echo "Minha Formação: " . $educationJourney['degree'] . "-" . $educationJourney['institution'];
echo "\\n\Período: " . $educationJourney['period'];
echo "\\n\Disciplinas Principais:";
foreach ($educationJourney['courses'] as $course) {
  echo "\\n\-" . $course;
}
?>
`,
};

import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiFirebase,
  SiMongodb,
  SiMysql,
  SiReactrouter,
  SiGrafana,
  SiMqtt,
  SiGit,
  SiGithub,
  SiPython,
  SiHtml5,
  SiInfluxdb,
  SiNodered,
  SiFlask
} from "react-icons/si";

const icons = {
  React: SiReact,
  "React Native": SiReact,
  TypeScript: SiTypescript,
  "Next.js": SiNextdotjs,
  "Tailwind CSS": SiTailwindcss,
  "Node.js": SiNodedotjs,
  Express: SiExpress,
  Firebase: SiFirebase,
  MongoDB: SiMongodb,
  MySQL: SiMysql,
  Git: SiGit,
  GitHub: SiGithub,
  Grafana: SiGrafana,
  MQTT: SiMqtt,
  Python:SiPython,
  "HTML":SiHtml5,
  "Influx":SiInfluxdb,
  "Node-RED":SiNodered,
  "Flask":SiFlask,

  LoRaWAN: SiReactrouter,
  Modbus: SiReactrouter,
};

interface TechBadgeProps {
  tech: string;
}

export function TechBadge({ tech }: TechBadgeProps) {
  const Icon = icons[tech as keyof typeof icons];

  return (
    <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-zinc-300">
      {Icon && <Icon size={18} />}
      <span>{tech}</span>
    </div>
  );
}
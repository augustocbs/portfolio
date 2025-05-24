'use client'

import { Icons } from "@/components/icons"
import { Badge } from "@/components/ui/badge"
import { mySkills } from "@/constants"

export function SkillsBadges() {
  return (
    <div
      id="badges"
      className="flex flex-wrap items-center justify-center gap-2 my-4"
    >
      {mySkills.map((item) => (
        <Badge
          key={item.title}
          className="p-4 py-2 border border-secondary bg-secondary-foreground text-secondary cursor-pointer hover:opacity-90 transition-opacity"
          onClick={() => {
            if (item.link) {
              window.open(item.link, "_blank", "noopener,noreferrer")
            }
          }}
        >
          {Icons[item.icon as keyof typeof Icons]?.({
            className: "mr-2 size-4",
          })}
          {item.title}
        </Badge>
      ))}
    </div>
  )
}
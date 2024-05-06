import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SelectDemo() {
  return (
    <Select>
      <SelectTrigger className="w-[180px] ">
        <SelectValue placeholder="Language" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          
          <SelectItem value="apple">English</SelectItem>
          <SelectItem value="banana">French</SelectItem>
          <SelectItem value="blueberry">Arabic</SelectItem>
          <SelectItem value="grapes">Tamazight</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

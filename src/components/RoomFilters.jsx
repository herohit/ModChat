import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { useSearchParams } from "react-router-dom"

const filters = [
  "All",
  "Popular",
  "Joined",
  "Trending",
  "New",
  "My Rooms",
]

export function RoomFilters() {
  const [searchParams, setSearchParams] = useSearchParams()
  const activeFilter = searchParams.get("filter") || "all"

  const handleChange = (val) => {
    if (val) {
      setSearchParams({ filter: val })
    }
  }

  return (
    <ToggleGroup
      type="single"
      variant={'outline'}
      value={activeFilter}
      onValueChange={(val) => val && handleChange(val)}
      className="overflow-x-scroll"
    >
      {filters.map((filter) => (
        <ToggleGroupItem
          key={filter}
          value={filter.toLowerCase()}
          className="capitalize px-5 data-[state=on]:bg-slate-500 data-[state=on]:text-white transition-all"
        >
          {filter}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  )
}

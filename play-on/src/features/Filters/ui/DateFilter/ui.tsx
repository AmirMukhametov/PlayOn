import { DateToQuery} from "./types"
import { UniversalFilter } from "../UniversalFilter"
import { dateFilterConfig } from "features/Filters/model/config"

interface DateFilterProps {
  onChange: (id: DateToQuery) => void
}

export const DateFilter = ({ onChange }: DateFilterProps) => (
  <UniversalFilter 
    config={dateFilterConfig}
    onChange={onChange}
  />
);
 
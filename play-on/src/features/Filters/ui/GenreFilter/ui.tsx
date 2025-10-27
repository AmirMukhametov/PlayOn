import { genreFilterConfig } from "features/Filters/model/config";
import { UniversalFilter } from "../UniversalFilter";

interface GenreFilterProps {
  onChange: (id: number | null) => void;
}

export const GenreFilter = ({ onChange }: GenreFilterProps) => (
  <UniversalFilter 
    config={genreFilterConfig}
    onChange={onChange}
  />
);


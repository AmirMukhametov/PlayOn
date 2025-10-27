import { countryFilterConfig } from "features/Filters/model/config";
import { UniversalFilter } from "../UniversalFilter";

interface CountryFilterProps {
  onChange: (id: number | null) => void;
}

export const CountryFilter = ({ onChange }: CountryFilterProps) => (
  <UniversalFilter 
    config={countryFilterConfig}
    onChange={onChange}
  />
);

import { useMemo } from "react";
import { Select } from "shared/ui/Select";
import { BaseFilterOption, FilterConfig } from "shared/ui/Select/types";

interface UniversalFilterProps<T> {
  config: FilterConfig<T>;
  onChange: (value: T) => void;
}

export const UniversalFilter = <T,>({ config, onChange }: UniversalFilterProps<T>) => {
  const { data = [], isLoading } = config.queryHook?.() || { data: [], isLoading: false };

  const options: BaseFilterOption[] = useMemo(() => {
    const baseOptions = config.staticData || 
      data.map(item => ({
        id: item.id,
        label: item.country || item.genre || item.date || item.toString()
      }));

    return config.allOptionLabel 
      ? [{ id: null, label: config.allOptionLabel }, ...baseOptions]
      : baseOptions;
  }, [data, config.staticData, config.allOptionLabel]);

  const handleClick = (value: string) => {
    const transformedValue = config.transformValue(value, config.allOptionLabel);
    onChange(transformedValue);
  };

  if (isLoading) return "Загрузка";

  return (
    <Select 
      data={options} 
      name={config.name} 
      onClick={handleClick}
    />
  );
};
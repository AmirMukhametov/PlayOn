import { CountryFilter } from "../../features/Filters/ui/CountryFilter"
import { GenreFilter } from "../../features/Filters/ui/GenreFilter"
import { DateFilter } from "../../features/Filters/ui/DateFilter"
import { UpdateFilters, useFilters } from "features/Filters"
import { FilmList } from "shared/ui/FilmList"
import { FilmPreview, Filtered } from "entities/filmCollection/types"

import styles from './styles.module.css'
import { Loader } from "shared/ui/Loader/ui"

interface IFilterPanel {
    filterObj: UpdateFilters
}

export const FilterPanel = ({ filterObj } : IFilterPanel) => {
    const { data, isLoading, setFilters, filters } = useFilters(filterObj)
    const updateFilters = (newPart: Partial<Filtered>) => {
        const newFilters = { ...filters, ...newPart }
        setFilters(newFilters)
    }
    return (
        <div>
            <div className={styles.panel}>
                <DateFilter onChange={(date) => updateFilters({ yearFrom: date.yearFrom, yearTo: date.yearTo })} />
                <CountryFilter onChange={(id) => updateFilters({ countries: [id] })} />
                <GenreFilter onChange={(id) => updateFilters({ genres: [id] })} />
            </div>
            <FilmList list={data ?? []} />
            
        </div>
    )
}
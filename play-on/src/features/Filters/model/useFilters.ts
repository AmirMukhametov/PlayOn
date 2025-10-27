import { useState } from "react";

import { Filtered } from "entities/filmCollection/types";
import { UseQueryResult } from "@tanstack/react-query";


export type UpdateFilters<T> = (update: Partial<Filtered>) => UseQueryResult<T, Error>

export const useFilters = <T>(queryFunc: UpdateFilters<T>) => {
    const [filters, setFilters] = useState<Filtered>({
        yearFrom: 1000,
        yearTo: 3000,
        genres: [],
        countries: []
    });

    const updateFilters = (newPart: Partial<Filtered>) => {
        setFilters(prev=>({...prev, ...newPart}))
    }

    const {data, isLoading} = queryFunc(filters)
    return{
        data, 
        isLoading,
        filters,
        setFilters: updateFilters
    }
}
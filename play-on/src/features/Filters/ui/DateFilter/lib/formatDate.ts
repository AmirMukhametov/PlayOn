import { DateToQuery } from "../types"

export const formatDate = (date: string): DateToQuery=>{
    let yearFrom = 1000
    let yearTo = 3000 
    const res = Number(date)
    if (!Number.isNaN(res)){
        yearTo = res
        yearFrom = res
    }
    else if (date === "Before the 1950s"){
        yearTo = 1950
    } 
    else if (date === "Released"){}
    else{
        [yearFrom, yearTo] = date.split("-").map(Number)
    }
    return {yearFrom, yearTo}
}
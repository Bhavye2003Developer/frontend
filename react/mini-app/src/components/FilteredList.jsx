import React, { useEffect, useState } from "react"

// filtered search

function FilteredList() {

    const [search, setSearch] = useState("")
    const [searchedCountries, setSearchedCountries] = useState([""])

    useEffect(() => {
        getSearches()
    }, [search])

    const countries = ["United States", "Canada", "United Kingdom", "Germany", "France", "Japan", "Australia", "Brazil", "India", "China"];

    function getSearches() {
        if (search) {
            const allSearchedCountries = []
            countries.forEach((country) => {
                if (country.toLowerCase().indexOf(search.toLowerCase()) !== -1) {
                    allSearchedCountries.push(country)
                }
            })
            setSearchedCountries(allSearchedCountries)
        }
        else {
            setSearchedCountries([""])
        }
    }

    return (
        <center>
            <input type="text" name="search" id="search" onChange={(e) => {
                setSearch(e.target.value)
            }} />
            <div className="search">
                <ul style={{
                    listStyleType: "none"
                }}>
                    {searchedCountries.map(searched => <li key={searched}>{searched}</li>)}
                </ul>
            </div>

        </center>
    )
}

export default FilteredList
package org.kd.server.repository

import org.kd.server.model.Capital
import org.kd.server.model.Country
import org.springframework.stereotype.Repository

import java.util.Arrays

@Repository
class CountryRepository {

    val all: List<Country>
        get() = Arrays.asList(
            Country("Poland", Capital("Warszawa")),
            Country("Germany", Capital("Berlin")),
            Country("Chad", Capital("Njamena"))
        )
}

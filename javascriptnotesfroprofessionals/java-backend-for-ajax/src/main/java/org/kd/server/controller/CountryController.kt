package org.kd.server.controller

import org.kd.server.model.Country
import org.kd.server.repository.CountryRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpHeaders
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class CountryController : Controller() {

    @Autowired
    private val countryRepository: CountryRepository? = null

    val all: List<Country>
        @GetMapping("/countries")
        get() = countryRepository!!.getAll()

    @GetMapping("/country/{countryId}")
    fun getOneCountry(@PathVariable countryId: String): Country {
        return countryRepository!!.getAll().get(Integer.valueOf(countryId))
    }

}

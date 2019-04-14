package org.kd.server.service

import org.kd.server.model.Country
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service
import org.springframework.web.client.RestTemplate

import java.util.Arrays

@Service
class CountryService {

    @Autowired
    private val countryRestTemplate: RestTemplate? = null

    val allCountries: List<Country>
        get() = Arrays.asList(*countryRestTemplate!!.getForObject("/countries", Array<Country>::class.java)!!)

    val firstCountry: Country?
        get() = countryRestTemplate!!.getForObject("/country/0", Country::class.java)
}

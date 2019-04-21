package org.kd.server

import org.junit.Test
import org.junit.runner.RunWith
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.boot.test.web.client.TestRestTemplate
import org.springframework.http.HttpStatus
import org.springframework.test.context.junit4.SpringRunner
import kotlin.test.assertEquals
import kotlin.test.assertNotNull
import kotlin.test.assertTrue

@RunWith(SpringRunner::class)
@SpringBootTest(
    classes = arrayOf(CountryServer::class),
    webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT
)
class ServerTest {

    @Autowired
    lateinit var testRestTemplate: TestRestTemplate

    @Test
    fun whenCalled_shouldReturnCountriesAndCapitals() {
        val result = testRestTemplate
            .getForEntity("/countries", String::class.java)

        assertNotNull(result)
        assertEquals(result?.statusCode, HttpStatus.OK)

        var expectedCountries = arrayListOf("Poland", "Chad", "Germany")
        var expectedcapitals = arrayListOf("Warszawa", "Njamena", "Berlin")

        for (country in  expectedCountries){
            assertTrue(result?.body.contains(country))
        }

        for (capital in  expectedcapitals){
            assertTrue(result?.body.contains(capital))
        }
    }
}
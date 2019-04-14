package org.kd.server.model

class Country {
    var name: String? = null
    var capital: Capital? = null

    private constructor() {}

    constructor(name: String, capital: Capital) {
        this.name = name
        this.capital = capital
    }

    override fun toString(): String {
        return "Country{" +
                "name='" + name + '\''.toString() +
                ", capital=" + capital +
                '}'.toString()
    }
}

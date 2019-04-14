package org.kd.server.model

class Capital {
    var name: String? = null

    constructor() {}

    constructor(name: String) {
        this.name = name
    }

    override fun toString(): String {
        return "Capital{name='$name'}"
    }
}

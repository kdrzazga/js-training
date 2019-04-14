package org.kd.server.controller

import java.sql.Timestamp
import java.util.Date

internal class ControllerHelper {

    private var initialId = 100

    fun generateId(): String {
        initialId++

        val date = Date()
        val ts = Timestamp(date.time)
        return java.lang.Long.valueOf(initialId.toLong()).toString() + ts.time
    }
}

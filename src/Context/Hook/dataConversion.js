export const DataConversion = (value) => {
    console.log("value", value)
    return (
        {
            "stay": {
                "arrivalDate": new Date(`${value.arrivalDate}`).toISOString(),
                "departureDate": new Date(`${value.departureDate}`).toISOString()
            },
            "room": {
                "roomSize": value.roomSize,
                "roomQuantity": value.roomQuantity
            },
            "firstName": value.firstName,
            "lastName": value.lastName,
            "email": value.email,
            "phone": value.phone,
            "addressStreet": {
                "streetName": value.streetName,
                "streetNumber": value.streetNumber
            },
            "addressLocation": {
                "zipCode": value.zipCode,
                "state": value.state,
                "city": value.city
            },
            "extras": [
                "extraBreakfast",
                "extraTV",
                "extraWiFi",
                "extraParking",
                "extraBalcony"
            ],
            "payment": value.payment,
            "note": "idm lab test",
            "tags": [
                "hotel",
                "booking",
                "labtest"
            ],
            "reminder": true,
            "newsletter": true,
            "confirm": false
        }
    )
}


export const editDataConversion = (value) => {
    console.log('editDataConversion', value)
    return (
        {
            'arrivalDate': value.stay.arrivalDate,
            departureDate: value.stay.departureDate,
            roomSize: value.room.roomSize,
            roomQuantity: value.room.roomQuantity,
            firstName: value.firstName,
            lastName: value.lastName,
            streetName: value.addressStreet.streetName,
            email: value.email,
            phone: value.phone,
            streetNumber: value.addressStreet.streetNumber,
            zipCode: value.addressLocation.zipCode,
            state: value.addressLocation.state,
            city: value.addressLocation.city,
            extras: value.extras,
            note: value.note,
            tags: value.tags,
            reminder: value.reminder,
            confirm: value.confirm,
            newsletter: value.newsletter,
            payment: value.payment,
        }
    )

}
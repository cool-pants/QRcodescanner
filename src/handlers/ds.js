let est = [
    {"est_name": {
        uid: {
            vehicle: vehicle,
            person: user,
            entry: 'none',
            exit: 'none'
        },
        
    }}
]

let vehicle = []
let owner = {
    uid: {
        vehicle: vehicle,
        users: [user],
        ts: {
            est: est,
            entry: est.est.uid.entry,
            exit: est.est.uid.exit,
        }
    }
}

let user = {
    name: "",
    isowner: false,
    license_number: "",
    aadhar_number: "",
}
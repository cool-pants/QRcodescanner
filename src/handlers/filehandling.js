
import {v4 as uuidv4} from 'uuid'


let db_data = {users:[],owners:{}, vehicles:[], ests:{
    'c4927b23-e3a6-4d79-b1da-b3f23a2e8943': {
        name: 'VIT Chennai',
        person: 'xyz',
        ts: []
    },
}};

let logged_uid = '';

export function addUser(data){
    db_data.users.push(data);

}

export function addOwner(data){
    let uid = uuidv4().toString()
    db_data.owners[uid] = data;
    return uid;
}

export function addVehicle(data){
    if(data in db_data.vehicles){
        db_data.vehicles.push(data);
    }

}

export function addEst(data){
    db_data.ests.push(data);

}

export function getUser(name){
    let ret = None
    for (let item in db_data.users){
        if (item.name == name)
            ret = item
    }
    return ret
}

export function getUidUser(uid){
    console.log(db_data.owners)
    logged_uid = uid;
    return (uid in db_data.ests)
}

export function checkIn(data){
    let d = new Date()
    db_data.ests[logged_uid].ts.push({
        data: data,
        enter: d.toTimeString()
    })
    return 0;
}

export function getts(){
    return (db_data.ests[logged_uid].ts);
}

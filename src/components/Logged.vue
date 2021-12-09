<template>
    <p style="align:center;">{{ selected ? 'Login' : 'Register' }}</p>
    <br>
    <div v-if="selected">
        <input v-model="uid" placeholder="Enter uid to login"></input><br>
        <button @click="checkLog">Login</button>
    </div>
    <div v-else>
        <input v-model="vehicle" placeholder="Enter vehicle name"></input><br>
        <input v-model="uname" placeholder="Enter Name"></input><br>
        <input v-model="isowner" placeholder="Enter if Owner True/False"></input><br>
        <input v-model="license_number" placeholder="Enter license number"></input><br>
        <input v-model="aadhar_number" placeholder="Enter aadhar number"></input><br>
        <button @click="register">Register</button>

        <p>{{ uid }}</p>
    </div>
    <button @click="toggleSelected">{{ selected ? 'Register' : 'Login' }}</button>

    <p v-if="error">User not found error!!!</p>
    
</template>

<script>
import {getUidUser, addUser, addOwner, addVehicle} from '../handlers/filehandling';
import { ref } from "vue";
export default {
    
    emits: ['log'],
    
    props: {
        uid: String,
        uname: String,
        isowner: Boolean,
        license_number: String,
        aadhar_number: String,
        vehicle: String,
    },
    
    setup(props, context) {

        const selected = ref(true);
        const error = ref(false);
        
        const checkLog = () => {
            let log = getUidUser(props.uid);
            if(log){
                context.emit('log')
            }
            else{
                error.value = true;
            }
        };
        
        const toggleSelected = () => {
            selected.value = !selected.value;
        }

        const register = () => {
            addUser({name: props.uname, isowner:props.isowner, license_number: props.license_number, aadhar_number: props.aadhar_number})
            addVehicle(props.vehicle)
            console.log(props.uname)
            props.uid = addOwner({
                vehicle:props.vehicle,
                users: [{name: props.uname}],
                ts: []
            })
            toggleSelected();
            // context.emit('log')
        }

        return {
            selected,
            error,
            checkLog,
            toggleSelected,
            register,
        }
    }
}
</script>
<template>
    <div class="modal">
        <div class="modal-content">
            <div className="modal-header">
                <h4 className="modal-title">Add User</h4>
            </div>
            <qrcode-stream @decode="onDecode"></qrcode-stream>
            <button @click="$emit('close')">Close</button>
        </div>
    </div>
</template>

<script>
import { QrcodeStream } from 'vue3-qrcode-reader';
import { checkIn } from '../handlers/filehandling';
export default {
    name: 'QRModal',
    emits: [ "close" ],
    setup(){
        const onInit = async (promise) => {
            try {
                await promise;
            } catch (e) {
                console.log(e);
            }
        };
        const onDecode = (decodedString) => {
            let dat = JSON.parse(decodedString)
            checkIn(dat);
            console.log(dat)
        };
        return {
            onInit,
            onDecode
        }
    },
    components: {
        QrcodeStream,
    }
}
</script>
<style scoped>
    @import '../assets/qrmodal.css'
</style>


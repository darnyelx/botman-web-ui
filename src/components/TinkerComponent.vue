<template>
    <div class="card card-success direct-chat direct-chat-success shadow">
        <div class="card-header">
            <h3 class="card-title">RDB® BOT</h3>


        </div>
         <!-- /.card-header -->
        <div class="card-body">
            <!-- Conversations are loaded here -->
            <div class="direct-chat-messages" id="messageBody">
                <!-- Message. Default to the left -->
                <div class="direct-chat-msg" v-for="message in messages" :class="{'right': message.isMine}">
                    <!-- /.direct-chat-infos -->
                    <!-- /.direct-chat-img -->
                    <div class="direct-chat-text" >
                        <div v-html="message.text">
                            {{ message.text }}
                        </div>
                        <div v-if="message.original.type === 'actions'" style="display: flex;flex-flow: column;padding:20px">
                            <div class="btn btn-primary" v-for="action in message.original.actions"
                                 @click="performAction(action.value, message.original,action.captchaVerify)" style="margin-bottom: 10px">
                                <img v-if="action.image_url" :src="action.image_url" style="max-height: 25px" />
                                {{ action.text }}
                            </div>
                        </div>
                        <img class="ChatLog__message__image" :src="message.attachment.url" v-if="message.attachment.type === 'image'" />
                        <video controls class="ChatLog__message__image" height="160" v-if="message.attachment.type === 'video'" autoplay="">
                            <source :src="message.attachment.url" type="video/mp4">
                        </video>
                        <audio controls class="ChatLog__message__image" v-if="message.attachment.type === 'audio'" autoplay="">
                            <source :src="message.attachment.url" type="audio/mp3">
                        </audio>
                    </div>

                    <!-- /.direct-chat-text -->
                </div>
                <!-- /.direct-chat-msg -->

                <!-- Message to the right -->

                <!-- /.direct-chat-msg -->
            </div>
            <!--/.direct-chat-messages-->

            <!-- Contacts are loaded here -->

            <!-- /.direct-chat-pane -->
        </div>
        <!-- /.card-body -->
        <div class="card-footer">
                <div class="input-group">
                            <input type="file" class="ChatAttachment" hidden id="attachment" value="Attachment" />

                    <input type="text" name="message" @keyup.enter="sendMessage" v-model="newMessage"  placeholder="Type Message ..." class="form-control">
                    <span class="input-group-append">
                      <button type="text" v-on:click="sendMessage()"  class="btn btn-success">Send</button>

                    </span>
                </div>
        </div>
        <!-- /.card-footer-->
    </div>
<!--    <div>-->
<!--        <div class="arrow"></div>-->
<!--        <ul class="ChatLog">-->
<!--            <li class="ChatLog__entry" v-for="message in messages" :class="{'ChatLog__entry_mine': message.isMine}">-->
<!--                <img class="ChatLog__avatar" src="/logo.png" />-->
<!--                <p class="ChatLog__message">-->
<!--                    {{ message.text }}-->
<!--                    <img class="ChatLog__message__image" :src="message.attachment.url" v-if="message.attachment.type === 'image'" />-->
<!--                    <video controls class="ChatLog__message__image" height="160" v-if="message.attachment.type === 'video'" autoplay="">-->
<!--                        <source :src="message.attachment.url" type="video/mp4">-->
<!--                    </video>-->
<!--                    <audio controls class="ChatLog__message__image" v-if="message.attachment.type === 'audio'" autoplay="">-->
<!--                        <source :src="message.attachment.url" type="audio/mp3">-->
<!--                    </audio>-->
<!--                </p>-->

<!--                <div v-if="message.original.type === 'actions'">-->
<!--                    <div class="btn" v-for="action in message.original.actions"-->
<!--                         @click="performAction(action.value, message.original)">-->
<!--                        <img v-if="action.image_url" :src="action.image_url" style="max-height: 25px" />-->
<!--                        {{ action.text }}-->
<!--                    </div>-->
<!--                </div>-->
<!--            </li>-->
<!--        </ul>-->

<!--        <input type="file" class="ChatAttachment" id="attachment" value="Attachment" />-->
<!--        <label for="attachment">-->
<!--            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17"><path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"></path></svg> <span>Attachment</span>-->
<!--        </label>-->
<!--        <input type="text" class="ChatInput" @keyup.enter="sendMessage" v-model="newMessage" placeholder="Enter a message">-->
<!--    </div>-->
</template>

<style>

    @import "https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback";
    @import "../plugins/fontawesome-free/css/all.min.css";
    @import "../dist/css/adminlte.min.css";

    /*input.ChatAttachment {*/
    /*    width: 0.1px;*/
    /*    height: 0.1px;*/
    /*    opacity: 0;*/
    /*    overflow: hidden;*/
    /*    position: absolute;*/
    /*    z-index: -1;*/
    /*}*/
    /*.ChatAttachment+label {*/
    /*    cursor: pointer;*/
    /*    height: 25px;*/
    /*    display: inline-block;*/
    /*    border-radius: 5px;*/
    /*    background-color: white;*/
    /*    border: none;*/
    /*    padding: 10px;*/
    /*}*/
    /*input.ChatInput {*/
    /*    width: 300px;*/
    /*    height: 25px;*/
    /*    border-radius: 5px;*/
    /*    border: none;*/
    /*    padding: 10px;*/
    /*}*/

    /*.btn {*/
    /*    display: block;*/
    /*    padding: 5px;*/
    /*    border-radius: 5px;*/
    /*    margin: 5px;*/
    /*    min-width: 100px;*/
    /*    background-color: lightgrey;*/
    /*}*/

    /*ul.ChatLog {*/
    /*    list-style: none;*/
    /*}*/

    /*.ChatLog {*/
    /*    max-width: 20em;*/
    /*    margin: 0 auto;*/
    /*}*/
    /*.ChatLog .ChatLog__entry {*/
    /*    margin: .5em;*/
    /*}*/

    /*.ChatLog__entry {*/
    /*    display: flex;*/
    /*    flex-direction: row;*/
    /*    align-items: flex-end;*/
    /*    max-width: 100%;*/
    /*}*/

    /*.ChatLog__entry.ChatLog__entry_mine {*/
    /*    flex-direction: row-reverse;*/
    /*}*/

    /*.ChatLog__avatar {*/
    /*    flex-shrink: 0;*/
    /*    flex-grow: 0;*/
    /*    z-index: 1;*/
    /*    height: 50px;*/
    /*    width: 50px;*/
    /*    border-radius: 25px;*/

    /*}*/

    /*.ChatLog__entry.ChatLog__entry_mine*/
    /*.ChatLog__avatar {*/
    /*    display: none;*/
    /*}*/

    /*.ChatLog__entry .ChatLog__message {*/
    /*    position: relative;*/
    /*    margin: 0 12px;*/
    /*}*/

    /*.ChatLog__entry .ChatLog__message__image {*/
    /*    max-width: 100%;*/
    /*}*/

    /*.ChatLog__entry .ChatLog__message::before {*/
    /*    position: absolute;*/
    /*    right: auto;*/
    /*    bottom: .6em;*/
    /*    left: -12px;*/
    /*    height: 0;*/
    /*    content: '';*/
    /*    border: 6px solid transparent;*/
    /*    border-right-color: #ddd;*/
    /*    z-index: 2;*/
    /*}*/

    /*.ChatLog__entry.ChatLog__entry_mine .ChatLog__message::before {*/
    /*    right: -12px;*/
    /*    bottom: .6em;*/
    /*    left: auto;*/
    /*    border: 6px solid transparent;*/
    /*    border-left-color: #08f;*/
    /*}*/

    /*.ChatLog__message {*/
    /*    background-color: #ddd;*/
    /*    padding: .5em;*/
    /*    border-radius: 4px;*/
    /*    font-weight: lighter;*/
    /*    max-width: 70%;*/
    /*}*/

    /*.ChatLog__entry.ChatLog__entry_mine .ChatLog__message {*/
    /*    border-top: 1px solid #07f;*/
    /*    border-bottom: 1px solid #07f;*/
    /*    background-color: #08f;*/
    /*    color: #fff;*/
    /*}*/
</style>

<script>
    const axios = require('axios');
    import {load} from "recaptcha-v3";

    export default {
        props: {
            apiEndpoint: {
                default: '/botman',
            },
            userId: {
                default: +(new Date()),
            },
        },

        data() {
            return {
                messages: [],
                newMessage: null
            };
        },

        mounted() {
            let control = document.getElementById("attachment");
            control.addEventListener("change", () => {
                const file = control.files[0];
                if (file) {
                    let type = file.type.split('/')[0];
                    const reader = new FileReader();

                    if (type !== 'video' && type !== 'audio' && type !== 'image') {
                        type = 'file';
                    }

                    reader.addEventListener("load", () => {
                        this._addMessage(null, {
                            type,
                            url: reader.result
                        }, true);

                        this.callAPI(null, false, type);

                        control.value = '';
                    }, false);

                    reader.readAsDataURL(file);
                }

            }, false);
            this.callAPI("rdb", false);

        },

        updated() {
            let objDiv = document.getElementById("messageBody");
            objDiv.scrollTop = objDiv.scrollHeight;
        },

        methods: {

            parseMessage(text){
                console.log(typeof text);
                if (typeof text == "string"){

                     text = text.replace(/##link.*(?=.*goto='(.*?)')(?=.*name='(.*?)').*?##/gi,'<a target="_blank" href=\"$1\">$2</a>');
                    return text;
                }
                return text;
            },

            callAPI(text, interactive = false, attachment = null, callback,captcha_response) {
                let data = new FormData();
                const postData = {
                    driver: 'web',
                    userId: this.userId,
                    message: text,
                    captcha_response,
                    attachment,
                    interactive,
                    attachment_data: document.getElementById('attachment').files[0]
                };

                Object.keys(postData).forEach(key => data.append(key, postData[key]));

                axios.post(this.apiEndpoint, data).then(response => {
                    const messages = response.data.messages || [];
                    messages.forEach(msg => {
                        this._addMessage(msg.text, msg.attachment, false, msg);
                    });

                    if (callback) {
                        callback(response.data);
                    }

                });
            },

            async performAction(value, message,isCaptchaVerification) {

                let captcha_response;
                if(isCaptchaVerification){
                    try{
                        let  recaptcha        =    await load('6LcOh7QZAAAAAF-ZopcjRqThzJ1kW9QtVxRfLzm-');
                        captcha_response      =    await recaptcha.execute('submit');
                    }catch (e) {
                        console.log(e);
                    }
                }

                this.callAPI(value, true, null, (response) => {
                    message.actions = null;
                },captcha_response);
            },

            _addMessage(text, attachment, isMine, original = {}) {
                this.messages.push({
                    'isMine': isMine,
                    'user': isMine ? '👨' : '🤖',
                    'text': this.parseMessage(text),
                    'original': original,
                    'attachment': attachment || {},
                });
            },

            sendMessage() {
                let messageText = this.newMessage;
                this.newMessage = '';
                if (messageText === 'clear') {
                    this.messages = [];
                    return;
                }

                //Don't send empty messages
                if (messageText == ""){
                    return;
                }

                this._addMessage(messageText, null, true);
                this.callAPI(messageText);
            }
        }
    }
</script>

import { AfterViewChecked, Component, ElementRef, Input, OnInit, ViewChild } from "@angular/core";
import { Messages } from "../models/messages.model";
import { ChatMessagesService } from "../services/chat-messages.service";
import { GenericResponseModel } from "../models/genericResponse.model";

@Component({
    "selector":"app-chat-messages",
    "templateUrl":"./chat-messages.component.html",
    "styleUrl":"./chat-messages.component.css"
})

export class ChatMessagesComponent implements OnInit, AfterViewChecked {
    public isInvalidMessage: boolean = false;
    public isToShowInitialMessage: boolean = true;
    @Input() userId !: number;

    constructor(private chatMessagesService: ChatMessagesService){}
;

    public allMessages: Array<Messages> = [];

    ngOnInit(): void {
        this.chatMessagesService.startSession(this.userId)
            .subscribe( (response: GenericResponseModel) => {
                const messages: Array<Messages> = response.result["messages"];
                if(messages.length > 0){
                    this.isToShowInitialMessage = false;
                    this.allMessages = messages;
                    this.scrollToBottom();
                };
        });

        document.querySelector("#user-input").addEventListener('keypress', (input) => {
            if(input["key"] === 'Enter'){
                this.sendMessage();
            };
        });
    };

    public sendMessage(): void{

        let textArea = document.getElementById('user-input');
        let message = textArea["value"];
        console.log("message: " + message);

        if(message.trim().length === 0){
            this.isInvalidMessage = true;
        } else {
            this.isInvalidMessage = false;
            this.addThreeDotsInInterface(message);
            textArea["value"] = "";
            this.chatMessagesService.sendMessage(this.userId, message)
                .subscribe( (response: GenericResponseModel) => {
                    const messages = response.result["messages"];
                    if(messages.length > 0){
                        this.allMessages = messages;
                        this.isToShowInitialMessage = false;
                        this.scrollToBottom();
                    };
            })
        };
    };

    public finishSession(){
        console.log("Efetuando finishSession")
        this.chatMessagesService.finishSession(this.userId).subscribe(
            (response: GenericResponseModel) => {
                if(response.httpCode === 200){
                    window.location.reload();
                }
            }
        )
    };

    addThreeDotsInInterface(userMessage): void {
        this.isToShowInitialMessage = false;
        this.allMessages.push(
            {
                isBot: false,
                isHuman : true,
                text: userMessage
            },
            {
                isBot: true,
                isHuman: false,
                text: "Gerando resposta..."
            }
        );
        this.scrollToBottom();
    };

    scrollToBottom(): void {

        const messagesDiv = document.querySelector('.messages-container');
        if (messagesDiv) {
          messagesDiv.scrollTop = messagesDiv.scrollHeight;
        };
    }

    ngAfterViewChecked(): void {
        this.scrollToBottom();
    }

    
    
}
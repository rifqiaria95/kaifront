<template>
    <!-- Floating Chatbot Button -->
    <button class="chatbot-button" @click="toggleChat">
        <i class="fas fa-question"></i>
        Tanya Sheila
    </button>

    <!-- Chat Popup -->
    <div class="chat-popup" :class="{ show: isShowChat }" ref="chatPopup">
        <div class="chat-header">
            <h5>Hai! Saya Sheila, asisten pribadi Anda. Ada yang bisa saya bantu hari ini?</h5>
            <button class="close-btn" @click="closeChat">
                <i class="fas fa-times"></i>
            </button>
        </div>
        
        <div class="chat-body" ref="chatBody">
            <!-- Chat Messages -->
            <div v-if="chatStore.chatMessages.length > 0" class="chat-messages">
                <div 
                    v-for="(message, index) in chatStore.chatMessages" 
                    :key="index" 
                    class="message-container"
                    :class="{ 'user-message': message.role === 'user', 'bot-message': message.role === 'bot' }"
                >
                    <div class="message-bubble">
                        <div class="message-content">{{ message.message }}</div>
                        <div class="message-time">
                            {{ formatTime(message.timestamp) }}
                        </div>
                    </div>
                </div>
            </div>

            <!-- Typing Indicator -->
            <div v-if="chatStore.isTyping" class="typing-indicator">
                <div class="typing-bubble">
                    <div class="typing-dots">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>

            <!-- Quick Replies (hanya tampil jika belum ada chat) -->
            <div v-if="chatStore.chatMessages.length === 0" class="quick-replies">
                <button 
                    class="quick-reply-btn" 
                    @click="handleQuickReply('Bagaimana cara mendaftar program pada website ini?')"
                >
                    <i class="fas fa-globe me-2"></i> Bagaimana cara mendaftar program pada website ini?
                </button>
                <button 
                    class="quick-reply-btn" 
                    @click="handleQuickReply('Program apa saja yang tersedia?')"
                >
                    <i class="fas fa-list me-2"></i> Program apa saja yang tersedia?
                </button>
                <button 
                    class="quick-reply-btn" 
                    @click="handleQuickReply('Apakah program yang tersedia dipungut biaya?')"
                >
                    <i class="fas fa-server me-2"></i> Apakah program yang tersedia dipungut biaya?
                </button>
            </div>
        </div>
        
        <div class="chat-input-container">
            <div class="chat-input-wrapper">
                <input 
                    type="text" 
                    class="chat-input" 
                    v-model="chatMessage"
                    @keypress="handleKeyPress"
                    placeholder="Ketik pesan Anda..."
                    :disabled="chatStore.chatLoading"
                >
                <button 
                    class="send-btn" 
                    @click="handleSendMessage"
                    :disabled="!chatMessage.trim() || chatStore.chatLoading"
                >
                    <i class="fas fa-paper-plane" v-if="!chatStore.chatLoading"></i>
                    <i class="fas fa-spinner fa-spin" v-else></i>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick, watch } from 'vue'
import { useChatbotStore } from '~/stores/chatbot'

// Store
const chatStore = useChatbotStore()

// Reactive data
const isShowChat = ref(false)
const chatMessage = ref('')
const chatPopup = ref(null)
const chatBody = ref(null)

// Methods
const toggleChat = () => {
    isShowChat.value = !isShowChat.value
}

const closeChat = () => {
    isShowChat.value = false
}

const handleQuickReply = async (message) => {
    chatMessage.value = message
    await handleSendMessage()
}

const handleSendMessage = async () => {
    const message = chatMessage.value.trim()
    if (message && !chatStore.chatLoading) {
        try {
            await chatStore.sendChatMessage(message)
            chatMessage.value = ''
            await scrollToBottom()
        } catch (error) {
            console.error('Error sending message:', error)
        }
    }
}

const handleKeyPress = (e) => {
    if (e.key === 'Enter' && chatMessage.value.trim() && !chatStore.chatLoading) {
        handleSendMessage()
    }
}

const formatTime = (timestamp) => {
    const date = new Date(timestamp)
    return date.toLocaleTimeString('id-ID', { 
        hour: '2-digit', 
        minute: '2-digit' 
    })
}

const scrollToBottom = async () => {
    await nextTick()
    if (chatBody.value) {
        chatBody.value.scrollTop = chatBody.value.scrollHeight
    }
}

const handleClickOutside = (e) => {
    if (chatPopup.value && !chatPopup.value.contains(e.target) && !e.target.closest('.chatbot-button')) {
        closeChat()
    }
}

// Watch for new messages to auto-scroll
watch(() => chatStore.chatMessages.length, () => {
    scrollToBottom()
})

watch(() => chatStore.isTyping, () => {
    scrollToBottom()
})

// Lifecycle hooks
onMounted(() => {
    document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>

    /* Floating Chatbot Button */
    .chatbot-button {
        position: fixed;
        bottom: 100px;
        right: 20px;
        background-color: #C75142;
        color: white;
        border: none;
        border-radius: 50px;
        padding: 15px 25px;
        font-size: 16px;
        font-weight: 500;
        cursor: pointer;
        box-shadow: 0 4px 12px rgba(199, 81, 66, 0.3);
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        z-index: 1000;
        display: flex;
        align-items: center;
        gap: 8px;
        transform: scale(1);
    }

    .chatbot-button:hover {
        background-color: #d45a48;
        transform: translateY(-3px) scale(1.05);
        box-shadow: 0 8px 25px rgba(199, 81, 66, 0.4);
    }

    .chatbot-button:active {
        transform: translateY(-1px) scale(0.98);
        transition: all 0.1s ease;
    }

    /* Chat Popup */
    .chat-popup {
        position: fixed;
        bottom: 90px;
        right: 20px;
        width: 350px;
        height: 500px;
        background-color: white;
        border-radius: 12px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
        display: flex;
        flex-direction: column;
        z-index: 1001;
        overflow: hidden;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        opacity: 0;
        visibility: hidden;
        transform: translateY(30px) scale(0.8);
        pointer-events: none;
    }

    .chat-popup.show {
        opacity: 1;
        visibility: visible;
        transform: translateY(0) scale(1);
        pointer-events: auto;
    }

    /* Chat Header */
    .chat-header {
        background-color: #C75142;
        color: white;
        padding: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .chat-header h5 {
        font-family: 'Poppins', sans-serif;
        color: white;
        margin: 0;
        font-size: 16px;
        font-weight: 500;
        line-height: 1.4;
    }

    .close-btn {
        background: none;
        border: none;
        color: white;
        font-size: 20px;
        cursor: pointer;
        padding: 0;
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: background-color 0.2s;
    }

    .close-btn:hover {
        background-color: rgba(255, 255, 255, 0.2);
    }

    /* Chat Body */
    .chat-body {
        flex: 1;
        padding: 20px;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    /* Chat Messages */
    .chat-messages {
        display: flex;
        flex-direction: column;
        gap: 12px;
    }

    .message-container {
        display: flex;
        width: 100%;
    }

    .message-container.user-message {
        justify-content: flex-end;
    }

    .message-container.bot-message {
        justify-content: flex-start;
    }

    .message-bubble {
        max-width: 80%;
        padding: 12px 16px;
        border-radius: 18px;
        position: relative;
        word-wrap: break-word;
    }

    .user-message .message-bubble {
        background-color: #C75142;
        color: white;
        border-bottom-right-radius: 4px;
    }

    .bot-message .message-bubble {
        background-color: #f1f3f5;
        color: #333;
        border-bottom-left-radius: 4px;
    }

    .message-content {
        font-size: 14px;
        line-height: 1.4;
        margin-bottom: 4px;
    }

    .message-time {
        font-size: 11px;
        opacity: 0.7;
        text-align: right;
    }

    .bot-message .message-time {
        text-align: left;
    }

    /* Typing Indicator */
    .typing-indicator {
        display: flex;
        justify-content: flex-start;
        margin-bottom: 12px;
    }

    .typing-bubble {
        background-color: #f1f3f5;
        border-radius: 18px;
        border-bottom-left-radius: 4px;
        padding: 12px 16px;
        max-width: 80%;
    }

    .typing-dots {
        display: flex;
        gap: 4px;
        align-items: center;
    }

    .typing-dots span {
        width: 6px;
        height: 6px;
        background-color: #666;
        border-radius: 50%;
        animation: typing 1.4s ease-in-out infinite;
    }

    .typing-dots span:nth-child(2) {
        animation-delay: 0.2s;
    }

    .typing-dots span:nth-child(3) {
        animation-delay: 0.4s;
    }

    @keyframes typing {
        0%, 60%, 100% {
            transform: translateY(0);
            opacity: 0.4;
        }
        30% {
            transform: translateY(-10px);
            opacity: 1;
        }
    }

    .quick-replies {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .quick-reply-btn {
        background-color: #f8f9fa;
        border: 1px solid #dee2e6;
        border-radius: 8px;
        padding: 12px 16px;
        text-align: left;
        font-size: 14px;
        color: #495057;
        cursor: pointer;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        transform: scale(1);
        position: relative;
        overflow: hidden;
    }

    .quick-reply-btn:hover {
        background-color: #e9ecef;
        border-color: #C75142;
        color: #C75142;
        transform: translateY(-2px) scale(1.02);
        box-shadow: 0 4px 12px rgba(199, 81, 66, 0.15);
    }

    .quick-reply-btn:active {
        transform: translateY(0) scale(0.98);
        transition: all 0.1s ease;
    }

    /* Chat Input */
    .chat-input-container {
        padding: 15px;
        border-top: 1px solid #dee2e6;
        background-color: #f8f9fa;
    }

    .chat-input-wrapper {
        display: flex;
        gap: 10px;
        align-items: center;
    }

    .chat-input {
        flex: 1;
        border: 1px solid #dee2e6;
        border-radius: 25px;
        padding: 10px 15px;
        font-size: 14px;
        outline: none;
        transition: border-color 0.2s;
    }

    .chat-input:focus {
        border-color: #C75142;
    }

    .chat-input:disabled {
        background-color: #f8f9fa;
        opacity: 0.6;
    }

    .send-btn {
        background-color: #C75142;
        color: white;
        border: none;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        transform: scale(1);
    }

    .send-btn:hover:not(:disabled) {
        background-color: #d45a48;
        transform: scale(1.1);
        box-shadow: 0 2px 8px rgba(199, 81, 66, 0.3);
    }

    .send-btn:active:not(:disabled) {
        transform: scale(0.95);
        transition: all 0.1s ease;
    }

    .send-btn:disabled {
        background-color: #dee2e6;
        cursor: not-allowed;
        transform: scale(1);
    }

    /* Scrollbar styling */
    .chat-body::-webkit-scrollbar {
        width: 4px;
    }

    .chat-body::-webkit-scrollbar-track {
        background: transparent;
    }

    .chat-body::-webkit-scrollbar-thumb {
        background: #dee2e6;
        border-radius: 4px;
    }

    .chat-body::-webkit-scrollbar-thumb:hover {
        background: #C75142;
    }

    /* Responsive */
    @media (max-width: 400px) {
        .chat-popup {
            width: calc(100vw - 40px);
            right: 20px;
            left: 20px;
        }
    }
</style>
const { Client, GatewayIntentBits } = require('discord.js');
const axios = require('axios');
require('dotenv').config();

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] });

client.once('ready', async () => {
    console.log('🟡 BOT ĐANG KẾT NỐI...');
    
    try {
        const channel = await client.channels.fetch('1337029269791969391'); // Thay ID kênh
        if (!channel) return console.error('❌ Không tìm thấy kênh!');
        
        await channel.send('🟢 ĐÃ KẾT NỐI THÀNH CÔNG!');
        
        const message = `
        ┌───────────────────└┐ **𝐖𝐄𝐋𝐂𝐎𝐌𝐄** └┐──────────────────┐
        │
        │   **𝐍𝐀𝐌𝐄𝐁𝐎𝐓**: 𝐘𝐔𝐑𝐈🌸
        │   **𝐕𝐄𝐑𝐒𝐈𝐎𝐍**: 1.0 
        │   **𝐔𝐏𝐃𝐀𝐓𝐄𝐃 𝐎𝐍**: 25/2/2024
        │   **𝐁𝐎𝐓𝐀𝐃𝐌𝐈𝐍**: Mson dz👑 - darkness 
        │
        └──────────────────────────────────────────────────┘ `;
        
        await channel.send(message);
        
        console.log('📡 Đang lấy video từ API...');
        const response = await axios.get('https://subhatde.id.vn/images/videogaixinh');
        const videoUrl = response.data.url;
        
        console.log('✅ Video URL:', videoUrl);
        
        await channel.send({
            content: '🎥 Đây là video từ API:',
            files: [{ attachment: videoUrl, name: 'video.mp4' }]
        });
        
    } catch (error) {
        console.error('❌ Lỗi khi gửi tin nhắn hoặc tải video:', error);
    }
});

client.login('token bot chúng mày');

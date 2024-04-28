/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    MESSAGE_API: 'https://e732-193-41-142-172.ngrok-free.app/api/chat/post_chat_result',
    OPTIONS_API: 'https://e732-193-41-142-172.ngrok-free.app/api/analytics/options',
    MODEL_API: 'https://e732-193-41-142-172.ngrok-free.app/api/analytics/model_responses',
  }
};

export default nextConfig;

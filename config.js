require('dotenv').config(
    process.env.NODE_ENV === 'development' ? { path: `.env.development` } : null
  );
  
  module.exports = {
    NODE_ENV: process.env.NODE_ENV,
    HOST: process.env.HOST,
    PORT: process.env.PORT,
    MYSQL_DATABASE: process.env.MYSQL_DATABASE,
    MYSQL_USERNAME: process.env.MYSQL_USERNAME,
    MYSQL_ROOT_PASSWORD: process.env.MYSQL_ROOT_PASSWORD,
    MYSQL_HOST: process.env.MYSQL_HOST,
    MYSQL_DOCKER_PORT: process.env.DOCKER_PORT,
  
  STMP_HOST:process.env.STMP_HOST || 'smtp.gmail.com',
  STMP_HOST:process.env.STMP_HOS || 'smtp-mail.outlook.com',
  STMP_PORT:process.env.STMP_PORT||587,
  SMTP_USER:process.env.SMTP_USER || 'chisomeleanora@gmail.com',
  SMTP_USE:process.env.SMTP_USE|| 'chisom.ozowara@manifoldcomputers.com',
  SMTP_PASS:process.env.SMTP_PASS || 'srrjfprgxwgstody',
  SMTP_PAS:process.env.SMTP_PAS|| 'Adaeze123@@',
  EMAIL_FRO:process.env.EMAIL_FRO || 'chisom.ozowara@manifoldcomputers.com',
  EMAIL_FROM:process.env.EMAIL_FROM || 'chisomeleanora@gmail.com',
  
  ACCESS_TOKEN_PRIVATE_KEY:process.env.ACCESS_TOKEN_PRIVATE_KEY||'dd26dcb5d27b1a7c9aaac9ad06d4140d79bd53a670657d8eccc252a633dbab1ea69ed319b360c72fe7255348c01be4ab25ce0e51c5efb3295d259b19aa818085',
  REFRESH_TOKEN_PRIVATE_KEY:process.env.REFRESH_TOKEN_PRIVATE_KEY||'1b1e1908ba2c9089587c8e02a100c67e11e4fcddf44a6553e7a49c94c48af60a19b8d67110cc476fc3cde7aa6eba0864e8f8a7ca62e53094ab97ee45629f8e62',

  EMAIL_VERIFICATION_TOKEN:process.env.EMAIL_VERIFICATION_TOKEN||'becfea1d7b6897c95b73a01007ce82f1d3c1862c9159d0e18b3b66bc7dcc1173d69a1c776656844952f9681370061aeb0e4193af51e6576e378b94d919e93d43e239d4a428a1732d42d0b365d859399633a1e6b80ac9f0f105574d9f8dbd01b5eacbecc26a6e4259006eade42c0481c16ad3aedfc16f4244d361e603b62c7b7b',
  RESET_PASSWORD_TOKEN:process.env.RESET_PASSWORD_TOKEN||'34cd3bdfb577cb5bc911f14c8f55e112fe1e47d43d7b959a399e5801b441c186ef84a94e046161e2f99bda12bdde0cceee1fcb3a4282eef82b1a865c90163f16',
  PAYSTACK_SECRET_KEY:process.env.PAYSACK_TOKEN||'sk_test_4260bb1df411991fec9a3a2816261351807253d9',
  FLUTTERWAVE_SECRET_KEY:process.env.FLUTTERWAVE_SECRET_KEY||'FLWSECK_TEST-5b6b5e72ed9a722de888cd2366d991a7-X',
  ADMIN_VERIFY_TOKEN: process.env.ADMIN_VERIFY_TOKEN||'4524f9452f3dc64a593c356a706050b868104550de1a92adc40bd587e1c69653ebd53fc76eb364b2430f93546d2ee48b7f602b8663bafe2fd1978ea17eb78fad',
  //CONF_ENV_FILE: process. env.CONF_ENV_FILE|| "/usr/local/etc/rabbitmq/rabbitmq-env.conf" /usr/local/opt/rabbitmq/sbin/rabbitmq-server, 
  rabbitMQ_URL: process.env.rabbitMQ_URL|| 'amqp://guest:Adaeze90@localhost:5672/',
    
  
    BASE_URL: process.env.BASE_URL,
    BASE_TEST_URL: process.env.BASE_TEST_URL,
  };
  
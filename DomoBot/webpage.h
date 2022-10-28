
#if IMU_ENABLE
  char domobot_html[] PROGMEM = "<!DOCTYPE html><html><head><meta charset=\"utf-8\"><title>DomoBotIMU</title></head><body></body><script src=\"https://domo-bot.s3.eu-west-3.amazonaws.com/domobot_imu_manager.js\"></script></html>";
#else
  char domobot_html[] PROGMEM = "<!DOCTYPE html><html><head><meta charset=\"utf-8\"><title>DomoBot</title></head><body></body><script src=\"https://domo-bot.s3.eu-west-3.amazonaws.com/domobot_manager.js\"></script></html>";
#endif

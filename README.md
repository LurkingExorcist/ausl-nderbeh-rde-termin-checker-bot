# Auslanderbehorde Termin Checker Telegram Bot

## About

This one is kind of rough. But it's looking for a termin at termine-reservieren.de every 15 minutes and sends a screenshot if it finds one.

Also it sends an error message if it catches any errors.

And silently notifies you every hour if it's alive (just to be sure).

## Usage

1. Basically you have to create a bot at https://t.me/BotFather, recieve a token and don't forget to run `/start` at your new one.

2. Find out your ID at https://t.me/userinfobot

2. Create `.env` file at the root of the repository with regarding content:
```
BOT_TOKEN=insert token here
MY_ID=insert your id here
```

3. Run `npm install`

4. Run `npm start` and you will immediately recieve a message from your bot

Just wait some time (maybe a day, maybe two) to receive a message about available termin.

const csu = message.mentions.users.first();
  const msg = args.slice(1).join(" ");
  if (!csu){
      return message.reply('HOJAM BİRİNİ ETİKETLE HOJAMM').then(mesaj => {
          setTimeout(() => mesaj.delete(), 5000)
      })
  }
  if (!msg){
      return message.reply('HOJAMMMM BİR MESAJ YAZ LAO').then(mesaj => {
        setTimeout(() => mesaj.delete(), 5000)
      })
  };

  message.delete()

  const hook = await message.channel
    .createWebhook(csu.username, {
      avatar: csu.displayAvatarURL()
    })
    .then(async a => {
        console.log(a)
      await a.send(msg);
      setTimeout(() => a.delete(), 1000)
    });
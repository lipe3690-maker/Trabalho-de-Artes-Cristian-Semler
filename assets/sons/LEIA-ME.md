# Áudio original e offline

Os oito tipos de efeito (clique, dado, passo, acerto, erro, carta, turno e vitória) e a música ambiente são sintetizados por `AudioContext`, em `script.js`, objeto `audio`.

Não há arquivos externos obrigatórios nem downloads de música. A preferência de efeitos é independente da música, que começa desativada. A reprodução é liberada por interação do jogador e respeita os bloqueios de autoplay do navegador. A música pausa quando a página fica oculta.

Para usar gravações próprias, salve MP3/OGG/WAV nesta pasta e adapte `audio.play`, mantendo a preferência de som, o desbloqueio por gesto e o tratamento de falhas de reprodução. Use apenas arquivos com autorização de uso.

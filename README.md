<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Futebol Total</title>

    <style>
        *{
            margin:0;
            padding:0;
            box-sizing:border-box;
            font-family:Arial, Helvetica, sans-serif;
        }

        body{
            background:#f4f4f4;
            color:#333;
        }

        header{
            background:#0b6623;
            color:white;
            padding:25px;
            text-align:center;
        }

        nav{
            background:#084d1b;
            padding:12px;
            text-align:center;
        }

        nav a{
            color:white;
            text-decoration:none;
            margin:0 15px;
            font-weight:bold;
        }

        nav a:hover{
            color:#ffd700;
        }

        .banner{
            background:url("https://images.unsplash.com/photo-1547347298-4074fc3086f0?auto=format&fit=crop&w=1200&q=80") center/cover;
            height:350px;
            display:flex;
            align-items:center;
            justify-content:center;
            color:white;
            text-shadow:2px 2px 5px black;
            font-size:40px;
            font-weight:bold;
        }

        .container{
            width:90%;
            max-width:1100px;
            margin:30px auto;
        }

        .post{
            background:white;
            margin-bottom:25px;
            padding:20px;
            border-radius:10px;
            box-shadow:0 5px 10px rgba(0,0,0,.1);
        }

        .post h2{
            color:#0b6623;
            margin-bottom:10px;
        }

        .post p{
            line-height:1.6;
            margin-top:10px;
        }

        .btn{
            display:inline-block;
            margin-top:15px;
            padding:10px 18px;
            background:#0b6623;
            color:white;
            text-decoration:none;
            border-radius:6px;
        }

        .btn:hover{
            background:#128437;
        }

        footer{
            background:#0b6623;
            color:white;
            text-align:center;
            padding:20px;
            margin-top:40px;
        }
    </style>
</head>
<body>

<header>
    <h1>⚽ Futebol Total</h1>
    <p>Notícias, curiosidades e paixão pelo futebol.</p>
</header>

<nav>
    <a href="#">Início</a>
    <a href="#">Notícias</a>
    <a href="#">Campeonatos</a>
    <a href="#">Times</a>
    <a href="#">Contato</a>
</nav>

<div class="banner">
    Bem-vindo ao Futebol Total
</div>

<div class="container">

    <div class="post">
        <h2>⚽ Campeonato em alta</h2>
        <p>
            Os campeonatos nacionais seguem emocionando os torcedores com grandes
            partidas, gols espetaculares e disputas acirradas pela liderança.
        </p>
        <a href="#" class="btn">Leia mais</a>
    </div>

    <div class="post">
        <h2>🌍 Futebol Internacional</h2>
        <p>
            As principais ligas da Europa continuam oferecendo jogos de alto nível,
            revelando novos talentos e grandes confrontos entre clubes históricos.
        </p>
        <a href="#" class="btn">Leia mais</a>
    </div>

    <div class="post">
        <h2>⭐ Jogador da Semana</h2>
        <p>
            Toda semana destacamos um atleta que brilhou dentro de campo com gols,
            assistências ou atuações decisivas para sua equipe.
        </p>
        <a href="#" class="btn">Leia mais</a>
    </div>

</div>

<footer>
    <p>© 2026 Futebol Total | Desenvolvido com HTML e CSS</p>
</footer>

</body>
</html>

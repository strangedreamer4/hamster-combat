<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>admin my ass </title>
    <style>
        body {
            margin: 0;
            padding: 0;
            background: #000;
            color: #0f0;
            font-family: 'Courier New', Courier, monospace;
            overflow: hidden;
        }

        .cyber-world {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            position: relative;
        }

        .message {
            font-size: 2rem;
            text-align: center;
            position: relative;
            overflow: hidden;
        }

        @keyframes blink {
            0%, 100% {
                opacity: 0;
            }
            50% {
                opacity: 1;
            }
        }

        @keyframes cyber-effect {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
        }

        .message::after {
            content: "This was so close, but sorry mate 😔";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
            white-space: nowrap;
            animation: cyber-effect 8s linear infinite;
            color: #0f0;
            font-family: 'Courier New', Courier, monospace;
        }
        
        .message {
            animation: blink 1.5s infinite;
        }
    </style>
</head>
<body>
    <div class="cyber-world">
        <div class="message">This was so close, but sorry mate 😔</div>
    </div>
</body>
</html>

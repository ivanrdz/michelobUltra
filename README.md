# El Desafío Cervecero - Arcade 🍺

Un divertido minijuego arcade de navegador estilo "mash-button". ¡Pon a prueba tu velocidad presionando la barra espaciadora para llenar tu vaso de cerveza antes de que se acabe el tiempo y asegura tu lugar en la tabla de clasificación!

## 🎮 ¿Cómo jugar?

1. **Inicio:** Presiona **2 veces** la barra espaciadora de forma rápida para comenzar el turno.
2. **Acción:** Tienes exactamente **10 segundos**. Presiona la barra espaciadora lo más rápido que puedas para hacer subir el nivel de la cerveza en el vaso.
3. **Puntuación:** Al terminar el tiempo, aparecerá una alerta indicando qué porcentaje lograste llenar.
4. **Competencia:** El sistema guarda automáticamente los puntajes de la sesión y actualiza la tabla del **TOP 5 CHELEROS**.

## 🛠️ Tecnologías y Recursos

Este proyecto está construido con tecnologías web estáticas, sin necesidad de procesos de compilación (build steps):

* **HTML5:** Estructura de la interfaz del Arcade.
* **CSS3:** Estilos personalizados, incluyendo la animación fluida del líquido (`.beer-liquid`) y la espuma (`.foam`).
* **JavaScript (Vanilla):** Lógica del juego, manejo de eventos del teclado, temporizador y gestión del Leaderboard en memoria.
* **[Bootstrap 5](https://getbootstrap.com/):** Framework CSS incluido de forma local (`bootstrap.min.css`) para la estructura responsiva.
* **[SweetAlert2](https://sweetalert2.github.io/):** Incluido localmente (`sweetalert2.min.js`) para mostrar modales atractivos al finalizar cada turno.
* **Tipografía:** Se utiliza la fuente local *Cinzel-Bold* para la inmersión del diseño.

## 🚀 Cómo ejecutarlo en local

Al ser un proyecto estático, ponerlo en marcha es sumamente sencillo:

1. Clona el repositorio en tu máquina:
   ```bash
   git clone git@github.com:ivanrdz/michelobUltra.git
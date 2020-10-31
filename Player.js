/**
 * Personaje principal del juego. Hereda de la clase Character.
 * @extends Character
 */
class Player extends Character {
    /**
     * Inicializa un jugador
     * @param game {Game} La instancia del juego al que pertenece el jugador
     */
    constructor (game) {
        const height = PLAYER_HEIGHT * game.width / 100,
            width = PLAYER_WIDTH * game.width / 100,
            x = game.width / 2 - width / 2,
            y = game.height - height,
            speed = PLAYER_SPEED,
            myImage = PLAYER_PICTURE,
            myImageDead = PLAYER_PICTURE_DEAD;

        super(game, width, height, x, y, speed, myImage, myImageDead);
        this.lives = lives;                                             // ALUMNA
    }
  /*  constructor() {
        this.lives = 0;
    }*/

    /**
     * Actualiza los atributos de posición del jugador y los disparos en función de las teclas pulsadas
     */
    update () {
        if (!this.dead) {
            switch (this.game.keyPressed) {
            case KEY_LEFT:
                if (this.x > this.speed) {
                    this.x -= this.speed;
                }
                break;
            case KEY_RIGHT:
                if (this.x < this.game.width - this.width - this.speed) {
                    this.x += this.speed;
                }
                break;
            case KEY_SHOOT:
                this.game.shoot(this);
                break;
            }
        }
    }

    /**
     * Mata al jugador
     */
    collide() {
        if (!this.dead) {
            this.lives--;                                                           // ALUMNA
            document.getElementById("livesli").innerHTML = `Lives: ${this.lives}`;  // ALUMNA
            if (this.lives > 0) {                                                   // ALUMNA
                setTimeout(() => {                                                  // ALUMNA
                    this.image.src = this.myImage;                                  // ALUMNA
                    this.dead = false;                                              // ALUMNA
                }, 2000);                                                           // ALUMNA
                super.collide();                                                    // ALUMNA
            } else if (this.lives <= 0){                                            // ALUMNA
                setTimeout(() => {
                    this.game.endGame(true);                                        // ALUMNA
                }, 2000);
                super.collide();
            }
        }
    }
}
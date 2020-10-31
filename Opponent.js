/**
 * Monstruo al que tenemos que destruir
 */
class Opponent extends Character {
    /**
     * Inicializa un personaje
     * @param game {Game} La instancia del juego al que pertenece el personaje
     * @param width {Number} Ancho del personaje
     * @param height {Number} Alto del personaje
     * @param x {Number} Posición horizontal del personaje
     * @param y {Number} Posición vertical del personaje
     * @param speed {Number} Velocidad del personaje
     * @param myImage {String} Ruta de la imagen del personaje
     * @param myImageDead {String} Ruta de la imagen del personaje cuando muere
     */
    constructor (game, width, height, x, y, speed, myImage, myImageDead) {              // ALUMNA
        width = width || (OPPONENT_WIDTH * game.width / 100);
        height = height || (OPPONENT_HEIGHT * game.width / 100);
        x = x || getRandomNumber(game.width - width / 2);
        y = y || 0;
        speed = speed || OPPONENT_SPEED;
        myImage = myImage || OPPONENT_PICTURE;
        myImageDead = myImageDead || OPPONENT_PICTURE_DEAD;
            
        super(game, width, height, x, y, speed, myImage, myImageDead);

        this.direction = "R"; // Dirección hacia la que se mueve el oponente
        setTimeout(() => this.shoot(), 1000 + getRandomNumber(2500));
    }

    /**
     * Crea un nuevo disparo
     */
    shoot() {
        if (!this.dead && !this.game.ended) {
            if (!this.game.paused) {
                this.game.shoot(this);
            }
            setTimeout(() => this.shoot(), 1000 + getRandomNumber(2500));
        }
    }

    /**
     * Actualiza los atributos de posición del oponente
     */
    update() {
        if (!this.dead && !this.game.ended) {
            this.y += this.speed;
            if (this.y > this.game.height) {
                this.y = 0;
            }
            if (this.direction === "R") {
                // Hacia la derecha
                if (this.x < this.game.width - this.width - this.speed) {
                    this.x += this.speed;
                } else {
                    this.horizontalMov = 0;
                }
            } else if (this.x > this.speed) {
                this.x -= this.speed;
            } else {
                this.horizontalMov = 0;
            }
            this.horizontalMov -= this.speed;
            if (this.horizontalMov < this.speed) {
                this.horizontalMov = getRandomNumber(this.game.width / 2);
                this.direction = this.direction === "R" ? "L" : "R"; // Cambia de sentido
            }
        }
    }

    /**
     * Mata al oponente
     */
    collide() {
        if (!this.dead) {
            setTimeout(() => {
                this.game.removeOpponent();
            }, 2000);
            super.collide();
            this.game.score++;                                                          // ALUMNA
            document.getElementById("scoreli").innerHTML = `Score: ${this.game.score}`; // ALUMNA
        }
    }
}
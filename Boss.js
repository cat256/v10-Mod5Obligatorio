/**
 * Monstruo al que tenemos que destruir
 * ALUMNA
 */
class Boss extends Opponent {
    /**
     * @param game {Game} La instancia del juego al que pertenece el jefe
     */
    constructor (game) {
        const height = (BOSS_HEIGHT * game.width) / 100,
            width = (BOSS_WIDTH * game.width) / 100,
            x = getRandomNumber(game.width - width / 2),
            y = 0,
            speed = BOSS_SPEED,
            myImage = BOSS_PICTURE,
            myImageDead = BOSS_PICTURE_DEAD;

        super(game, width, height, x, y, speed, myImage, myImageDead);

        this.direction = "R"; // Dirección hacia la que se mueve el oponente
        setTimeout(() => this.shoot(), 1000 + getRandomNumber(2500));
    }

    /**
     * Crea un nuevo disparo
     */

    shoot(){
        super.shoot();
    };

    /**
     * Actualiza los atributos de posición del jefe
     */

    update(){
        super.update();
    };
    
    /**
     * Mata al jefe
     */

    collide(){
        super.collide();
    };
}
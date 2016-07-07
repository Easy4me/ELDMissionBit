 var demo = {};
var bob;
var speed = 1;
var enemy;

demo.state0 = function(){};

demo.state0.prototype = {

    preload: function(){
        game.load.image('background1','background copy.jpg');
        game.load.image('background2','background.gif');
        game.load.image('background3','background.jpg');
        game.load.image('background4','fightstage.gif');
        
        game.load.spritesheet('bob', 'movement.png', 30, 33);
        game.load.spritesheet('enemy','fighter.png',110,127);

    },
    
    create : function (){
         game.world.setBounds(0,0,600,555);
        game.physics.startSystem(Phaser.Physics.ARCADE);
     
//        add background to game
        var bg = game.add.sprite(10,10,'background4');
        bg.height = game.height;
        bg.width = game.width;
        
        bob = game.add.sprite(0,0,'bob');
        enemy=game.add.sprite(0,0,'enemy');
        
        game.physics.enable(bob);
        bob.body.collideWorldBounds = true;
        
        bob.scale.setTo(1.5,1.5);
        
        bob.animations.add('walk',[0,1,2,3,4,5]);
        enemy.animations.add('walk', [0,1,2,3,4,5,6,7,8,9,10]);
    },
    
    
    update:function(){
        if( game.input.keyboard.isDown(Phaser.Keyboard.D)){ 
            enemy.animations.play('walk', 7, true);
            enemy.scale.setTo(-1.5,1.5)
            enemy.x = enemy.x + speed;  
        }
        if(game.input.keyboard.isDown(Phaser.Keyboard.A)){
             enemy.animations.play('walk', 7, true);
            enemy.scale.setTo(1.5,1.5);
            enemy.x = enemy.x - speed;
        }
        if(game.input.keyboard.isDown(Phaser.Keyboard.S)){
            enemy.animations.play('walk');
            enemy.y = enemy.y + speed;
        }
        
        if(game.input.keyboard.isDown(Phaser.Keyboard.W)){
            enemy.animations.play('walk');
            enemy.y = enemy.y - speed;
        
        }
        if( game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){ 
            bob.animations.play('walk');
            bob.scale.setTo(1.5,1.5)
           bob.x = bob.x + speed;  
        }
        if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
             bob.animations.play('walk');
            bob.scale.setTo(-1.5,1.5);
            bob.x = bob.x - speed;
        }
        if(game.input.keyboard.isDown(Phaser.Keyboard.DOWN)){
            bob.animations.play('walk');
            bob.y = bob.y + speed;
        }
        
        if(game.input.keyboard.isDown(Phaser.Keyboard.UP)){
            bob.animations.play('walk');
            bob.y = bob.y - speed;
        
        }

    }
};
        
        
    
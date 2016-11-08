 var demo = {};
var bob;
var speed = 6;
var enemy;
var punch;

demo.state0 = function(){};

demo.state0.prototype = {

    preload: function(){
        game.load.image('background1','background copy.jpg');
        game.load.image('background2','background.gif');
        game.load.image('background3','background.jpg');
        game.load.image('background4','fightstage.gif');
        
        game.load.spritesheet('bob', 'movement_punch.png', 30.254, 29);
        game.load.spritesheet('enemy','Bil.png', 55,55)
        game.load.spritesheet('punch', 'punch.png', 36,30);
        game.load.spritesheet('Fight', 'Fight.png', 36,30);

    },
    
    create : function (){
         game.world.setBounds(0,0,600,555);
        game.physics.startSystem(Phaser.Physics.ARCADE);
     
//        add background to game
        var bg = game.add.sprite(0,0,'background4');
        bg.height = game.height;
        bg.width = game.width;
        
        bob = game.add.sprite(0,0,'bob');
        enemy=game.add.sprite(10,10,'enemy');
        
        game.physics.enable(bob);
        game.physics.enable(enemy);
        bob.body.collideWorldBounds = true;
        
        bob.scale.setTo(1.5,1.5);
        
        bob.animations.add('walk',[0,1,2,3,4, 5]);
        bob.animations.add('punch',[6,7,8,9]);
        
        enemy.animations.add('walk', [0,1,2,3,4,5]);
        enemy.animations.add('punches',[6,7,8,9]);
        
    },
    
    
    update:function(){
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
         if(game.input.keyboard.isDown(Phaser.Keyboard.M)){
            bob.animations.play('punch', 5, true)
        }
        
        if(bob.x > 0)
            {
                enemy.x = bob.x - 50;
            }
        
        if( bob.y > 0)
            {
                enemy.y = bob.x - 50;
            }
        
        
    }
    
};
        
        
    
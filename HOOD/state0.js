 var demo = {};
var bob;
var speed = 6;

demo.state0 = function(){};

demo.state0.prototype = {

    preload: function(){
        game.load.image('background1','background copy.jpg');
        game.load.image('background2','background.gif');
        game.load.image('background3','background.jpg');
        game.load.image('background4','fightstage.gif');
        
        game.load.spritesheet('bob', 'movement.png', 30, 33);
//         game.load.spritesheet('ryu','charater.jpg');
//         game.load.spriteshet('ryu movement','RyuSFA3.gif');
//         game.load.spritesheet('sonya','mortal_kombat_x_sonya_blade_fighter_lightning_102086_3840x2400.jpg');
//         game.load.spritesheet('sonya move','sonya_blade_sprite_sheet_by_darkburster1-d7lr97c.png');
         
//         game.load.spritesheet('chun-li','/fighting female.jpg');
//         games.load.spritesheet('chun-li movement','Mobile - Street Fighter 2 Champion Edition - Chun Li.png');
         },
    create : function (){
         game.world.setBounds(0,0,600,555);
        game.physics.startSystem(Phaser.Physics.ARCADE);
     
//        add background to game
        var bg = game.add.sprite(10,10,'background4');
        bg.height = game.height;
        bg.width = game.width;
        
        bob = game.add.sprite(0,0,'bob');
        
        game.physics.enable(bob);
        bob.body.collideWorldBounds = true;
        
        bob.scale.setTo(1.5,1.5);
        
        bob.animations.add('walk',[0,1,2,3,4, 5]);
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
       
        
    
    
    
    
    }
};
        
        
    
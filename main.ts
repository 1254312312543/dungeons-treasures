namespace SpriteKind {
    export const Wall = SpriteKind.create()
    export const Inventory_HUD = SpriteKind.create()
    export const UI = SpriteKind.create()
    export const Friendly_projectile = SpriteKind.create()
    export const Player_Hitbox = SpriteKind.create()
    export const Following_spell = SpriteKind.create()
    export const Speedy_spell = SpriteKind.create()
    export const Big_spell = SpriteKind.create()
}
function Define_Artifacts () {
    Array_Artifact_1 = [
    0,
    50,
    50,
    1500,
    500,
    5
    ]
    // 0:RoF
    // 1:BVx
    // 2:BVy
    // 3:CD
    // 4:IT
    // 
    Array_Artifact_2 = [
    0,
    0,
    50,
    3000,
    500,
    6
    ]
    Array_Artifact_3 = [
    0,
    0,
    50,
    3000,
    1500,
    3
    ]
    sprites.setDataString(Artifact_1, "Spell_1", "" + randint(4, 6))
    sprites.setDataString(Artifact_1, "Spell_2", "" + randint(4, 6))
    sprites.setDataString(Artifact_1, "Spell_3", "" + randint(4, 6))
    sprites.setDataString(Artifact_1, "Spell_4", "" + randint(1, 6))
    sprites.setDataString(Artifact_1, "Spell_5", "" + randint(1, 6))
    sprites.setDataString(Artifact_1, "Spell_6", "" + randint(1, 6))
    sprites.setDataString(Artifact_2, "Spell_1", "" + randint(4, 6))
    sprites.setDataString(Artifact_2, "Spell_2", "" + randint(4, 6))
    sprites.setDataString(Artifact_2, "Spell_3", "" + randint(4, 6))
    sprites.setDataString(Artifact_2, "Spell_4", "" + randint(1, 6))
    sprites.setDataString(Artifact_2, "Spell_5", "" + randint(1, 6))
    sprites.setDataString(Artifact_2, "Spell_6", "" + randint(1, 6))
    sprites.setDataString(Artifact_3, "Spell_1", "" + randint(4, 6))
    sprites.setDataString(Artifact_3, "Spell_2", "" + randint(4, 6))
    sprites.setDataString(Artifact_3, "Spell_3", "" + randint(4, 6))
    sprites.setDataString(Artifact_3, "Spell_4", "" + randint(1, 6))
    sprites.setDataString(Artifact_3, "Spell_5", "" + randint(1, 6))
    sprites.setDataString(Artifact_3, "Spell_6", "" + randint(1, 6))
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    music.setVolume(90)
    music.play(music.createSong(hex`0064000408080300001c00010a006400f401640000040000000000000000000000000005000004260100000800020a0c08001000020d0f10001800020a0c18002000020c0d20002800020a0f28003000020c1230003800020a0f38004000020c1140004800020a1248005000020d1650005800020a1258006000020c1460006400020a166400680002061268006c000208146c0070000205117000740002061278007c000208118000840002060884008800020f1188008c0002080a8c009000020d0f90009400020c0d98009c0002080aa000a400020608a400a800020f11a800ac0002080aac00b000020d0fb000b400020a0cb800bc00020f11c000c400020608c400c800020f11c800cc0002080acc00d000020d0fd000d400020c0dd800dc0002080ae000e400020608e400e800020f11e800ec0002080aec00f000020d0ff000f400020c0df800fc00020f1106001c00010a006400f401640000040000000000000000000000000000000002480000000800011b08001000011d10001800011b18002000011920002800011b28003000011d30003800011b38004000011940004800011b48005000011d50005800011b58006000011909010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800d80080008100040001020b84008500040001020b88008900040001020b8c008d00040001020b90009100040001020b98009900040001020ba000a100040001020ba400a500040001020ba800a900040001020bac00ad00040001020bb000b100040001020bb800b900040001020bc000c100040001020bc400c500040001020bc800c900040001020bcc00cd00040001020bd000d100040001020bd800d900040001020be000e100040001020be400e500040001020be800e900040001020bec00ed00040001020bf000f100040001020bf800f900040001020b`), music.PlaybackMode.LoopingInBackground)
})
function Big_Spell (Artifact: Sprite, Artifact_array: any[]) {
    prueba = sprites.createProjectileFromSprite(img`
        . 2 2 2 2 . 
        2 2 2 2 2 2 
        2 2 2 2 2 2 
        2 2 2 2 2 2 
        2 2 2 2 2 2 
        . 2 2 2 2 . 
        `, Artifact, 0, 40)
    prueba.setKind(SpriteKind.Big_spell)
}
function HUD_Inventory () {
    if (Inventory_HUD_visibility == 0) {
        Inventory_box.setFlag(SpriteFlag.Invisible, false)
        Artifact_1.setFlag(SpriteFlag.Invisible, true)
        Artifact_2.setFlag(SpriteFlag.Invisible, true)
        Artifact_3.setFlag(SpriteFlag.Invisible, true)
        player_.setFlag(SpriteFlag.Invisible, true)
    } else {
        Inventory_box.setFlag(SpriteFlag.Invisible, true)
        Artifact_1.setFlag(SpriteFlag.Invisible, false)
        Artifact_2.setFlag(SpriteFlag.Invisible, false)
        Artifact_3.setFlag(SpriteFlag.Invisible, false)
        player_.setFlag(SpriteFlag.Invisible, false)
    }
}
function Following_Spell (Artifact: Sprite, Artifact_array: any[]) {
    projectile_4 = sprites.createProjectileFromSprite(img`
        . 4 2 . 
        4 2 4 2 
        2 4 2 4 
        . 2 4 . 
        `, Artifact, 0, 0)
    projectile_4.setKind(SpriteKind.Following_spell)
    projectile_4.follow(player_, 20)
}
controller.player2.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    Spell_casting()
})
function fCrosshair () {
    if (controller.player2.isPressed(ControllerButton.Left)) {
        Direction += -0.1
    } else if (controller.player2.isPressed(ControllerButton.Right)) {
        Direction += 0.1
    }
}
function Spell_casting () {
    player_spell = sprites.createProjectileFromSprite(img`
        . 8 8 . 
        8 8 8 8 
        8 8 8 8 
        . 8 8 . 
        `, player_, Math.cos(Direction) * (0 - Initial_artifact[1]), Math.sin(Direction) * (0 - Initial_artifact[1]))
    player_spell.setKind(SpriteKind.Friendly_projectile)
}
sprites.onOverlap(SpriteKind.Friendly_projectile, SpriteKind.Projectile, function (sprite, otherSprite) {
    Proyectiles_in_screen += -1
    sprites.destroy(otherSprite)
})
function Speedy_Spell (Artifact: Sprite, Artifact_array: number[]) {
    if (sprites.readDataNumber(Artifact, "HP") > 0) {
        projectile_3 = sprites.createProjectileFromSprite(img`
            . 4 4 . 
            4 2 2 4 
            4 2 2 4 
            . 4 4 . 
            `, Artifact, 0, 0)
        projectile_3.setKind(SpriteKind.Speedy_spell)
        projectile_3.follow(player_, 60)
        pause(100)
        Artifact_array[1] = projectile_3.vx
        Artifact_array[2] = projectile_3.vy
        projectile_3.follow(player_, 0)
        projectile_3.setVelocity(Artifact_array[1], Artifact_array[2])
    }
}
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Inventory_HUD_visibility == 0) {
        Inventory_HUD_visibility = 1
    } else {
        Inventory_HUD_visibility = 0
    }
})
function fLife_bar_change () {
    if (0 < Damage && Invulnerability == 0) {
        HP += -1
        Damage += 0 - Damage
        Invulnerability = 1
        animation.runImageAnimation(
        player_,
        [img`
            . 1 1 1 1 . . 
            1 1 1 1 1 1 . 
            1 1 1 1 1 1 . 
            1 1 1 1 1 1 . 
            1 1 1 1 1 1 . 
            1 1 1 1 1 1 . 
            1 1 1 1 1 1 . 
            `,img`
            . 8 8 8 8 . . 
            8 8 8 8 8 8 . 
            8 8 8 8 8 8 . 
            8 8 8 8 8 8 . 
            8 8 8 8 8 8 . 
            8 8 8 8 8 8 . 
            8 8 8 8 8 8 . 
            `,img`
            . 1 1 1 1 . . 
            1 1 1 1 1 1 . 
            1 1 1 1 1 1 . 
            1 1 1 1 1 1 . 
            1 1 1 1 1 1 . 
            1 1 1 1 1 1 . 
            1 1 1 1 1 1 . 
            `,img`
            . 8 8 8 8 . . 
            8 8 8 8 8 8 . 
            8 8 8 8 8 8 . 
            8 8 8 8 8 8 . 
            8 8 8 8 8 8 . 
            8 8 8 8 8 8 . 
            8 8 8 8 8 8 . 
            `,img`
            . 1 1 1 1 . . 
            1 1 1 1 1 1 . 
            1 1 1 1 1 1 . 
            1 1 1 1 1 1 . 
            1 1 1 1 1 1 . 
            1 1 1 1 1 1 . 
            1 1 1 1 1 1 . 
            `,img`
            . 8 8 8 8 . . 
            8 8 8 8 8 8 . 
            8 8 8 8 8 8 . 
            8 8 8 8 8 8 . 
            8 8 8 8 8 8 . 
            8 8 8 8 8 8 . 
            8 8 8 8 8 8 . 
            `],
        500,
        false
        )
        animation.runImageAnimation(
        Players_hitbox,
        [img`
            . 1 1 1 1 . . 
            1 1 1 1 1 1 . 
            1 1 1 1 1 1 . 
            1 1 1 1 1 1 . 
            1 1 1 1 1 1 . 
            1 1 1 1 1 1 . 
            1 1 1 1 1 1 . 
            `,img`
            . 8 8 8 8 . . 
            8 8 8 8 8 8 . 
            8 8 8 8 8 8 . 
            8 8 8 8 8 8 . 
            8 8 8 8 8 8 . 
            8 8 8 8 8 8 . 
            8 8 8 8 8 8 . 
            `,img`
            . 1 1 1 1 . . 
            1 1 1 1 1 1 . 
            1 1 1 1 1 1 . 
            1 1 1 1 1 1 . 
            1 1 1 1 1 1 . 
            1 1 1 1 1 1 . 
            1 1 1 1 1 1 . 
            `,img`
            . 8 8 8 8 . . 
            8 8 8 8 8 8 . 
            8 8 8 8 8 8 . 
            8 8 8 8 8 8 . 
            8 8 8 8 8 8 . 
            8 8 8 8 8 8 . 
            8 8 8 8 8 8 . 
            `,img`
            . 1 1 1 1 . . 
            1 1 1 1 1 1 . 
            1 1 1 1 1 1 . 
            1 1 1 1 1 1 . 
            1 1 1 1 1 1 . 
            1 1 1 1 1 1 . 
            1 1 1 1 1 1 . 
            `,img`
            . . . . . . . 
            . . . . . . . 
            . . 8 8 . . . 
            . . 8 8 . . . 
            . . 8 8 . . . 
            . . . . . . . 
            . . . . . . . 
            `],
        500,
        false
        )
        pause(3000)
        Invulnerability = 0
    }
}
sprites.onOverlap(SpriteKind.Friendly_projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.setDataNumber(otherSprite, "HP", sprites.readDataNumber(otherSprite, "HP") - 10)
    sprites.destroy(sprite)
    if (sprites.readDataNumber(otherSprite, "HP") < 1) {
        sprites.destroy(otherSprite)
    }
})
sprites.onCreated(SpriteKind.Projectile, function (sprite) {
    timer.after(100, function () {
        if (sprite.kind() == SpriteKind.Following_spell) {
            timer.background(function () {
                sprite.setKind(SpriteKind.Projectile)
                timer.after(6000, function () {
                    sprites.destroy(sprite)
                })
            })
        } else if (sprite.kind() == SpriteKind.Speedy_spell) {
            timer.background(function () {
                sprite.setKind(SpriteKind.Projectile)
                timer.after(2000, function () {
                    sprites.destroy(sprite)
                })
            })
        } else if (sprite.kind() == SpriteKind.Big_spell) {
            timer.background(function () {
                sprite.setKind(SpriteKind.Projectile)
                timer.after(2000, function () {
                    sprites.destroy(sprite)
                })
            })
        }
    })
})
function Spell_detection () {
    Equiped_artifact = [_new[0], _new[1]]
}
function Lifebar () {
    if (HP == 3) {
        HP_frame.setImage(img`
            11111111111111
            11111111111111
            11888888888811
            11888888888811
            11888888888811
            11888888888811
            11888888888811
            11888888888811
            11888888888811
            11888888888811
            11888888888811
            11888888888811
            11888888888811
            11888888888811
            11888888888811
            11888888888811
            11888888888811
            11888888888811
            11888888888811
            11888888888811
            11888888888811
            11888888888811
            11888888888811
            11888888888811
            11888888888811
            11888888888811
            11888888888811
            11888888888811
            11888888888811
            11888888888811
            11888888888811
            11888888888811
            11888888888811
            11888888888811
            11888888888811
            11888888888811
            11888888888811
            11888888888811
            11888888888811
            11888888888811
            11888888888811
            11888888888811
            11888888888811
            11888888888811
            11888888888811
            11888888888811
            11888888888811
            11888888888811
            11111111111111
            11111111111111
            `)
    } else if (HP == 2) {
        HP_frame.setImage(img`
            11111111111111
            11111111111111
            11222222222211
            11222222222211
            11222222222211
            11222222222211
            11222222222211
            11222222222211
            11222222222211
            11222222222211
            11222222222211
            11222222222211
            11222222222211
            11222222222211
            11222222222211
            11222222222211
            11222222222211
            11222222222211
            11828288282811
            11888888888811
            11888888888811
            11888888888811
            11888888888811
            11888888888811
            11888888888811
            11888888888811
            11888888888811
            11888888888811
            11888888888811
            11888888888811
            11888888888811
            11888888888811
            11888888888811
            11888888888811
            11888888888811
            11888888888811
            11888888888811
            11888888888811
            11888888888811
            11888888888811
            11888888888811
            11888888888811
            11888888888811
            11888888888811
            11888888888811
            11888888888811
            11888888888811
            11888888888811
            11111111111111
            11111111111111
            `)
    } else if (HP == 1) {
        HP_frame.setImage(img`
            11111111111111
            11111111111111
            11222222222211
            11222222222211
            11222222222211
            11222222222211
            11222222222211
            11222222222211
            11222222222211
            11222222222211
            11222222222211
            11222222222211
            11222222222211
            11222222222211
            11222222222211
            11222222222211
            11222222222211
            11222222222211
            11222222222211
            11222222222211
            11222222222211
            11222222222211
            11222222222211
            11222222222211
            11222222222211
            11222222222211
            11222222222211
            11222222222211
            11222222222211
            11222222222211
            11222222222211
            11222222222211
            11222222222211
            11222222222211
            11828828282211
            11888888888811
            11888888888811
            11888888888811
            11888888888811
            11888888888811
            11888888888811
            11888888888811
            11888888888811
            11888888888811
            11888888888811
            11888888888811
            11888888888811
            11888888888811
            11111111111111
            11111111111111
            `)
    } else if (HP == 0) {
        HP_frame.setImage(img`
            11111111111111
            11111111111111
            11ff22f2f22f11
            11222222222211
            11222222222211
            11222222222211
            11222222222211
            11222222222211
            11222222222211
            11222222222211
            11222222222211
            11222222222211
            11222222222211
            11222222222211
            11222222222211
            11222222222211
            11222222222211
            11222222222211
            11222222222211
            11222222222211
            11222222222211
            11222222222211
            11222222222211
            11222222222211
            11222222222211
            11222222222211
            11222222222211
            11222222222211
            11222222222211
            11222222222211
            11222222222211
            11222222222211
            11222222222211
            11222222222211
            11222222222211
            11222222222211
            11222222222211
            11222222222211
            11222222222211
            11222222222211
            11222222222211
            11222222222211
            11222222222211
            11222222222211
            11222222222211
            11222222222211
            11222222222211
            11222222222211
            11111111111111
            11111111111111
            `)
    } else if (HP == -1) {
        HP_frame.setImage(img`
            11111111111111
            11111111111111
            11ffffffffff11
            11ffffffffff11
            11ffffffffff11
            11ffffffffff11
            11ffffffffff11
            11ffffffffff11
            11ffffffffff11
            11ffffffffff11
            11ffffffffff11
            11ffffffffff11
            11ffffffffff11
            11ffffffffff11
            11ffffffffff11
            11ffffffffff11
            11ffffffffff11
            11ffffffffff11
            112f22ff2f2f11
            11222222222211
            11222222222211
            11222222222211
            11222222222211
            11222222222211
            11222222222211
            11222222222211
            11222222222211
            11222222222211
            11222222222211
            11222222222211
            11222222222211
            11222222222211
            11222222222211
            11222222222211
            11222222222211
            11222222222211
            11222222222211
            11222222222211
            11222222222211
            11222222222211
            11222222222211
            11222222222211
            11222222222211
            11222222222211
            11222222222211
            11222222222211
            11222222222211
            11222222222211
            11111111111111
            11111111111111
            `)
    } else if (HP == -2) {
        HP_frame.setImage(img`
            11111111111111
            11111111111111
            11ffffffffff11
            11ffffffffff11
            11ffffffffff11
            11ffffffffff11
            11ffffffffff11
            11ffffffffff11
            11ffffffffff11
            11ffffffffff11
            11ffffffffff11
            11ffffffffff11
            11ffffffffff11
            11ffffffffff11
            11ffffffffff11
            11ffffffffff11
            11ffffffffff11
            11ffffffffff11
            11ffffffffff11
            11ffffffffff11
            11ffffffffff11
            11ffffffffff11
            11ffffffffff11
            11ffffffffff11
            11ffffffffff11
            11ffffffffff11
            11ffffffffff11
            11ffffffffff11
            11ffffffffff11
            11ffffffffff11
            11ffffffffff11
            11ffffffffff11
            11ffffffffff11
            11ffffffffff11
            112f2fff22f211
            11222222222211
            11222222222211
            11222222222211
            11222222222211
            11222222222211
            11222222222211
            11222222222211
            11222222222211
            11222222222211
            11222222222211
            11222222222211
            11222222222211
            11222222222211
            11111111111111
            11111111111111
            `)
    } else if (HP == -3) {
        HP_frame.setImage(img`
            11111111111111
            11111111111111
            11ffffffffff11
            11ffffffffff11
            11ffffffffff11
            11ffffffffff11
            11ffffffffff11
            11ffffffffff11
            11ffffffffff11
            11ffffffffff11
            11ffffffffff11
            11ffffffffff11
            11ffffffffff11
            11ffffffffff11
            11ffffffffff11
            11ffffffffff11
            11ffffffffff11
            11ffffffffff11
            11ffffffffff11
            11ffffffffff11
            11ffffffffff11
            11ffffffffff11
            11ffffffffff11
            11ffffffffff11
            11ffffffffff11
            11ffffffffff11
            11ffffffffff11
            11ffffffffff11
            11ffffffffff11
            11ffffffffff11
            11ffffffffff11
            11ffffffffff11
            11ffffffffff11
            11ffffffffff11
            11ffffffffff11
            11ffffffffff11
            11ffffffffff11
            11ffffffffff11
            11ffffffffff11
            11ffffffffff11
            11ffffffffff11
            11ffffffffff11
            11ffffffffff11
            11ffffffffff11
            11ffffffffff11
            11fff2ffffff11
            112ff2f2f22f11
            1122f2f2f2f211
            11111111111111
            11111111111111
            `)
        game.gameOver(false)
    }
}
sprites.onOverlap(SpriteKind.Player_Hitbox, SpriteKind.Projectile, function (sprite, otherSprite) {
    Damage = 1
    if (0 < Damage && Invulnerability == 1) {
        Damage = 0
    }
    Proyectiles_in_screen += -1
    sprites.destroy(otherSprite)
})
let Level_HP = 0
let Equiped_artifact: number[] = []
let Invulnerability = 0
let Damage = 0
let projectile_3: Sprite = null
let player_spell: Sprite = null
let projectile_4: Sprite = null
let prueba: Sprite = null
let Array_Artifact_3: number[] = []
let Array_Artifact_2: number[] = []
let Array_Artifact_1: number[] = []
let HP_frame: Sprite = null
let Players_hitbox: Sprite = null
let player_: Sprite = null
let Artifact_3: Sprite = null
let Artifact_2: Sprite = null
let Artifact_1: Sprite = null
let Inventory_box: Sprite = null
let Inventory_HUD_visibility = 0
let HP = 0
let _new: number[] = []
let RoF = 0
let Initial_artifact: number[] = []
let Direction = 0
let Proyectiles_in_screen = 0
Direction = 1.62
let Projectile_speed = 30
Initial_artifact = [RoF, Projectile_speed]
_new = [0, 50]
HP = 3
Inventory_HUD_visibility = 1
tiles.setCurrentTilemap(tilemap`level1`)
scene.setBackgroundImage(img`
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    `)
let Crosshair = sprites.create(img`
    . . f . . 
    . . f . . 
    f f 2 f f 
    . . f . . 
    . . f . . 
    `, SpriteKind.UI)
Inventory_box = sprites.create(img`
    ......11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111......
    ......18888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888881......
    ......18888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888881......
    ...11118888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888881111...
    ...18888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888881...
    ...18888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888881...
    11118888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888881111
    18888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888881
    18888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888881
    18888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888881
    18888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888881
    18888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888881
    18888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888881
    18888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888881
    18888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888881
    18888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888881
    18888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888881
    18888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888881
    18888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888881
    18888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888881
    18888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888881
    18888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888881
    18888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888881
    18888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888881
    18888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888881
    18888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888881
    18888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888881
    18888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888881
    18888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888881
    18888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888881
    18888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888881
    18888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888881
    18888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888881
    18888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888881
    18888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888881
    18888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888881
    18888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888881
    18888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888881
    18888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888881
    18888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888881
    18888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888881
    18888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888881
    18888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888881
    18888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888881
    18888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888881
    18888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888881
    18888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888881
    18888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888881
    18888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888881
    18888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888881
    18888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888881
    18888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888881
    18888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888881
    18888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888881
    18888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888881
    18888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888881
    18888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888881
    18888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888881
    18888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888881
    18888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888881
    18888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888881
    18888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888881
    18888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888881
    18888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888881
    18888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888881
    18888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888881
    18888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888881
    18888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888881
    18888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888881
    18888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888881
    18888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888881
    18888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888881
    18888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888881
    18888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888881
    18888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888881
    18888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888881
    18888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888881
    18888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888881
    18888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888881
    18888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888881
    18888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888881
    18888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888881
    18888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888881
    18888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888881
    18888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888881
    18888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888881
    18888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888881
    18888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888881
    18888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888881
    18888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888881
    18888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888881
    18888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888881
    18888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888881
    11118888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888881111
    ...18888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888881...
    ...18888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888881...
    ...11118888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888881111...
    ......18888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888881......
    ......18888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888881......
    ......11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111......
    `, SpriteKind.Inventory_HUD)
Inventory_box.setFlag(SpriteFlag.RelativeToCamera, true)
Artifact_1 = sprites.create(img`
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    . 2 2 2 2 2 2 2 2 2 2 2 2 . 
    . 2 2 2 2 2 2 2 2 2 2 2 2 . 
    . . 2 2 2 2 2 2 2 2 2 2 . . 
    . . . 2 2 2 2 2 2 2 2 . . . 
    `, SpriteKind.Enemy)
Artifact_1.setPosition(80, 13)
sprites.setDataNumber(Artifact_1, "HP", 50)
Artifact_2 = sprites.create(img`
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    . 3 3 3 3 3 3 3 3 3 3 3 3 . 
    . 3 3 3 3 3 3 3 3 3 3 3 3 . 
    . . 3 3 3 3 3 3 3 3 3 3 . . 
    . . . 3 3 3 3 3 3 3 3 . . . 
    `, SpriteKind.Enemy)
Artifact_2.setPosition(25, 16)
sprites.setDataNumber(Artifact_2, "HP", 50)
Artifact_3 = sprites.create(img`
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    . 7 7 7 7 7 7 7 7 7 7 7 7 . 
    . 7 7 7 7 7 7 7 7 7 7 7 7 . 
    . . 7 7 7 7 7 7 7 7 7 7 . . 
    . . . 7 7 7 7 7 7 7 7 . . . 
    `, SpriteKind.Enemy)
Artifact_3.setPosition(135, 16)
sprites.setDataNumber(Artifact_3, "HP", 50)
player_ = sprites.create(assets.image`Player`, SpriteKind.Player)
Players_hitbox = sprites.create(img`
    . . . . . . 
    . . . . . . 
    . . 8 8 . . 
    . . 8 8 . . 
    . . 8 8 . . 
    . . . . . . 
    . . . . . . 
    `, SpriteKind.Player_Hitbox)
controller.moveSprite(player_, 50, 50)
controller.moveSprite(Players_hitbox, 50, 50)
HP_frame = sprites.create(img`
    11111111111111
    11111111111111
    11888888888811
    11888888888811
    11888888888811
    11888888888811
    11888888888811
    11888888888811
    11888888888811
    11888888888811
    11888888888811
    11888888888811
    11888888888811
    11888888888811
    11888888888811
    11888888888811
    11888888888811
    11888888888811
    11888888888811
    11888888888811
    11888888888811
    11888888888811
    11888888888811
    11888888888811
    11888888888811
    11888888888811
    11888888888811
    11888888888811
    11888888888811
    11888888888811
    11888888888811
    11888888888811
    11888888888811
    11888888888811
    11888888888811
    11888888888811
    11888888888811
    11888888888811
    11888888888811
    11888888888811
    11888888888811
    11888888888811
    11888888888811
    11888888888811
    11888888888811
    11888888888811
    11888888888811
    11888888888811
    11111111111111
    11111111111111
    `, SpriteKind.UI)
HP_frame.setPosition(8, 95)
HP_frame.setFlag(SpriteFlag.RelativeToCamera, true)
player_.setPosition(80, 150)
Players_hitbox.setPosition(player_.x, player_.y)
Define_Artifacts()
forever(function () {
    Crosshair.setPosition(player_.x - Math.cos(Direction) * 10, player_.y - Math.sin(Direction) * 10)
    if (player_.y < 120) {
        scene.cameraFollowSprite(Artifact_1)
    } else {
        scene.cameraFollowSprite(player_)
    }
    HUD_Inventory()
    fCrosshair()
    Lifebar()
    Players_hitbox.setPosition(player_.x, player_.y)
    Level_HP = sprites.readDataNumber(Artifact_3, "HP") + (sprites.readDataNumber(Artifact_2, "HP") + sprites.readDataNumber(Artifact_1, "HP"))
    if (Level_HP < 1) {
        game.gameOver(true)
        game.setGameOverEffect(true, effects.confetti)
    }
})
forever(function () {
    fLife_bar_change()
})
forever(function () {
    for (let index = 0; index < Array_Artifact_3[5]; index++) {
        if (sprites.readDataNumber(Artifact_3, "HP") > 0) {
            Following_Spell(Artifact_3, Array_Artifact_3)
            pause(Array_Artifact_3[4])
        }
    }
    pause(Array_Artifact_3[3])
})
forever(function () {
    for (let index = 0; index < Array_Artifact_1[5]; index++) {
        Speedy_Spell(Artifact_2, Array_Artifact_2)
        pause(Array_Artifact_1[4])
    }
    pause(Array_Artifact_1[3])
})
forever(function () {
    for (let index = 0; index < Array_Artifact_2[5]; index++) {
        if (sprites.readDataNumber(Artifact_1, "HP") > 0) {
            Big_Spell(Artifact_1, Array_Artifact_1)
            pause(Array_Artifact_2[4])
        }
    }
    pause(Array_Artifact_2[3])
})

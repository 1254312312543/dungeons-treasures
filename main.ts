namespace SpriteKind {
    export const Wall = SpriteKind.create()
    export const Inventory_HUD = SpriteKind.create()
    export const UI = SpriteKind.create()
    export const Friendly_projectile = SpriteKind.create()
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
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    Damage = 1
})
function Spell_casting () {
    player_spell = sprites.createProjectileFromSprite(img`
        . 8 8 . 
        8 8 8 8 
        8 8 8 8 
        . 8 8 . 
        `, player_, Math.cos(Direction) * (0 - Initial_artifact[1]), Math.sin(Direction) * (0 - Initial_artifact[1]))
    player_spell.setKind(SpriteKind.Friendly_projectile)
}
function fInvincibility () {
    if (0 < Damage && Invulnerability == 0) {
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
        pause(3000)
        Invulnerability = 0
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
    if (0 < Damage && Invulnerability == 1) {
        Damage = 0
    }
    if (0 < Damage && Invulnerability == 0) {
        HP += -1
    }
}
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
        game.setGameOverMessage(false, "GAME OVER!")
    }
}
let prueba: Sprite = null
let projectile_3: Sprite = null
let Equiped_artifact: number[] = []
let Invulnerability = 0
let player_spell: Sprite = null
let Damage = 0
let Direction = 0
let HP_frame: Sprite = null
let player_: Sprite = null
let Artifact_3: Sprite = null
let Artifact_2: Sprite = null
let Artifact_1: Sprite = null
let Inventory_box: Sprite = null
let Inventory_HUD_visibility = 0
let HP = 0
let _new: number[] = []
let Initial_artifact: number[] = []
let Projectile_speed = 30
let RoF = 0
let Defensive_damage = 0
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
Artifact_1.setPosition(80, 8)
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
Artifact_2.setPosition(25, 15)
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
Artifact_3.setPosition(135, 15)
player_ = sprites.create(assets.image`Player`, SpriteKind.Player)
controller.moveSprite(player_, 50, 50)
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
let Array_Artifact_1 = [
0,
50,
50,
1500,
500,
10
]
// 0:RoF
// 1:Vx
// 2:Vy
// 3:CD
// 4:IT
// 5:Repeats
let Array_Artifact_2 = [
0,
0,
50,
3000,
500,
5
]
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
})
forever(function () {
    fLife_bar_change()
})
forever(function () {
    fInvincibility()
})
forever(function () {
    for (let index = 0; index < Array_Artifact_1[5]; index++) {
        projectile_3 = sprites.createProjectileFromSprite(img`
            . 2 2 . 
            2 2 2 2 
            2 2 2 2 
            . 2 2 . 
            `, Artifact_2, 0, 0)
        projectile_3.follow(player_, 50)
        pause(100)
        Array_Artifact_1[1] = projectile_3.vx
        Array_Artifact_1[2] = projectile_3.vy
        projectile_3.follow(player_, 0)
        projectile_3.setVelocity(Array_Artifact_1[1], Array_Artifact_1[2])
        pause(Array_Artifact_1[4])
    }
    pause(Array_Artifact_1[3])
})
forever(function () {
    for (let index = 0; index < Array_Artifact_2[5]; index++) {
        prueba = sprites.createProjectileFromSprite(img`
            . 2 2 . 
            2 2 2 2 
            2 2 2 2 
            . 2 2 . 
            `, Artifact_1, 0, 0)
        prueba.setVelocity(Array_Artifact_2[1], Array_Artifact_2[2])
        pause(Array_Artifact_2[4])
    }
    pause(Array_Artifact_2[3])
})

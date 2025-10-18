// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`0a000a000a010101010101010109060808080808080808070608080808080808080706080808080808080807060808080808080808070608080808080808080706080808080808080807060405080808080405070603020808080803020702080808080808080803`, img`
2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 2 2 . . . . 2 2 2 
2 2 2 . . . . 2 2 2 
2 . . . . . . . . 2 
`, [myTiles.transparency16,sprites.dungeon.purpleOuterNorth0,sprites.dungeon.purpleInnerSouthEast,sprites.dungeon.purpleInnerSouthWest,sprites.dungeon.purpleInnerNorthWest,sprites.dungeon.purpleInnerNorthEast,sprites.dungeon.purpleOuterWest0,sprites.dungeon.purpleOuterEast0,myTiles.tile2,myTiles.tile4,myTiles.tile3,myTiles.tile5], TileScale.Sixteen);
            case "level0":
            case "level2":return tiles.createTilemap(hex`0a000a000a010102080803010109060808080808080808070608080808080808080706080808080808080807060808080808080808070608080808080808080706080808080808080807060405080808080405070603020808080803020702080808080808080803`, img`
2 2 2 2 . . 2 2 2 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 2 2 . . . . 2 2 2 
2 2 2 . . . . 2 2 2 
2 . . . . . . . . 2 
`, [myTiles.transparency16,sprites.dungeon.purpleOuterNorth0,sprites.dungeon.purpleInnerSouthEast,sprites.dungeon.purpleInnerSouthWest,sprites.dungeon.purpleInnerNorthWest,sprites.dungeon.purpleInnerNorthEast,sprites.dungeon.purpleOuterWest0,sprites.dungeon.purpleOuterEast0,myTiles.tile2,myTiles.tile4,myTiles.tile3], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "Tile morado":
            case "tile2":return tile2;
            case "myTile1":
            case "tile4":return tile4;
            case "myTile0":
            case "tile3":return tile3;
            case "myTile2":
            case "tile5":return tile5;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.

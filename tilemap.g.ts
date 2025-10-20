// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`0a000a0009010101010101010108060a0a0a0a0a0a0a0a07060a0a0a0a0a0a0a0a07060a0a0a0a0a0a0a0a07060a0a0a0a0a0a0a0a07060a0a0a0a0a0a0a0a07060a0a0a0a0a0a0a0a070604050a0a0a0a0405070603020a0a0a0a030207020a0a0a0a0a0a0a0a03`, img`
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
`, [myTiles.transparency16,sprites.dungeon.purpleOuterNorth0,sprites.dungeon.purpleInnerSouthEast,sprites.dungeon.purpleInnerSouthWest,sprites.dungeon.purpleInnerNorthWest,sprites.dungeon.purpleInnerNorthEast,sprites.dungeon.purpleOuterWest0,sprites.dungeon.purpleOuterEast0,myTiles.tile4,myTiles.tile8,myTiles.tile1], TileScale.Sixteen);
            case "level0":
            case "level2":return tiles.createTilemap(hex`0a000a00090101020a0a03010108060a0a0a0a0a0a0a0a07060a0a0a0a0a0a0a0a07060a0a0a0a0a0a0a0a07060a0a0a0a0a0a0a0a07060a0a0a0a0a0a0a0a07060a0a0a0a0a0a0a0a070604050a0a0a0a0405070603020a0a0a0a030207020a0a0a0a0a0a0a0a03`, img`
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
`, [myTiles.transparency16,sprites.dungeon.purpleOuterNorth0,sprites.dungeon.purpleInnerSouthEast,sprites.dungeon.purpleInnerSouthWest,sprites.dungeon.purpleInnerNorthWest,sprites.dungeon.purpleInnerNorthEast,sprites.dungeon.purpleOuterWest0,sprites.dungeon.purpleOuterEast0,myTiles.tile4,myTiles.tile8,myTiles.tile1], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile0":
            case "tile3":return tile3;
            case "Tile morado":
            case "tile2":return tile2;
            case "myTile1":
            case "tile4":return tile4;
            case "myTile5":
            case "tile8":return tile8;
            case "myTile":
            case "tile1":return tile1;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.

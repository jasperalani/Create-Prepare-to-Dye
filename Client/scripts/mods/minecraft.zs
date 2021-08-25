#priority 0
//TODO find out why defult priority is not 0
import crafttweaker.api.item.IItemStack;
import crafttweaker.api.item.IIngredient;
// mechanicalCrafting.addRecipe("red_alloy_wire", <item:morered:red_alloy_wire>*64, [[<tag:items:forge:dusts>,<item:morered:red_alloy_ingot>,<item:morered:red_alloy_ingot>,<item:morered:red_alloy_ingot>,<item:morered:red_alloy_ingot>,<item:morered:red_alloy_ingot>,<item:morered:red_alloy_ingot>, <item:morered:red_alloy_ingot> , <item:morered:red_alloy_ingot>,<tag:items:forge:dusts>]]);
// craftingTable.addShaped("red_alloy_wire_copper",<item:morered:red_alloy_wire> * 8, [[<tag:items:forge:ingots/copper>, <tag:items:forge:ingots/copper> , <tag:items:forge:ingots/copper>]]);
// craftingTable.addShaped("piston_eff", <item:minecraft:piston>*2, [[<tag:items:minecraft:planks>, <tag:items:minecraft:planks>, <tag:items:minecraft:planks>], [<tag:items:forge:cobblestone>, <tag:items:crafttweaker:strong_alloys>, <tag:items:forge:cobblestone>], [<tag:items:forge:cobblestone>, <item:minecraft:redstone>, <tag:items:forge:cobblestone>]]);
<item:minecraft:paper>.removeRecipe();
RecipeGenerator.shaped({
    <item:minecraft:piston>*2 : [
        [<tag:items:minecraft:planks>, <tag:items:minecraft:planks>, <tag:items:minecraft:planks>], 
        [<tag:items:forge:cobblestone>, <tag:items:crafttweaker:strong_alloys>, <tag:items:forge:cobblestone>], 
        [<tag:items:forge:cobblestone>, <item:minecraft:redstone>, <tag:items:forge:cobblestone>]
    ],
    <item:minecraft:dispenser> : [
        [<tag:items:forge:cobblestone>, <tag:items:forge:cobblestone>, <tag:items:forge:cobblestone>],
        [<tag:items:forge:cobblestone>, <item:minecraft:piston>, <tag:items:forge:cobblestone>],
        [<tag:items:forge:cobblestone>, <tag:items:forge:dusts/redstone>, <tag:items:forge:cobblestone>]
    ],
    <item:minecraft:hopper> : [
        [<tag:items:crafttweaker:strong_alloys>, <item:minecraft:air>, <tag:items:crafttweaker:strong_alloys>],
        [<tag:items:crafttweaker:strong_alloys>, <tag:items:forge:chests/wooden>, <tag:items:crafttweaker:strong_alloys>],
        [<item:minecraft:air>, <tag:items:crafttweaker:strong_alloys>, <item:minecraft:air>]
    ],
    <item:minecraft:torch> * 8: [
        [<item:quark:tallow>],
	    [<tag:items:forge:rods/wooden>]
    ],
    <item:minecraft:white_shulker_box> : [
        [<item:pneumaticcraft:plastic>],
        [<tag:items:forge:chests>],
        [<item:pneumaticcraft:plastic>]
    ]
});

RecipeGenerator.shapeless({
    <item:minecraft:fire_charge>*2:[
        <tag:items:forge:dusts/redstone>,<tag:items:forge:dusts/redstone>,
        <tag:items:forge:gunpowder>,<tag:items:minecraft:coals>
    ],
    <item:minecraft:glass> : [<tag:items:forge:stained_glass>],
    <item:minecraft:paper>*2 : [
        <item:minecraft:sugar_cane>,<item:minecraft:sugar_cane>,<item:minecraft:sugar_cane>
    ],
    <item:minecraft:shulker_box> : [
        <item:minecraft:white_shulker_box>,<tag:items:forge:dyes/purple>
    ],
    <item:minecraft:paper> : [<item:pneumaticcraft:tag_filter>]
    //TODO recipe for TNT that makes more of it
});


RecipeGenerator.addMix(<item:minecraft:dirt>,"none",[<item:minecraft:coarse_dirt>, <tag:items:crafttweaker:fertilizer>]);

///
val s = <tag:items:minecraft:sand>;
val g = <tag:items:forge:gunpowder>;
val r = <tag:items:forge:dyes/red>;
<recipetype:botania:runic_altar>.addRecipe("bulk_tnt", <item:minecraft:tnt>*16, 1000, [s,s,s,s,g,g,g,g,r,r,r,r,r,r,r,r]as IIngredient[]);
//stolen from prject gear coz it looks cool
<recipetype:botania:mana_infusion>.addRecipe("gear_sugarcane_to_kelp_alchemy_catalyst", <item:minecraft:kelp>, <item:minecraft:sugar_cane>, 2000, <blockstate:botania:alchemy_catalyst>);

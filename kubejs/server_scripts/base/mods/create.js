if (feature('Fix create copper scaffolding recipe')){
    removeRecipe({ id: 'create_things_and_misc:copper_scaffolding_craft' });
    addShaped("6x create:copper_scaffolding", ['csc', 'c c', 'c c'], { c: '#forge:ingots/copper', s: '#forge:ingots'})
}
// if (feature('Remove powdered_obsidian')) {
//     removeItem('create:powdered_obsidian')
//     removeRecipe({ id: 'create:mixing/chromatic_compound' })
//     addMixing('create:chromatic_compound', ['3x obsidian', '3x glowstone_dust', 'create:polished_rose_quartz'], temperature.superHeated)
//     addAltar('create:chromatic_compound', ['2x create:polished_rose_quartz', 'obsidian'], 7500)
// }
if (feature('Remove tree fertilizer')) {
    removeItem('create:tree_fertilizer')
}
if (feature('Remove vanilla honey bottle recipe')) {
    removeRecipe({id: 'minecraft:honey_bottle'})
}

if (feature('Mechanical belt recipes')) {
    //leather
    addShaped('4x create:belt_connector', ['lll','lll'], { l: '#forge:leather' })
    //silicon
    addShaped('4x create:belt_connector', ['sss','sss'], { s: '#forge:silicon' })
    //combined
    addShaped('8x create:belt_connector', ['lll','sss','kkk'], { 
        l: '#forge:leather',
        s: '#forge:silicon',
        k: 'minecraft:dried_kelp'
    })
}

if (feature('Simpler encased fan')) {
    removeItem('create:propeller')
    addShaped('create:encased_fan', [
        ' s ',
        'pcp',
        'pap'
    ], {
        s : 'create:shaft',
        p : 'create:iron_sheet',
        c : 'create:andesite_casing',
        a : 'create:andesite_alloy'
    })
    
}

if (feature('Simpler mixer')) {
    removeItem('create:whisk')
    addShaped('create:mechanical_mixer',['aca','pCp','ppp'],{
        a : 'create:andesite_alloy',
        c : '#forge:cogs',
        C : 'create:andesite_casing',
        p : 'create:iron_sheet'
    })
}

if (feature('Simpler deployer')) {
    removeItem('create:brass_hand')
    addShaped('create:deployer', [' e ','bcb','bab'],{
        a : 'create:andesite_alloy',
        c : 'create:andesite_casing',
        e : '#forge:cogs',
        b : 'create:brass_sheet'
    })
}

if (feature('Cogs')) {
    addShaped('create:large_cogwheel',[' w ','wsw',' w '],{
        w : '#minecraft:planks',
        s : 'create:shaft'
    })
    removeRecipe({id:'create:crafting/kinetics/large_cogwheel'})
    removeRecipe({id:'create:crafting/kinetics/cogwheel'})
    removeRecipe({id:'create:crafting/kinetics/large_cogwheel_from_little'})
    addItemApplication('create:large_cogwheel', 'create:cogwheel', '#forge:tools/axes')
    addItemApplication('create:cogwheel', 'create:large_cogwheel', '#forge:tools/axes')
    addShapeless('create:cogwheel','create:large_cogwheel')
    addShapeless('create:large_cogwheel', 'create:cogwheel')
    replaceInputForRecipes('create:cogwheel', '#forge:cogs', { type:'minecraft:crafting_shaped' })   
    replaceInputForRecipes('create:cogwheel', '#forge:cogs', { type:'minecraft:crafting_shapeless' })   
}

if (feature('Application recipes')) {
    addItemApplication('create:adjustable_chain_gearshift', 'create:encased_chain_drive', 'create:electron_tube')
    removeRecipe({id:'create:crafting/kinetics/depot'})
    addItemApplication('create:depot', 'create:andesite_casing', 'create:andesite_alloy')
    addItemApplication('create:sail_frame', 'create:white_sail','#forge:tools/axes')
    addItemApplication('create:white_sail', 'create:sail_frame','#forge:tools/axes')
}

if (feature('Replace golden sheet with brass one')) {
    replaceInputForRecipes('create:golden_sheet', 'create:brass_sheet')
    removeRecipe({id:'create:crafting/curiosities/brown_toolbox'})   
    addShaped('create:brown_toolbox',[' c ','pCp',' l '],{
        c : '#forge:cogs',
        p : '#forge:plates',
        l : '#forge:leather',
        C : '#forge:chests'
    })
    removeItem('create:golden_sheet')
    removeRecipe({id:'create:crafting/kinetics/wrench'})
    addShaped('create:wrench',['pp ','pc ',' s '],{
        p : '#forge:plates',
        c : '#forge:cogs',
        s : '#forge:rods'
    })
    removeRecipe({id:'create:crafting/kinetics/steam_engine'})
    addShaped('create:steam_engine',['p','a','c'],{
        p : '#forge:plates', a: 'create:andesite_alloy', c: '#forge:storage_blocks/copper'
    })
    removeRecipe({id:'create:crafting/kinetics/goggles'})
    addShaped('create:goggles',[' s ','gpg'],{
        s : '#forge:string', g: '#forge:glass', p: '#forge:plates'
    })
    removeRecipe({id:'create:crafting/kinetics/weighted_ejector'})
    addShaped('create:weighted_ejector',['p','d','c'],{
        p: '#forge:plates', d: 'create:depot', c: '#forge:cogs'
    })
    removeRecipe({id:'create:crafting/kinetics/steam_whistle'})
    addShapeless('create:steam_whistle', ['#forge:ingots/copper', '#forge:plates'])
}
if (feature('Alternate precision mechanism')) {
    let p = 'create:precision_mechanism'
    let b = 'create:brass_sheet'
    addAssembly(['create:precision_mechanism %80','create:brass_sheet %5', 'create:andesite_alloy %5', 'create:cogwheel %5', 'minecraft:clock %5'], 'create:brass_sheet',[
        addDeploying(p,b,'minecraft:gold_nugget'),
        addDeploying(p,b,'#forge:cogs'),
        addDeploying(p,b,'#forge:nuggets'),
        addDeploying(p,b,'#forge:dyes'),
    ],4, 'create:incomplete_precision_mechanism')
}

if (feature('better tracks')) {
    removeRecipe({id : 'create:sequenced_assembly/track'})
    addAssembly(['create:track'], '#create:sleepers',[
        addDeploying('create:track', '#create:sleepers', 'botania:livingwood_planks'),
        addDeploying('create:track', '#create:sleepers', 'botania:livingwood_planks'),
        addDeploying('create:track', '#create:sleepers', 'minecraft:iron_nugget'),
        addPressing('create:track', '#create:sleepers')
    ],2,'create:incomplete_track')
    addAssembly(['create:track %90', 'raw_iron %4', 'iron_nugget %3', 'stone %3'], '#create:sleepers',[
        addDeploying('create:track', '#create:sleepers', '#minecraft:logs'),
        addDeploying('create:track', '#create:sleepers', 'minecraft:iron_nugget'),
        addDeploying('create:track', '#create:sleepers', 'minecraft:iron_nugget'),
        addPressing('create:track', '#create:sleepers')
    ],undefined,'create:incomplete_track')    
}

if (feature('Funnels and tunnels with silicon and leather')) {
    addShaped('2x create:andesite_funnel',['a','l'],{a:'create:andesite_alloy', l:'leather'})
    addShaped('2x create:andesite_funnel',['a','l'],{a:'create:andesite_alloy', l:'refinedstorage:silicon'})
    addShaped('2x create:brass_funnel',['e','a','l'],{e:'create:electron_tube',a:'create:andesite_alloy', l:'leather'})
    addShaped('2x create:brass_funnel',['e','a','l'],{e:'create:electron_tube',a:'create:andesite_alloy', l:'refinedstorage:silicon'})
    
    addShaped('2x create:andesite_tunnel',['aa','ll'],{a:'create:brass_ingot', l:'leather'})
    addShaped('2x create:andesite_tunnel',['aa','ll'],{a:'create:brass_ingot', l:'refinedstorage:silicon'})
    addShaped('2x create:brass_tunnel',['e ','aa','ll'],{e:'create:electron_tube',a:'create:brass_ingot', l:'leather'})
    addShaped('2x create:brass_tunnel',['e ','aa','ll'],{e:'create:electron_tube',a:'create:brass_ingot', l:'refinedstorage:silicon'})
}

// if (feature('Experiment')) {
//     let out = Item.of('wares:delivery_agreement', '{ordered:10,paymentItems:[{Count:1,id:"minecraft:emerald"}],requestedItems:[{Count:384,id:"minecraft:baked_potato"}],title:\'{"text":"A Great Deal"}\'}')
//     addShapeless(out, 'paper')
//     addAssembly(out, 'minecraft:iron_nugget',[
//         addDeploying(out, 'minecraft:iron_nugget','minecraft:stone_axe'),
//     ],100)
// }
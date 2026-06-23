const productsData = [
    {name:"Body Splash Lattafa Angham", category:"Body Splash", price:120, stock:1, image:"anghambs.png", desc:"Leve, envolvente e perfeito para o dia a dia."},
    {name:"Body Splash Lattafa Badee Al Noble", category:"Body Splash", price:120, stock:2, image:"body-splash-lattafa-badee-al-noble.png", desc:"Fragrância marcante com toque sofisticado."},
    {name:"Body Splash Lattafa Eclaire", category:"Body Splash", price:120, stock:2, image:"splasheclaire.png", desc:"Doce, elegante e irresistível."},
    {name:"Body Splash Lattafa Fakhar Feminino", category:"Body Splash", price:120, stock:2, image:"bsfakhar.png", desc:"Feminino, refinado e marcante."},
    {name:"Body Splash Lattafa Haya", category:"Body Splash", price:120, stock:1, image:"bshaya.png", desc:"Leveza e sofisticação em uma fragrância delicada."},
    {name:"Body Splash Lattafa Mayar Cherry Intense", category:"Body Splash", price:120, stock:1, image:"bsmayarcherry.png", desc:"Frutado intenso com presença envolvente."},
    {name:"Body Splash Lattafa Mayar Natural Intense", category:"Body Splash", price:120, stock:1, image:"bsmayarnatural.png", desc:"Marcante, fresco e sofisticado."},
    {name:"Body Splash Lattafa Sehr", category:"Body Splash", price:120, stock:1, image:"bssehr.png", desc:"Aroma elegante para todos os momentos."},
    {name:"Body Splash Lattafa Yara", category:"Body Splash", price:120, stock:1, image:"bsmistyara.png", desc:"Doce, feminino e delicado."},
    {name:"Body Splash Lattafa Yara Tous", category:"Body Splash", price:120, stock:2, image:"bsyaratous.png", desc:"Tropical, alegre e envolvente."},
    {name:"Lattafa All Over Yara Tous 150ml", category:"All Over Spray", price:120, stock:1, image:"bsalloveryaratous.png", desc:"Versátil para perfumar corpo e rotina."},
    {name:"Victoria's Secret Pure Seduction", category:"Body Splash", price:140, stock:1, image:"vsseduction.png", desc:"Frutado, feminino e sedutor."},
    {name:"Victoria's Secret Love Spell", category:"Body Splash", price:140, stock:1, image:"vslovespell.png", desc:"Clássico, doce e inesquecível."},
    {name:"Victoria's Secret Body Lotion", category:"Hidratante", price:140, stock:1, image:"bslotion.png", desc:"Hidratação perfumada com toque luxuoso."},
    {name:"Victoria's Secret Love Spell Creme Hidratante", category:"Hidratante", price:140, stock:1, image:"vshidratante.png", desc:"Pele macia com aroma marcante."},
    {name:"Armaf Elixir Of The Wild Masculino", category:"Body Splash", price:120, stock:1, image:"bselixirofwild.png", desc:"Masculino, intenso e moderno."},
    {name:"Armaf I Am Velvet Mirage", category:"Body Splash", price:120, stock:2, image:"bsvelvetmirage.png", desc:"Elegante, aveludado e sofisticado."},
    {name:"Armaf I Am Eba", category:"Body Splash", price:120, stock:2, image:"bseba.png", desc:"Compartilhável, moderno e envolvente."},
    {name:"Armaf I Am Lyna", category:"Body Splash", price:120, stock:2, image:"bslyna.png", desc:"Leve, feminina e cheia de personalidade."},
    {name:"Armaf I Am Enigma", category:"Body Splash", price:120, stock:2, image:"bsenigma.png", desc:"Misterioso e marcante."},
    {name:"Armaf I Am Celestial", category:"Body Splash", price:120, stock:2, image:"bscelestial.png", desc:"Sofisticado e luminoso."},
    {name:"Armaf I Am Fire", category:"Body Splash", price:120, stock:2, image:"bsfire.png", desc:"Quente, ousado e marcante."},
    {name:"Armaf I Am Heavenly", category:"Body Splash", price:120, stock:2, image:"bsheavenly.png", desc:"Suave, elegante e delicado."},
    {name:"Armaf I Am Divine", category:"Body Splash", price:120, stock:2, image:"bsdivine.png", desc:"Feminino, refinado e angelical."},
    {name:"Armaf I Am Selfless", category:"Body Splash", price:120, stock:2, image:"bsselfless.png", desc:"Leve, clean e envolvente."},
    {name:"Armaf I Am Magic", category:"Body Splash", price:120, stock:2, image:"bsmagic.png", desc:"Aroma encantador e sofisticado."},
    {name:"Armaf I Am Frozen", category:"Body Splash", price:120, stock:2, image:"bsfrozen.png", desc:"Refrescante, moderno e marcante."},
    {name:"Armaf I Am Kaya", category:"Body Splash", price:120, stock:2, image:"bskaya.png", desc:"Feminino e envolvente."},
    {name:"Armaf I Am Legacy", category:"Body Splash", price:120, stock:2, image:"bslegacy.png", desc:"Presença marcante e elegante."},
    {name:"Body Splash Musamam Glitter Feminino", category:"Body Splash", price:120, stock:2, image:"musamsnglitter.png", desc:"Brilho, feminilidade e sofisticação."},
    {name:"Body Splash Fakhar", category:"Body Splash", price:120, stock:2, image:"splashfakhar.png", desc:"Elegância em versão leve e versátil."},
    {name:"Asad Elixir Lattafa Masculino", category:"Perfume", price:280, stock:2, image:"pasaadelixir.png", desc:"Intenso, masculino e poderoso."},
    {name:"Yara Elixir Lattafa Feminino", category:"Perfume", price:250, stock:2, image:"pyaraelixir.png", desc:"Doce, feminino e marcante."},
    {name:"Urban Man Ultra Masculino", category:"Perfume", price:230, stock:2, image:"urbanmanultra.png", desc:"Moderno, urbano e elegante."},
    {name:"Mayar Intense Feminino", category:"Perfume", price:200, stock:2, image:"bsmayarintense.png", desc:"Frutado, intenso e sofisticado."},
    {name:"Fakhar Gold Extrait Masculino", category:"Perfume", price:200, stock:1, image:"fakhargold.png", desc:"Elegante, intenso e inesquecível."},
    {name:"Fakhar Platinum Masculino", category:"Perfume", price:240, stock:1, image:"fakharplatinum.png", desc:"Luxo masculino com presença refinada."},
    {name:"Asad Bourbon Masculino", category:"Perfume", price:280, stock:1, image:"pasaadbourbom.png", desc:"Quente, marcante e sofisticado."},
    {name:"Qaed Al Fursan Masculino", category:"Perfume", price:170, stock:1, image:"oqaedalfursan.png.png", desc:"Clássico árabe com personalidade."},
    {name:"Ferrari Black Scuderia Masculino", category:"Perfume", price:200, stock:2, image:"pferrariblack.png", desc:"Esportivo, elegante e marcante."},
    {name:"Sharaf Blend Zimaya Masculino", category:"Perfume", price:260, stock:1, image:"psharaf.png", desc:"Blend intenso com assinatura sofisticada."},
    {name:"Khamrah Masculino", category:"Perfume", price:200, stock:1, image:"pkramrah.png", desc:"Doce, quente e envolvente."},
    {name:"Pride Nebras Lattafa Feminino", category:"Perfume", price:260, stock:1, image:"ppridenebras.png", desc:"Feminino, cremoso e marcante."},
    {name:"Eclaire Lattafa Feminino", category:"Perfume", price:240, stock:2, image:"oeclaireparfum.png", desc:"Doce gourmand com toque sofisticado."},
    {name:"Victoria Lattafa Feminino", category:"Perfume", price:220, stock:2, image:"pvictoria.png", desc:"Elegante, feminino e moderno."},
    {name:"Yara Rosa Tradicional", category:"Perfume", price:190, stock:2, image:"pyara.png", desc:"Doce, delicado e queridinho."},
    {name:"Musamam Lattafa Feminino", category:"Perfume", price:290, stock:1, image:"omusaman.png", desc:"Luxuoso, intenso e sofisticado."},
    {name:"Sabah Al Ward Sugar Feminino", category:"Perfume", price:180, stock:2, image:"psugar.png", desc:"Doce, floral e irresistível."},
    {name:"Sabah Al Ward Tradicional Feminino", category:"Perfume", price:160, stock:2, image:"psabahalwerd.png", desc:"Floral, feminino e elegante."},
    {name:"Rayhaan Corium Masculino", category:"Perfume", price:240, stock:1, image:"prayhaamcorium.png", desc:"Masculino, encorpado e refinado."},
    {name:"Rayhaan Elixir Masculino", category:"Perfume", price:250, stock:1, image:"orayhaamelixir.png", desc:"Intenso, elegante e moderno."},
    {name:"Rayhaan Dahliya Feminino", category:"Perfume", price:196, stock:1, image:"rayhaandahliya.png", desc:"Floral, feminino e sofisticado."},
    {name:"Animale For Men", category:"Perfume", price:230, stock:1, image:"animaleformen.png", desc:"Clássico masculino com presença."},
    {name:"Sakeena Lattafa Feminino", category:"Perfume", price:190, stock:2, image:"psakeena.png", desc:"Feminino, doce e elegante."},
    {name:"Turathi Electric", category:"Perfume", price:290, stock:2, image:"novos/turathielectric.png", desc:"Fresco, sofisticado e marcante."},
{name:"Vulcan Feu", category:"Perfume", price:323, stock:2, image:"novos/vulcanfeu.png", desc:"Intenso, quente e envolvente."},
{name:"Habik", category:"Perfume", price:210, stock:2, image:"novos/habic.png", desc:"Marcante e sofisticado."},
{name:"Hugo Boss Bottled", category:"Perfume", price:430, stock:1, image:"novos/hugobossbottled.png", desc:"Elegância masculina atemporal."},
{name:"Hugo Boss Bottled Night", category:"Perfume", price:320, stock:1, image:"novos/hugobossbottlednight.png", desc:"Sofisticado e noturno."},
{name:"One Million EDT", category:"Perfume", price:491, stock:1, image:"novos/onemillion.png", desc:"Luxuoso, marcante e envolvente."},
{name:"Odyssey Limoni", category:"Perfume", price:205, stock:2, image:"novos/odysseylimoni.png", desc:"Cítrico, vibrante e refrescante."},
{name:"Pacific Blue 100ML", category:"Perfume", price:170, stock:2, image:"novos/pacificblue.png", desc:"Fresco e versátil."},
{name:"Pacific Blue 30ML", category:"Perfume", price:60, stock:2, image:"novos/pacificblue30ml.png", desc:"Fresco e versátil."},
{name:"Rayhaan Lion", category:"Perfume", price:250, stock:2, image:"novos/rayhaanlion.png", desc:"Masculino, elegante e poderoso."},
{name:"Kayaan Classic", category:"Perfume", price:195, stock:2, image:"novos/kayaanclassic.png", desc:"Refinado e sofisticado."},
{name:"Ameerat Al Arab", category:"Perfume", price:160, stock:2, image:"novos/ameeratialarab.png", desc:"Feminino, delicado e sofisticado."},
{name:"Ameerat Prive Rose", category:"Perfume", price:160, stock:2, image:"novos/ameeratpriverose.png", desc:"Rosa elegante e envolvente."},
{name:"Delilah Rosa", category:"Perfume", price:240, stock:2, image:"novos/delilahrosa.png", desc:"Feminino e encantador."},
{name:"Basir", category:"Perfume", price:280, stock:2, image:"novos/basir.png", desc:"Sofisticado e marcante."},
{name:"Petra", category:"Perfume", price:230, stock:2, image:"novos/petra.png", desc:"Elegante e moderna."},
{name:"Shaghaf Al Ward", category:"Perfume", price:170, stock:2, image:"novos/shagaf.png", desc:"Floral intenso e refinado."},
{name:"Athena", category:"Perfume", price:260, stock:2, image:"novos/athena.png", desc:"Elegante e feminina."},
{name:"La Vivacité 100ML", category:"Perfume", price:170, stock:2, image:"novos/lavivacite.png", desc:"Leve, moderna e sofisticada."},
{name:"La Vivacité 30ML", category:"Perfume", price:60, stock:2, image:"novos/lavivacite30ml.png", desc:"Leve, moderna e sofisticada."},

{name:"Marshmallow Blush", category:"Perfume", price:270, stock:2, image:"novos/marshmallowblush.png", desc:"Doce, cremoso e irresistível."},

{name:"Play Lattafa Kids", category:"Perfume", price:115, stock:2, image:"novos/playlattafakids.png", desc:"Fragrância divertida para crianças."},

{name:"Stop Wait Go Lattafa Kids", category:"Perfume", price:115, stock:2, image:"novos/stopwaitgolataffakids.png", desc:"Aroma alegre e delicado."},

{name:"Kit Dreams Collection Men 03", category:"Perfume", price:150, stock:2, image:"novos/kitdreamerscollectionmen03.png", desc:"Kit especial masculino."},

{name:"Kit Yara Mini", category:"Perfume", price:250, stock:2, image:"novos/kityaramini.png", desc:"Coleção especial Yara."},
{name:"Odyssey Mandarin Sky Kit Men", category:"Perfume", price:325, stock:2, image:"novos/odysseymandarinsky.png", desc:"Kit masculino premium com perfume, shower gel, desodorante e shampoo."},
{name:"Silver Scent", category:"Perfume", price:170, stock:2, image:"novos/silverscent.png", desc:"Masculino, intenso e sofisticado. Um clássico marcante da Jacques Bogart."},
{name:"CK One", category:"Perfume", price:230, stock:2, image:"novos/ckone.png", desc:"Refrescante, compartilhável e icônico. Um clássico unissex para qualquer ocasião."},
{name:"CK Be", category:"Perfume", price:180, stock:2, image:"novos/ckbe.png", desc:"Suave, moderno e versátil. Perfeito para o dia a dia."},
{name:"Salvo Elixir", category:"Perfume", price:150, stock:2, image:"novos/salvoelixir.png", desc:"Intenso, elegante e marcante. Excelente fixação e presença."},  
{name:"Glacier Ultra 30ML", category:"Perfume", price:60, stock:2, image:"novos/glacierultraedp.png", desc:"Fresco, moderno e elegante. Ideal para o dia a dia."},

{name:"Glacier Ultra Maison Alhambra 100ML", category:"Perfume", price:170, stock:2, image:"novos/glacierultramaisonalhambra.png", desc:"Refrescante, versátil e com ótima presença."},

{name:"Club de Nuit Intense Man", category:"Perfume", price:290, stock:2, image:"novos/clubdenuitintenseman.png", desc:"Cítrico, sofisticado e extremamente elogiado."},

{name:"Club de Nuit Iconic", category:"Perfume", price:320, stock:2, image:"novos/clubdenuiticonic.png", desc:"Elegante, moderno e de alta performance."},

{name:"Musamam White Intense", category:"Perfume", price:290, stock:2, image:"novos/musamamwhiteintense.png", desc:"Luxuoso, cremoso e marcante."},

{name:"Sutoor", category:"Perfume", price:180, stock:2, image:"novos/sutoor.png", desc:"Elegante, refinado e envolvente."},

{name:"Chants Tenderina", category:"Perfume", price:170, stock:2, image:"novos/chantstenderina.png", desc:"Delicado, feminino e encantador."},

{name:"Chants Tenderina 30ML", category:"Perfume", price:60, stock:2, image:"novos/chantstenderina30ml.png", desc:"Delicado, feminino e encantador."},

{name:"So Candid 100ML", category:"Perfume", price:180, stock:2, image:"novos/socandid.png", desc:"Doce, moderno e irresistível."},

{name:"So Candid 30ML", category:"Perfume", price:60, stock:2, image:"novos/socandid30ml.png", desc:"Doce, moderno e irresistível."},

{name:"Durrat Al Aroos", category:"Perfume", price:170, stock:2, image:"novos/durratalaroos.png", desc:"Floral sofisticado com toque árabe marcante."},

{name:"Titans Splash", category:"Body Splash", price:80, stock:2, image:"novos/titanssplash.png", desc:"Refrescante, leve e perfeito para o dia a dia."},

{name:"Candy Pop", category:"Body Splash", price:80, stock:2, image:"novos/candypop.png", desc:"Doce, divertido e cheio de personalidade."},

{name:"Bubble Gum", category:"Body Splash", price:80, stock:2, image:"novos/bubblegum.png", desc:"Aroma adocicado e super jovial."},

{name:"Stallion 53", category:"Perfume", price:190, stock:2, image:"novos/stallion53.png", desc:"Masculino, intenso e extremamente marcante."},
{name:"Ameerat Al Arab All Over Spray 150ml", category:"Body Splash", price:120, stock:2, image:"novos/ameeratalaraballoverspray.png", desc:"Feminino, refrescante e sofisticado. Perfumação prolongada com o DNA marcante da linha Ameerat Al Arab."},
{name:"9PM", category:"Perfume", price:246, stock:2, image:"novos/9pm.png", desc:"Doce, moderno e noturno."},

{name:"Invictus Tradicional", category:"Perfume", price:470, stock:2, image:"novos/invictus.png", desc:"Fresco, esportivo e poderoso."},

{name:"Yara Body Creme", category:"Hidratante", price:160, stock:2, image:"novos/yarabodycreme.png", desc:"Hidratação perfumada e luxuosa."},

{name:"Kit Dreams Collection 04", category:"Perfume", price:150, stock:2, image:"novos/kitdreamscollection04.png", desc:"Kit especial com fragrâncias selecionadas."},
];
 
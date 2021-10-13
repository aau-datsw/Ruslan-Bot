const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports ={
    data: new SlashCommandBuilder()
        .setName('brætspil')
        .setDescription('brætspil ideer'),
    async execute(interaction){
        interaction.reply({content:`**Ideer til online brætspil!**

        Skribbl er et tegn og gæt spil som giver invitation til en masse sjov og gode grin!
        <https://skribbl.io/>
        *Op til 12 spillere*
        
        Colonist den online version af brætspillet Catan, hvor det handler om at bygge en civilisation og derefter udvide dit territorie.
        <https://colonist.io/>
        *Op til 8 spillere*
        
        Monopoli er en af de online versioner af Monopoly, hvor det handler som altid om at købe og sælge og om at blive rig i en fart!
        <https://boardgamesonline.net/Games/online/play/monopoli>
        *Op til 8 spillere*
        
        Codenames går ud på at to hold konkurrerer ved, at hver har en "spymaster", der giver et-ord ledetråde, der kan pege på flere ord på brættet.
        <https://codenames.game/>
        *Op til 8 spillere*
        
        Playing cards har alverdens kortspil som f.eks. 500, fisk, hjerter og andre spil såsom skak, backgammon osv! 
        <https://playingcards.io/>
        *Op til flere spillere*
        
        Cards against humanity er den engelske version af det danske version af "Det dårlige selskab" som handler om at skabe sjove, upassende eller komiske scenarier ved at udfylde mangelfulde sætninger med svarkort!
        <https://pyx-1.pretendyoure.xyz/zy/game.jsp>
        *Op til 20 spillere*
        
        Mancala er et lignede kalaha spil som handler om at få samlet flest kugler i sin kalaha!
        <https://mancala.playdrift.com/>
        *2 spillere krævet*
            
        **Kræver log in**
        Secret hitler er et social deduction game som handler om at få stoppet den hemmelige Hitler! 
        <https://secrethitler.io/>
        *Op til 10 spillere* 
            
        **Kræver log in**
        Warzone er den online version af Risk, hvor det handler om at erobre verden ved at overtage kontrollen over alle områder! 
        <https://www.warzone.com/>
        *Op til 6 spillere*`, ephemeral: true})
    }
}
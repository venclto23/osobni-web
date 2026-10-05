import fotka from "./assets/react.svg";
import "./App.css";

function App() {
  return (
    <>
      <nav className="menu">
        <a href="#omne">O mně</a>
        <a href="#projekty">Projekty</a>
        <a href="#blog">Blog</a>
        <a href="#vzdelani">Vzdělání a kurzy</a>
      </nav>

      <div className="uvod">
        <img src={fotka} className="fotka" />
        <h1>Tomáš Venclíček</h1>
        <p>Student 4. ročníku SPŠ Prosek</p>
      </div>

      <div id="ahoj">ahoj</div>

      <div className="sekce" id="omne">
        <h2>O MNĚ</h2>
        <p>
          Jmenuju se Tomáš Venclíček a studuji 4. ročník Střední průmyslové
          školy na Proseku, obor Vývoj aplikací. Nejčastěji pracuji v PHP a
          věnuji se hlavně tvorbě webových aplikací. Momentálně se učím také
          React a postupně si rozšiřuji znalosti o další technologie
        </p>
      </div>

      <div className="sekce" id="projekty">
        <h2>PROJEKTY</h2>

        <div className="polozka">
          <h3>Telegram bot na sledování cen kryptoměn</h3>
          <p>
            Bot na Telegramu, který sleduje ceny kryptoměn a pošle upozornění
            když cena stoupne nebo klesne o nastavený počet procent. Taky umí
            vytvořit graf vývoje ceny a hledá novinky ze světa kryptoměn. Data
            beru z API Binance a uživatele a jejich nastavení ukládám do
            databáze.
          </p>
          <div className="stitky">
            <span className="stitek">Python</span>
            <span className="stitek">Telegram API</span>
            <span className="stitek">Binance API</span>
            <span className="stitek">databáze</span>
          </div>
        </div>

        <div className="polozka">
          <h3>Vlastní CMS</h3>
          <p>
            Jednoduchý redakční systém, kde se dá přihlásit do administrace a
            přidávat, upravovat a mazat články. Články se ukládají do databáze a
            pak se vypisují na webu.
          </p>
          <div className="stitky">
            <span className="stitek">PHP</span>
            <span className="stitek">MySQL</span>
            <span className="stitek">HTML</span>
            <span className="stitek">CSS</span>
          </div>
        </div>

        <a
          className="github"
          href="https://github.com/venclto23"
          target="_blank"
        >
          <svg className="ikona">
            <use href="/icons.svg#github-icon"></use>
          </svg>
        </a>
      </div>

      <div className="sekce" id="blog">
        <h2>BLOG</h2>

        <div className="polozka">
          <p className="datum">3. 10. 2026</p>
          <h3>Jak vybrat počítač na práci</h3>
          <p>
            Na co se zaměřit při výběru počítače a které komponenty jsou
            důležité. Podle mě je nejdůležitější mít aspoň 16 GB RAM a SSD disk,
            protože to je na rychlosti poznat nejvíc. Na programování a práci s
            webem stačí i průměrný procesor a drahou grafickou kartu potřebuješ
            hlavně na hry nebo střih videa.
          </p>
        </div>

        <div className="polozka">
          <p className="datum">3. 10. 2026</p>
          <h3>SSD vs. HDD</h3>
          <p>
            Jaký je mezi nimi rozdíl a proč dnes většina počítačů používá SSD.
            HDD má uvnitř točící se plotny a čtecí hlavu, kdežto SSD ukládá data
            do flash pamětí bez pohyblivých částí, takže je mnohem rychlejší a
            tišší. HDD má dnes smysl hlavně na zálohy a velké množství dat,
            protože je levnější.
          </p>
        </div>

        <div className="polozka">
          <p className="datum">3. 10. 2026</p>
          <h3>Co je RAM a k čemu slouží</h3>
          <p>
            Jednoduché vysvětlení operační paměti a jejího vlivu na počítač. RAM
            je rychlá paměť, do které si počítač ukládá data právě spuštěných
            programů, a po vypnutí se vymaže. Když jí je málo, počítač začne
            odkládat data na disk a všechno se zpomalí.
          </p>
        </div>
      </div>

      <div className="sekce" id="vzdelani">
        <h2>VZDĚLÁNÍ A KURZY</h2>

        <div className="certifikat">
          <div>
            <h3>SPŠ Prosek</h3>
            <p>Vývoj aplikací</p>
          </div>
          <span className="datum">4. ročník</span>
        </div>

        <div className="certifikat">
          <div>
            <h3>Certifikát 1</h3>
          </div>
          <span className="datum">2025</span>
        </div>

        <div className="certifikat">
          <div>
            <h3>Certifikát 2</h3>
          </div>
          <span className="datum">2026</span>
        </div>
      </div>
    </>
  );
}

export default App;

"use client";

import { FormEvent, useState } from "react";

const capabilities = [
  {
    index: "01",
    title: "多源數據整合",
    text: "串接設備、感測器與既有系統，將分散資料匯入同一個監控視野。",
    tag: "CONNECT",
  },
  {
    index: "02",
    title: "即時狀態監控",
    text: "持續掌握關鍵指標、設備狀態與事件變化，讓營運現況清晰可見。",
    tag: "OBSERVE",
  },
  {
    index: "03",
    title: "智慧告警規則",
    text: "依門檻、持續時間、複合條件與狀態變化，精準辨識真正需要處理的異常。",
    tag: "DETECT",
  },
  {
    index: "04",
    title: "多通道即時通知",
    text: "透過 Email、通訊軟體與語音等管道，將事件送達正確的人員。",
    tag: "NOTIFY",
  },
  {
    index: "05",
    title: "告警生命週期",
    text: "從觸發、通知、確認到解除，保留完整軌跡，讓每個事件都有責任與進度。",
    tag: "RESPOND",
  },
  {
    index: "06",
    title: "視覺化營運洞察",
    text: "以儀表板、趨勢與歷史紀錄，快速看見風險模式與改善機會。",
    tag: "IMPROVE",
  },
];

const caseStudies = [
  {
    number: "01",
    industry: "食品加工 / 製程監控",
    title: "精油萃取製程即時監控",
    text: "整合濃度、壓力與溫度感測，將關鍵製程數據即時呈現在同一個 Dashboard。",
    result: "製程趨勢可視化，異常自動告警，降低批次品質波動。",
    image: "/cases/essential-oil-dashboard.png",
  },
  {
    number: "02",
    industry: "能源管理 / 跨場域監控",
    title: "多案場電力監控平台",
    text: "集中整合各案場電流、功率、功率因數與用電量，遠端掌握即時負載。",
    result: "跨案場趨勢比較，異常用電即時告警，提升管理效率。",
    image: "/cases/power-dashboard.png",
  },
  {
    number: "03",
    industry: "電子製造 / 品質追溯",
    title: "生產履歷與批次品質履歷",
    text: "串接工序掃碼、設備狀態與零件品質測試值，建立批次與單件完整履歷。",
    result: "測試數據可追溯，支援報表與外銷履歷，減少人工抄錄。",
    image: "/cases/traceability-dashboard.png",
  },
  {
    number: "04",
    industry: "電子製造 / 光學檢測",
    title: "PCB 線上瑕疵檢測",
    text: "整合多鏡頭光學檢測、產線定位訊號與影像運算，線上判定缺陷。",
    result: "即時統計良率與瑕疵類型，檢測結果自動建立履歷。",
    image: "/cases/pcb-dashboard.png",
  },
  {
    number: "05",
    industry: "金屬加工 / 製程告警",
    title: "電鍍製程參數監控",
    text: "即時擷取各電鍍槽溫度、電流與關鍵參數，集中呈現製程趨勢。",
    result: "上下限異常自動告警，完整歷史紀錄協助維持品質一致。",
    image: "/cases/plating-dashboard.png",
  },
  {
    number: "06",
    industry: "紡織製造 / AI 檢測",
    title: "AI 線上驗色與高光譜色差檢測",
    text: "整合高光譜鏡頭、布長定位與 AI 模型，即時掌握左中右色差與幅寬。",
    result: "自動判定色差門檻與瑕疵分類，提供後續分級處理依據。",
    image: "/cases/textile-dashboard.png",
  },
];

const industries = [
  ["食品與農產加工", "製程溫壓、濃度、環境與批次品質監控"],
  ["紡織・製衣與鞋材", "色差、幅寬、瑕疵與生產狀態檢測"],
  ["電子與能源", "生產履歷、光學檢測與跨案場電力管理"],
  ["金屬與表面處理", "槽液溫度、電流與關鍵製程參數監控"],
  ["材料・薄膜與化工", "製程條件、設備狀態與異常趨勢追蹤"],
  ["檢驗與品保單位", "檢測數據整合、品質驗證與報表追溯"],
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Datacanvas 首頁">
          <span className="brand-mark" aria-hidden="true"><i /><i /><i /></span>
          <span>Datacanvas</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label="開啟導覽選單"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span /><span />
        </button>
        <nav className={menuOpen ? "nav-links is-open" : "nav-links"} aria-label="主要導覽">
          <a href="#capabilities" onClick={closeMenu}>核心能力</a>
          <a href="#platform" onClick={closeMenu}>系統畫面</a>
          <a href="#cases" onClick={closeMenu}>執行案例</a>
          <a href="#scenarios" onClick={closeMenu}>應用情境</a>
          <a className="nav-cta" href="#contact" onClick={closeMenu}>預約系統展示</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-glow hero-glow-one" aria-hidden="true" />
        <div className="hero-glow hero-glow-two" aria-hidden="true" />
        <div className="hero-copy reveal">
          <p className="eyebrow"><span /> REAL-TIME DATA INTELLIGENCE</p>
          <h1>讓每一筆數據，<br /><em>都成為行動的起點</em></h1>
          <p className="hero-lead">
            Datacanvas 將分散於設備與系統中的數據集中整合，持續監控關鍵狀態、精準辨識異常，並在事件發生時主動通知正確的人。
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contact">預約系統展示 <span>↗</span></a>
            <a className="button button-ghost" href="#capabilities">探索平台能力</a>
          </div>
          <div className="hero-proof">
            <span><i /> 彈性串接既有系統</span>
            <span><i /> 依需求規模快速導入</span>
          </div>
        </div>

        <div className="monitor-shell reveal reveal-delay" aria-label="Datacanvas 即時監控介面示意">
          <div className="monitor-topbar">
            <div className="monitor-brand"><span className="mini-mark" /> DATACANVAS / LIVE</div>
            <div className="live-badge"><i /> SYSTEM ONLINE</div>
          </div>
          <div className="monitor-body">
            <div className="metric-row">
              <article><span>DATA STREAMS</span><strong>128</strong><small>ACTIVE</small></article>
              <article><span>SYSTEM STATUS</span><strong>99.8<em>%</em></strong><small>NORMAL</small></article>
              <article className="alert-metric"><span>OPEN EVENTS</span><strong>03</strong><small>REVIEW</small></article>
            </div>
            <div className="chart-card">
              <div className="chart-heading"><span>即時數據脈動</span><small>LAST 60 MIN</small></div>
              <div className="chart-area">
                <div className="chart-lines"><i /><i /><i /><i /></div>
                <div className="bars" aria-hidden="true">
                  {[42, 55, 48, 70, 64, 82, 60, 76, 92, 74, 86, 68, 80, 96, 78, 88, 72, 91].map((height, index) => (
                    <span key={index} style={{ height: `${height}%`, animationDelay: `${index * 70}ms` }} />
                  ))}
                </div>
                <div className="scan-line" />
              </div>
            </div>
            <div className="event-list">
              <div className="event-head"><span>RECENT EVENTS</span><span>STATUS</span></div>
              <div><span><i className="dot amber" /> 溫度指標超出預設範圍</span><b>已通知</b></div>
              <div><span><i className="dot teal" /> 核心服務連線恢復</span><b className="resolved">已解除</b></div>
            </div>
          </div>
        </div>
        <div className="hero-index" aria-hidden="true">DC / 001</div>
      </section>

      <section className="signal-strip" aria-label="平台價值">
        <span>CONNECT <i /> 多源整合</span>
        <span>OBSERVE <i /> 即時監控</span>
        <span>DETECT <i /> 智慧判讀</span>
        <span>RESPOND <i /> 主動應變</span>
      </section>

      <section className="problem section">
        <div className="section-kicker">THE VISIBILITY GAP <span>01</span></div>
        <div className="problem-layout">
          <h2>資訊很多，真正重要的訊號<br />卻容易被<span>錯過。</span></h2>
          <div className="problem-copy">
            <p>當設備、系統與通知彼此分散，團隊往往在異常發生後，才開始尋找原因與確認責任。</p>
            <p>Datacanvas 建立單一、即時、可追蹤的營運視野，讓關鍵事件從「被看見」開始，到「被妥善處理」為止。</p>
          </div>
        </div>
        <div className="gap-diagram" aria-label="從分散資訊到統一行動的流程">
          <div className="source-stack">
            <span>設備數據 <i>01</i></span><span>環境感測 <i>02</i></span><span>系統事件 <i>03</i></span>
          </div>
          <div className="flow-line"><i /><b>UNIFIED DATA FLOW</b></div>
          <div className="core-node"><span className="brand-mark"><i /><i /><i /></span><strong>Datacanvas</strong><small>ONE SOURCE OF TRUTH</small></div>
          <div className="flow-line outgoing"><i /><b>ACTIONABLE SIGNAL</b></div>
          <div className="action-stack">
            <span>即時告警 <i>!</i></span><span>責任通知 <i>→</i></span><span>持續改善 <i>↗</i></span>
          </div>
        </div>
      </section>

      <section className="capabilities section" id="capabilities">
        <div className="section-heading">
          <div><div className="section-kicker">CORE CAPABILITIES <span>02</span></div><h2>從數據接入到事件閉環，<br />一個平台完整掌握。</h2></div>
          <p>把複雜的監控工作轉化為清晰、可執行的營運流程，讓團隊更早發現、更快判斷、更有效回應。</p>
        </div>
        <div className="capability-grid">
          {capabilities.map((item) => (
            <article className="capability-card" key={item.index}>
              <div className="card-top"><span>{item.index}</span><small>{item.tag}</small></div>
              <div className={`cap-icon cap-icon-${item.index}`} aria-hidden="true"><i /><i /><i /></div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <span className="card-corner">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section className="platform section" id="platform">
        <div className="platform-heading">
          <div>
            <div className="section-kicker">DATACANVAS PLATFORM <span>03</span></div>
            <h2>不只看見數據，<br />更能自由組織監控視野。</h2>
          </div>
          <p>直接串接感測點與資料庫，透過拖拉式元件建立專屬 Dashboard，從即時數值、趨勢到告警門檻都能集中管理。</p>
        </div>
        <div className="platform-frame">
          <div className="platform-windowbar">
            <span><i /><i /><i /></span>
            <b>DATACANVAS / DASHBOARD GALLERY</b>
            <small>LIVE SYSTEM</small>
          </div>
          <img src="/cases/platform-gallery.png" alt="Datacanvas Dashboard 系統畫面，顯示多種產業監控儀表板" />
        </div>
        <div className="platform-features">
          <article><span>01</span><h3>接回感測數據</h3><p>直接串接感測點與資料庫，數值即時轉為儀表板呈現。</p></article>
          <article><span>02</span><h3>自訂儀表板</h3><p>拖拉數值、趨勢、長條與儀表元件，自由設計資訊層級。</p></article>
          <article><span>03</span><h3>告警範圍設定</h3><p>各項數值獨立設定上下限，超出範圍即時觸發通知。</p></article>
          <article><span>04</span><h3>歷史紀錄保存</h3><p>完整留存數值與告警事件，快速回查趨勢與異常條件。</p></article>
        </div>
      </section>

      <section className="workflow section" id="workflow">
        <div className="workflow-copy">
          <div className="section-kicker">HOW IT WORKS <span>04</span></div>
          <h2>把異常處理，<br />變成可管理的流程。</h2>
          <p>Datacanvas 不只顯示數據，更將每一次狀態變化轉化為具備判斷邏輯、通知對象與處理進度的營運事件。</p>
          <a className="text-link" href="#contact">了解如何導入 <span>→</span></a>
        </div>
        <div className="workflow-steps">
          {[
            ["01", "連接", "整合設備、感測器與應用系統數據"],
            ["02", "判讀", "依條件與持續時間辨識異常"],
            ["03", "通知", "將事件即時送達負責人員"],
            ["04", "追蹤", "完整記錄確認、處理與解除狀態"],
          ].map(([num, title, text], index) => (
            <article key={num}>
              <div className="step-number">{num}</div>
              <div><h3>{title}</h3><p>{text}</p></div>
              <span className={index === 3 ? "step-status done" : "step-status"}>{index === 3 ? "CLOSED" : "LIVE"}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="advantage section">
        <div className="advantage-panel">
          <div className="advantage-visual" aria-hidden="true">
            <div className="orbit orbit-one"><i /></div><div className="orbit orbit-two"><i /></div><div className="orbit orbit-three"><i /></div>
            <div className="advantage-core"><span className="brand-mark"><i /><i /><i /></span><b>DC</b></div>
            <span className="orbit-label label-one">DATA</span><span className="orbit-label label-two">RULE</span><span className="orbit-label label-three">ALERT</span>
          </div>
          <div className="advantage-content">
            <div className="section-kicker">BUILT TO ADAPT <span>05</span></div>
            <h2>保留既有投資，<br />擴展未來能力。</h2>
            <p>Datacanvas 以彈性整合架構銜接既有設備與系統，無需大幅改造現有環境，即可逐步建立集中監控與智慧告警能力。</p>
            <div className="advantage-points">
              <span><i>01</i> 彈性整合多種資料來源</span>
              <span><i>02</i> 告警邏輯集中管理</span>
              <span><i>03</i> 依營運需求持續擴充</span>
              <span><i>04</i> 支援雲端與地端部署情境</span>
            </div>
          </div>
        </div>
      </section>

      <section className="case-studies section" id="cases">
        <div className="section-heading">
          <div><div className="section-kicker">PROVEN IN THE FIELD <span>06</span></div><h2>從現場感測到管理決策，<br />已有跨產業落地實證。</h2></div>
          <p>每個案例都從真實設備、製程與管理需求出發，將原本分散的資料轉為可監控、可追溯、可行動的資訊。</p>
        </div>
        <div className="case-grid">
          {caseStudies.map((item) => (
            <article className="case-card" key={item.number}>
              <div className="case-image">
                <img src={item.image} alt={`${item.title}的 Datacanvas 系統監控畫面`} />
                <span>CASE / {item.number}</span>
              </div>
              <div className="case-body">
                <small>{item.industry}</small>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <div className="case-result"><i />{item.result}</div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="scenarios section" id="scenarios">
        <div className="section-heading">
          <div><div className="section-kicker">ONE PLATFORM, MANY INDUSTRIES <span>07</span></div><h2>跨設備、跨系統、跨場域，<br />把現場資料變成管理能力。</h2></div>
          <p>從製程監控、能源管理到品質檢測，Datacanvas 能依不同產業的資料來源與管理需求彈性配置。</p>
        </div>
        <div className="industry-grid">
          {industries.map(([title, text], index) => (
            <article key={title}>
              <div className="industry-index">0{index + 1}</div>
              <div className={`industry-signal signal-${index + 1}`} aria-hidden="true"><i /><i /><i /></div>
              <h3>{title}</h3>
              <p>{text}</p>
              <span className="industry-arrow">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section className="contact section" id="contact">
        <div className="contact-panel">
          <div className="contact-copy">
            <div className="section-kicker light">START WITH VISIBILITY <span>08</span></div>
            <h2>讓關鍵數據，<br />開始為營運創造價值。</h2>
            <p>告訴我們你的監控需求，我們將與你一起評估適合的資料整合、告警策略與導入方式。</p>
            <div className="contact-meta">
              <span><i>01</i> 了解現況與需求</span>
              <span><i>02</i> 規劃展示與應用情境</span>
              <span><i>03</i> 提供導入方向建議</span>
            </div>
          </div>
          <div className="form-wrap">
            {submitted ? (
              <div className="success-state" role="status">
                <div className="success-icon">✓</div>
                <span>REQUEST RECEIVED</span>
                <h3>感謝你的聯絡</h3>
                <p>我們已收到預約需求，顧問將儘快與你聯繫。</p>
                <button type="button" onClick={() => setSubmitted(false)}>送出另一筆需求</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-heading"><div><span>BOOK A DEMO</span><h3>預約系統展示</h3></div><small>ALL FIELDS REQUIRED</small></div>
                <div className="field-row">
                  <label><span>姓名</span><input name="name" type="text" placeholder="請輸入姓名" required /></label>
                  <label><span>公司名稱</span><input name="company" type="text" placeholder="請輸入公司名稱" required /></label>
                </div>
                <div className="field-row">
                  <label><span>工作信箱</span><input name="email" type="email" placeholder="name@company.com" required /></label>
                  <label><span>聯絡電話</span><input name="phone" type="tel" placeholder="09xx-xxx-xxx" required /></label>
                </div>
                <label><span>需求說明</span><textarea name="message" rows={4} placeholder="簡單描述想監控的設備、系統或應用情境" required /></label>
                <button className="submit-button" type="submit">送出預約需求 <span>↗</span></button>
                <p className="privacy-note">送出即表示你同意我們為聯繫與需求評估目的使用以上資訊。</p>
              </form>
            )}
          </div>
        </div>
      </section>

      <footer>
        <a className="brand" href="#top"><span className="brand-mark" aria-hidden="true"><i /><i /><i /></span><span>Datacanvas</span></a>
        <p>REAL-TIME DATA MONITORING &amp; INTELLIGENT ALERTING</p>
        <span>© 2026 Aeyeot Technology Co., Ltd.</span>
      </footer>
    </main>
  );
}

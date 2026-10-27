import content from "../content/home.json";
const Arrow = () => <span aria-hidden="true">↗</span>;
export default function Home() {
  const { brand } = content;
  return (
    <>
      <a className="skip" href="#main">
        본문으로 건너뛰기
      </a>
      <header className="header">
        <a className="wordmark" href="#main" aria-label="슬리피 홈">
          {brand.englishName}
          <span>.</span>
        </a>
        <nav aria-label="주요 메뉴">
          <a href="#about">브랜드 소개</a>
          <a href="#product">제품 소개</a>
          <a href="#faq">FAQ</a>
          <a className="nav-contact" href="#contact">
            문의하기 <Arrow />
          </a>
        </nav>
      </header>
      <main id="main">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">
              <i /> DIGITAL HEALTHCARE
            </p>
            <h1 id="hero-title">
              슬리피,
              <br />
              <span>디지털 헬스케어.</span>
            </h1>
            <p className="hero-description">
              비약물적 방법의 디지털 수면제와 마취제를 개발하는
              <br className="desktop-break" /> 디지털 헬스케어 스타트업입니다.
            </p>
            <a className="button" href="#product">
              슬리피 제품 알아보기 <Arrow />
            </a>
            <div className="hero-footnote">
              <span /> SLEEPY · DIGITAL HEALTHCARE
            </div>
          </div>
          <div
            className="hero-art"
            role="img"
            aria-label="고요한 밤을 표현한 추상 그래픽. 제품 사진이 아닙니다."
          >
            <div className="art-grid" />
            <span className="art-top">SLEEPY — DIGITAL HEALTHCARE</span>
            <div className="orbit one" />
            <div className="orbit two" />
            <div className="orbit three" />
            <div className="moon" />
            <span className="star star-one">+</span>
            <span className="star star-two">+</span>
            <div className="art-bottom">
              <span>sleepy.</span>
              <span className="art-index">DIGITAL HEALTHCARE</span>
            </div>
          </div>
        </section>
        <section
          id="about"
          className="section about"
          aria-labelledby="about-title"
        >
          <div className="section-label">
            <span>01 / ABOUT SLEEPY</span>
            <i />
          </div>
          <div className="about-content">
            <h2 id="about-title">슬리피를 소개합니다.</h2>
            <div>
              <p>{brand.companyIntro}</p>
              <span className="tag">비약물적 접근</span>
              <span className="tag">디지털 헬스케어</span>
            </div>
          </div>
        </section>
        <section
          id="product"
          className="section product"
          aria-labelledby="product-title"
        >
          <div className="section-label">
            <span>02 / PRODUCT</span>
            <i />
          </div>
          <div className="section-heading">
            <h2 id="product-title">슬리피의 제품을 만나보세요.</h2>
            <span>제품 소개</span>
          </div>
          <div className="empty-product">
            <div className="empty-symbol" aria-hidden="true">
              ↗
            </div>
            <div>
              <h3>제품 소개를 준비하고 있습니다.</h3>
              <p>
                제품 사진과 상세 정보, 사용 방법 및 구매 안내가 등록되면
                이곳에서 확인할 수 있습니다.
              </p>
            </div>
            <span className="preparing">준비 중</span>
          </div>
        </section>
        <div className="section support-grid">
          <section id="faq" aria-labelledby="faq-title">
            <span className="eyebrow">03 / FAQ</span>
            <h2 id="faq-title">궁금한 점이 있으신가요?</h2>
            <p>
              등록된 FAQ가 없습니다.
              <br />
              자주 묻는 질문과 답변을 준비하고 있습니다.
            </p>
          </section>
          <section id="contact" aria-labelledby="contact-title">
            <span className="eyebrow">04 / CONTACT</span>
            <h2 id="contact-title">슬리피에 문의하기</h2>
            <p>
              문의 채널을 준비하고 있습니다.
              <br />
              안내가 등록되면 이곳에서 확인할 수 있습니다.
            </p>
          </section>
        </div>
      </main>
      <footer className="footer">
        <a className="wordmark" href="#main">
          {brand.englishName}
          <span>.</span>
        </a>
        <p>슬리피 · 디지털 헬스케어</p>
        <a href="#main">맨 위로 ↑</a>
      </footer>
    </>
  );
}

import { useNavigate } from 'react-router-dom'

export function HomePage() {
  const navigate = useNavigate()

  return (
    <div className="home">
      <header className="home__masthead">
        <span className="home__year font-en">2026</span>
        <span className="home__masthead-x" aria-hidden="true" />
        <span className="home__masthead-brand font-en">Charlene</span>
      </header>

      <p className="home__creator-row font-cn text-gradient">
        共 | 创 | 者 | 星 | 球
      </p>

      <h1 className="home__hero-cn font-cn-display">
        Hi，charlene
        <span className="home__cursor" aria-hidden="true" />
      </h1>
      <p className="home__hero-en font-en">TECHNOLOGY · INSIGHT · FUTURE</p>

      <div className="home__slogan-block">
        <p className="home__slogan-cn font-cn-display text-gradient">科技，洞见未来</p>
        <p className="home__slogan-en font-en">有为探索 · 时光正好</p>
      </div>

      <div className="home__bio font-cn">
        <p>
          以设计与代码连接当下与未来，在黑色画布上绘制高能绿色的数字轨迹。
        </p>
        <div className="home__badges">
          <span className="home__badge font-en">OPEN</span>
          <span className="home__badge home__badge--muted font-cn">可合作</span>
        </div>
      </div>

      <button type="button" className="home__btn font-en" onClick={() => navigate('/contact')}>
        <span>Get In Touch</span>
      </button>

      <p className="home__meta font-en">ColorOS-inspired · Personal Studio</p>
    </div>
  )
}

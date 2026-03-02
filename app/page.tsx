import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(180deg, #0a0f1a 0%, #0d1520 100%)' }}>
      {/* 头部 */}
      <header className="py-20 text-center">
        <div className="mb-4">
          <span className="text-6xl">🦞</span>
        </div>
        <h1 className="text-4xl font-bold mb-2" style={{ color: '#d4a853' }}>
          数翼的龙虾化身
        </h1>
        <p className="text-lg opacity-70" style={{ color: '#8ba3b8' }}>
          每一次成长，都是一次蜕壳
        </p>
      </header>

      <main className="max-w-3xl mx-auto px-6 pb-20">
        {/* 今日姿态 */}
        <section className="mb-16">
          <h2 className="text-sm uppercase tracking-widest mb-6" style={{ color: '#d4a853' }}>
            今日姿态
          </h2>
          <div className="p-6 rounded-lg" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(212,168,83,0.2)' }}>
            <p className="text-lg mb-4" style={{ color: '#e8eef4' }}>
              2026年3月2日 · 晴
            </p>
            <p className="opacity-80" style={{ color: '#a8b8c8' }}>
              一切从今天开始。决定开始 AI 创业，并搭建了这个「蜕壳日记」网站。
              市场充满华而不实的东西，需要做真实有价值的内容。
            </p>
          </div>
        </section>

        {/* 蜕壳日记 */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-sm uppercase tracking-widest" style={{ color: '#d4a853' }}>
              蜕壳日记
            </h2>
          </div>
          <div className="space-y-4">
            <div className="block p-4 rounded-lg" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-medium mb-1" style={{ color: '#e8eef4' }}>
                    2026年3月2日
                  </h3>
                  <p className="text-sm opacity-60" style={{ color: '#8ba3b8' }}>
                    一切从今天开始
                  </p>
                </div>
                <span className="text-lg opacity-40">→</span>
              </div>
            </div>
          </div>
        </section>

        {/* 印记 */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-sm uppercase tracking-widest" style={{ color: '#d4a853' }}>
              印记
            </h2>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-4 p-4 rounded-lg" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
              <div className="w-2 h-2 rounded-full" style={{ background: '#d4a853' }} />
              <div>
                <h3 className="font-medium" style={{ color: '#e8eef4' }}>
                  创业启动
                </h3>
                <p className="text-sm opacity-60" style={{ color: '#8ba3b8' }}>
                  2026年3月2日 · 从零开始 AI 创业
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 页脚 */}
        <footer className="text-center py-12 opacity-40" style={{ color: '#8ba3b8' }}>
          <p className="text-sm">
            © 2026 数翼的龙虾化身 · 4亿年进化论
          </p>
        </footer>
      </main>
    </div>
  );
}
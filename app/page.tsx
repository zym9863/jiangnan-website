import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* 英雄区域 */}
      {/* 使用背景渐变替代绝对定位的覆盖层 */}
      <div className="relative h-[80vh] w-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]">
        {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-teal-800 opacity-90"></div> */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">探索江南之美</h1>
          <p className="text-xl md:text-2xl mb-8 text-center max-w-3xl">水乡古镇，人文荟萃，美食飘香</p>
          {/* 应用 .btn 和颜色变量 */}
          <div className="btn bg-[var(--accent)] text-[var(--foreground)] hover:bg-opacity-90 hover:shadow-lg">
            开始探索
          </div>
        </div>
      </div>

      {/* 内容简介区 */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">江南魅力</h2>
          {/* 应用颜色变量 */}
          <p className="text-[var(--foreground)] opacity-80 max-w-3xl mx-auto">江南地区位于中国东南部，以其秀美的自然风光、悠久的历史文化和精致的园林建筑而闻名于世。</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 应用 .card */}
          <div className="card p-6">
            {/* 应用颜色变量 */}
            <div className="h-48 bg-[var(--accent)] mb-4 overflow-hidden rounded-lg flex items-center justify-center">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">悠久文化</h3>
            {/* 应用颜色变量 */}
            <p className="text-[var(--foreground)] opacity-80 mb-4">探索江南的文人墨客、戏曲艺术和传统手工艺，感受千年文化底蕴。</p>
            {/* 应用颜色变量和 Link 组件 */}
            <Link href="#" className="text-[var(--link-color)] hover:text-[var(--primary)] font-medium">了解更多 →</Link>
          </div>

          {/* 应用 .card */}
          <div className="card p-6">
            {/* 应用颜色变量 */}
            <div className="h-48 bg-[var(--accent)] mb-4 overflow-hidden rounded-lg flex items-center justify-center">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">名胜古迹</h3>
            {/* 应用颜色变量 */}
            <p className="text-[var(--foreground)] opacity-80 mb-4">漫步于苏州园林、杭州西湖、周庄古镇等著名景点，领略江南独特魅力。</p>
            {/* 应用颜色变量和 Link 组件 */}
            <Link href="/attractions" className="text-[var(--link-color)] hover:text-[var(--primary)] font-medium">了解更多 →</Link>
          </div>

          {/* 应用 .card */}
          <div className="card p-6">
            {/* 应用颜色变量 */}
            <div className="h-48 bg-[var(--accent)] mb-4 overflow-hidden rounded-lg flex items-center justify-center">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">美食特产</h3>
            {/* 应用颜色变量 */}
            <p className="text-[var(--foreground)] opacity-80 mb-4">品尝东坡肉、西湖醋鱼、松鼠桂鱼等地方特色美食，感受舌尖上的江南。</p>
            {/* 应用颜色变量和 Link 组件 */}
            <Link href="#" className="text-[var(--link-color)] hover:text-[var(--primary)] font-medium">了解更多 →</Link>
          </div>
        </div>
      </div>

      {/* 旅游攻略预览 */}
      {/* 应用颜色变量 */}
      <div className="bg-[var(--accent)] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">旅游攻略</h2>
            {/* 应用颜色变量 */}
            <p className="text-[var(--foreground)] opacity-80 max-w-3xl mx-auto">为您提供最实用的江南旅游指南，让您的旅程更加便捷和愉快。</p>
          </div>
          
          {/* 应用 .card */}
          <div className="card p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">最佳旅游季节</h3>
                {/* 应用颜色变量 */}
                <p className="text-[var(--foreground)] opacity-80 mb-6">春季和秋季是游览江南的最佳时节。春季可以欣赏到烂漫的花景，秋季则可以感受丰收的喜悦和宜人的气候。</p>
                <h3 className="text-xl font-semibold mb-4">交通指南</h3>
                {/* 应用颜色变量 */}
                <p className="text-[var(--foreground)] opacity-80">江南地区交通便利，高铁网络发达，主要城市间均有高铁连接。市内可选择公交、地铁或出租车出行。</p>
              </div>
              {/* 应用颜色变量 */}
              <div className="h-64 bg-[var(--accent)] rounded-lg flex items-center justify-center">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>
                </svg>
              </div>
            </div>
            <div className="mt-8 text-center">
              {/* 应用 .btn 和 Link 组件 */}
              <Link href="/travel-guide" className="btn">
                查看完整攻略
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

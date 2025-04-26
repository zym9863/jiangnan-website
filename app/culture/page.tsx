import Link from 'next/link';

export default function Culture() {
  return (
    <div className="min-h-screen">
      {/* 页面标题区 */}
      <div className="relative h-[40vh] w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-teal-800 opacity-90"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">江南文化</h1>
          <p className="text-lg md:text-xl text-center max-w-3xl">千年文脉，诗书画韵，江南风雅</p>
        </div>
      </div>

      {/* 内容区域 */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">文化概览</h2>
          <p className="text-gray-600 mb-8 max-w-4xl mx-auto text-lg">
            江南文化是中国传统文化的重要组成部分，以其精致典雅、含蓄内敛的特点闻名于世。自古以来，江南地区人文荟萃，文人雅士辈出，形成了独具特色的文化风貌，涵盖文学、艺术、建筑、饮食等多个方面。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">文学艺术</h3>
              <p className="text-gray-600 mb-6">
                江南是中国古代文学的重要发源地之一，唐宋以来，众多文人墨客在此留下了不朽的诗词歌赋。苏轼、白居易、陆游等文学巨匠都曾在江南留下足迹，创作了大量描绘江南风光的名篇佳作。
              </p>
              <p className="text-gray-600">
                江南画派以写意山水画著称，强调意境与神韵，代表人物有&quot;吴门四家&quot;等。此外，昆曲、越剧等戏曲艺术也是江南文化的重要组成部分。
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">园林建筑</h3>
              <p className="text-gray-600 mb-6">
                江南园林以其精巧的布局、雅致的意境和丰富的文化内涵著称于世。苏州园林被誉为&quot;咫尺之内再造乾坤&quot;，体现了中国传统哲学思想与审美观念的完美结合。
              </p>
              <p className="text-gray-600">
                江南民居建筑多为白墙黛瓦，粉墙黛瓦、小桥流水成为江南水乡的典型意象。徽派建筑则以其马头墙、精美的木雕石刻闻名。
              </p>
            </div>
          </div>
        </div>

        {/* 传统手工艺 */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">传统手工艺</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gray-200 mb-4 overflow-hidden rounded-lg flex items-center justify-center">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">苏绣</h3>
              <p className="text-gray-600 mb-4">苏绣是中国四大名绣之一，以其针法细腻、图案精美、色彩和谐著称，被誉为&quot;绣中之冠&quot;。苏绣历史悠久，技艺精湛，能将自然景观、花鸟虫鱼栩栩如生地呈现在绣品上，是江南地区重要的非物质文化遗产。</p>
              <Link href="#" className="text-blue-600 hover:text-blue-800 font-medium">了解更多 →</Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gray-200 mb-4 overflow-hidden rounded-lg flex items-center justify-center">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">宜兴紫砂</h3>
              <p className="text-gray-600 mb-4">宜兴紫砂陶艺是江苏宜兴特有的传统工艺，以其独特的材质和工艺闻名于世。紫砂壶不仅是实用的茶具，更是艺术品和收藏品，体现了中国传统文化中&quot;天人合一&quot;的哲学思想。</p>
              <Link href="#" className="text-blue-600 hover:text-blue-800 font-medium">了解更多 →</Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gray-200 mb-4 overflow-hidden rounded-lg flex items-center justify-center">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">南京云锦</h3>
              <p className="text-gray-600 mb-4">南京云锦是中国传统丝织工艺的代表，被誉为&quot;中国第一锦&quot;。云锦织造技艺复杂，图案华丽，色彩绚丽，集实用性与艺术性于一体，是中国古代纺织技术的巅峰之作。</p>
              <Link href="#" className="text-blue-600 hover:text-blue-800 font-medium">了解更多 →</Link>
            </div>
          </div>
        </div>

        {/* 文化活动 */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">文化活动</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gray-200 mb-4 overflow-hidden rounded-lg flex items-center justify-center">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">江南文化节</h3>
              <p className="text-gray-600 mb-4">每年春季举办的江南文化节汇集了传统戏曲表演、手工艺展示、诗词吟诵等多种文化活动，为游客提供沉浸式的江南文化体验。</p>
              <Link href="#" className="text-blue-600 hover:text-blue-800 font-medium">查看日程 →</Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gray-200 mb-4 overflow-hidden rounded-lg flex items-center justify-center">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">昆曲艺术展演</h3>
              <p className="text-gray-600 mb-4">作为&quot;百戏之祖&quot;的昆曲是江南文化的瑰宝，定期举办的昆曲艺术展演让观众近距离感受这一古老艺术形式的魅力与风采。</p>
              <Link href="#" className="text-blue-600 hover:text-blue-800 font-medium">预约参观 →</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
import Image from 'next/image';
import Link from 'next/link';

export default function Attractions() {
  return (
    <div className="min-h-screen">
      {/* 页面标题区 - 应用颜色变量 */}
      <div className="relative h-[40vh] w-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]">
        {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-teal-800 opacity-90"></div> */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">景点介绍</h1>
          <p className="text-lg md:text-xl text-center max-w-3xl">烟雨江南，水乡古镇，名胜古迹</p>
        </div>
      </div>

      {/* 内容区域 */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {/* 热门景点 */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">热门景点</h2>
          {/* 应用颜色变量 */}
          <p className="text-[var(--foreground)] opacity-80 mb-8 max-w-4xl mx-auto text-lg">
            江南地区拥有众多历史悠久、风景秀丽的景点，从古典园林到水乡古镇，从历史名胜到自然风光，处处彰显着江南特有的风味与魅力。
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* 应用 .card */}
            <div className="card overflow-hidden">
              {/* 应用颜色变量 */}
              <div className="h-56 bg-[var(--accent)] relative flex items-center justify-center">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path>
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">苏州园林</h3>
                {/* 应用颜色变量 */}
                <p className="text-[var(--foreground)] opacity-80 mb-4">
                  苏州园林以其精巧的设计、雅致的意境和丰富的文化内涵闻名于世，代表作有拙政园、留园、网师园等，被誉为中国古典园林的代表。
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">江苏苏州</span>
                  {/* 应用颜色变量和 Link 组件 */}
                  <Link href="#" className="text-[var(--link-color)] hover:text-[var(--primary)] font-medium">查看详情 →</Link>
                </div>
              </div>
            </div>
            
            {/* 应用 .card */}
            <div className="card overflow-hidden">
              {/* 应用颜色变量 */}
              <div className="h-56 bg-[var(--accent)] relative flex items-center justify-center">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path>
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">西湖风景区</h3>
                {/* 应用颜色变量 */}
                <p className="text-[var(--foreground)] opacity-80 mb-4">
                  杭州西湖以其秀丽的湖光山色和丰富的人文景观著称，"西湖十景"如雷贯耳，自古以来就是文人墨客向往的胜地，被誉为"人间天堂"。
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">浙江杭州</span>
                  {/* 应用颜色变量和 Link 组件 */}
                  <Link href="#" className="text-[var(--link-color)] hover:text-[var(--primary)] font-medium">查看详情 →</Link>
                </div>
              </div>
            </div>
            
            {/* 应用 .card */}
            <div className="card overflow-hidden">
              {/* 应用颜色变量 */}
              <div className="h-56 bg-[var(--accent)] relative flex items-center justify-center">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path>
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">周庄古镇</h3>
                {/* 应用颜色变量 */}
                <p className="text-[var(--foreground)] opacity-80 mb-4">
                  周庄被誉为"中国第一水乡"，保存着完整的明清建筑群和水乡风貌，小桥流水、粉墙黛瓦构成了一幅典型的江南水乡画卷。
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">江苏昆山</span>
                  {/* 应用颜色变量和 Link 组件 */}
                  <Link href="#" className="text-[var(--link-color)] hover:text-[var(--primary)] font-medium">查看详情 →</Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 历史名胜 */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">历史名胜</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 应用颜色变量 */}
            <div className="bg-[var(--accent)] p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">灵隐寺</h3>
              {/* 应用颜色变量 */}
              <p className="text-[var(--foreground)] opacity-80 mb-6">
                灵隐寺始建于东晋，是杭州最古老的寺庙，也是中国佛教禅宗十大古刹之一。寺内有飞来峰石窟、天王殿、大雄宝殿等众多历史建筑和文物。
              </p>
              {/* 应用颜色变量和 Link 组件 */}
              <Link href="#" className="text-[var(--link-color)] hover:text-[var(--primary)] font-medium">了解更多 →</Link>
            </div>
            
            {/* 应用颜色变量 */}
            <div className="bg-[var(--accent)] p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">南京夫子庙</h3>
              {/* 应用颜色变量 */}
              <p className="text-[var(--foreground)] opacity-80 mb-6">
                南京夫子庙是中国古代文化教育中心，始建于宋代，是祭祀孔子的场所，也是科举考试的重要场所。如今已成为集文化、旅游、商业于一体的繁华地段。
              </p>
              {/* 应用颜色变量和 Link 组件 */}
              <Link href="#" className="text-[var(--link-color)] hover:text-[var(--primary)] font-medium">了解更多 →</Link>
            </div>
          </div>
        </div>

        {/* 自然风光 */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">自然风光</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* 应用 .card */}
            <div className="card p-4">
              {/* 应用颜色变量 */}
              <div className="h-40 bg-[var(--accent)] mb-4 rounded-lg flex items-center justify-center">
                <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">太湖</h3>
              {/* 应用颜色变量 */}
              <p className="text-[var(--foreground)] opacity-80 text-sm">中国第三大淡水湖，湖光山色，风景如画</p>
            </div>
            
            {/* 应用 .card */}
            <div className="card p-4">
              {/* 应用颜色变量 */}
              <div className="h-40 bg-[var(--accent)] mb-4 rounded-lg flex items-center justify-center">
                <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">莫干山</h3>
              {/* 应用颜色变量 */}
              <p className="text-[var(--foreground)] opacity-80 text-sm">浙江名山，竹海茂密，避暑胜地</p>
            </div>
            
            {/* 应用 .card */}
            <div className="card p-4">
              {/* 应用颜色变量 */}
              <div className="h-40 bg-[var(--accent)] mb-4 rounded-lg flex items-center justify-center">
                <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">黄山</h3>
              {/* 应用颜色变量 */}
              <p className="text-[var(--foreground)] opacity-80 text-sm">安徽名山，奇松怪石，云海日出</p>
            </div>
            
            {/* 应用 .card */}
            <div className="card p-4">
              {/* 应用颜色变量 */}
              <div className="h-40 bg-[var(--accent)] mb-4 rounded-lg flex items-center justify-center">
                <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">千岛湖</h3>
              {/* 应用颜色变量 */}
              <p className="text-[var(--foreground)] opacity-80 text-sm">浙江淳安，碧水青山，岛屿星罗棋布</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}